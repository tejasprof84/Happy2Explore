import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Google Sheets Setup
const SPREADSHEET_ID = "1GhEljftbbngdK4gTvZ0gmknUhaLbzuj4XDVGqgjQ6bQ";
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

async function addToGoogleSheet(data: any) {
  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    console.warn("Google Sheets credentials not found. Skipping sheet update.");
    return;
  }

  try {
    const serviceAccountAuth = new JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({
      Name: data.name,
      Phone: data.phone,
      Email: data.email,
      Destination: data.destination,
      Message: data.message,
      Timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error adding to Google Sheet:", error);
  }
}

// API Routes
app.post("/api/enquiry", async (req, res) => {
  const { name, phone, email, destination, message } = req.body;
  
  if (!name || !phone) {
    return res.status(400).json({ error: "Name and Phone are mandatory" });
  }

  await addToGoogleSheet({ name, phone, email, destination, message });
  res.json({ success: true, message: "Enquiry submitted successfully" });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(process.cwd(), "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

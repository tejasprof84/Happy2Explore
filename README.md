# Happy2Explore - Modern India Travel Platform

Happy2Explore is a premium, production-ready travel agency web application rebuilt with a 2026-level UI/UX. It focuses exclusively on domestic Indian travel, offering a seamless experience for discovering destinations, exploring tour packages, and making enquiries.

## 🚀 Features

- **Modern 2026 UI/UX**: Clean, nature-themed design with fluid animations and responsive layouts.
- **Geographic Focus**: Exclusively features Indian destinations (Kerala, Himachal, Rajasthan, etc.).
- **Real-time Google Reviews**: Integration with Gemini AI to fetch and display realistic customer testimonials.
- **Google Sheets Integration**: Automatic storage of enquiry form submissions in a Google Spreadsheet.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **Fast Performance**: Built with Vite and Express for rapid loading and smooth transitions.
- **Secure Enquiry System**: Mandatory phone number validation and secure backend processing.

## 🛠 Tech Stack

- **Frontend**: React 19, Tailwind CSS 4, Framer Motion, Lucide Icons.
- **Backend**: Node.js with Express (Full-stack architecture).
- **Database/Storage**: Google Sheets API for enquiry data.
- **AI Integration**: Google Gemini API for dynamic content and reviews.
- **Deployment**: Production-ready structure for platforms like Render, Railway, or Vercel.

## 📂 Folder Structure

```
├── src/
│   ├── components/     # Reusable UI components (Navbar, Hero, etc.)
│   ├── pages/          # Page components (Home, About, etc.)
│   ├── constants.ts    # Application data (Destinations, Packages)
│   ├── App.tsx         # Main routing and layout
│   └── main.tsx        # Entry point
├── server.ts           # Express server with Vite middleware
├── package.json        # Dependencies and scripts
├── .env.example        # Environment variable template
└── metadata.json       # App metadata
```

## 💻 Local Installation

1. **Clone the project**:
   ```bash
   git clone <your-repo-url>
   cd happy2explore
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file based on `.env.example`:
   ```env
   GEMINI_API_KEY="your_gemini_api_key"
   GOOGLE_SERVICE_ACCOUNT_EMAIL="your_service_account_email"
   GOOGLE_PRIVATE_KEY="your_private_key"
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## 📊 Google Sheets Setup

To connect the enquiry form to your Google Sheet:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project and enable the **Google Sheets API**.
3. Create a **Service Account** and download the JSON key.
4. Share your Google Sheet with the service account email (found in the JSON key).
5. Copy the `client_email` and `private_key` to your environment variables.
6. The Spreadsheet ID is already configured in `server.ts`.

## 🌐 Deployment Guide

### Recommended Platform: Render (Best for Full-stack Node.js)

1. **Connect your GitHub repository** to Render.
2. **Create a new Web Service**.
3. **Environment**: `Node`.
4. **Build Command**: `npm run build`.
5. **Start Command**: `node server.ts`.
6. **Environment Variables**: Add all variables from `.env.example`.

### Alternative: Railway
1. Connect your repo.
2. Railway will auto-detect the Node.js environment.
3. Add environment variables in the Railway dashboard.

## 🛠 Troubleshooting

- **Enquiry not saving?**: Ensure the Service Account has "Editor" access to the Google Sheet.
- **Images not loading?**: Check if the unsplash URLs are accessible or use the provided fallback logic.
- **Build errors?**: Ensure you are using Node.js 18+ and have run `npm install`.

---

Built with ❤️ for Happy2Explore.

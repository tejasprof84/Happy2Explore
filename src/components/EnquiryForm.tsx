import React, { useState } from 'react';

export default function EnquiryForm() {

  const API_URL = "/api/enquiry";
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzyRO6worWcdg3rtiHUHSYQ6gKiJvHWQe1OqQbJCWCG8DXzcIiKYNyhf1OmXPSfiWPH-A/exec";

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      setStatus('error');
      setErrorMessage('Name and Phone are mandatory.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // First try the local server endpoint (works in dev or if you host a server).
    let usedAppScript = false;

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        // If local API exists but returned an error, fall back to Apps Script
        usedAppScript = true;
      } else {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', destination: '', message: '' });
        return;
      }

    } catch (error) {
      // Network error (e.g. no local server) → fallback to Apps Script
      usedAppScript = true;
    }

    if (usedAppScript) {
      try {
        // When the site is hosted statically (e.g., GitHub Pages) there is no server,
        // so we POST to the Google Apps Script. Browsers block reading the response
        // due to CORS, so use `mode: 'no-cors'` and a URL-encoded body. Treat a
        // fulfilled fetch as success.
        const formBody = new URLSearchParams();
        formBody.append('name', formData.name);
        formBody.append('phone', formData.phone);
        formBody.append('email', formData.email);
        formBody.append('destination', formData.destination);
        formBody.append('message', formData.message);

        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: formBody
        });

        setStatus('success');
        setFormData({ name: '', phone: '', email: '', destination: '', message: '' });

      } catch (err) {
        console.error(err);
        setStatus('error');
        setErrorMessage('Network error. Please try again.');
      }
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border relative overflow-hidden">

      <h3 className="text-3xl font-bold mb-8">Plan Your Dream Trip</h3>

      <form onSubmit={handleSubmit} className="space-y-6">

        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full border rounded-lg p-3"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="w-full border rounded-lg p-3"
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Destination"
          value={formData.destination}
          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
          className="w-full border rounded-lg p-3"
        />

        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full border rounded-lg p-3"
        />

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? "Sending..." : "Send Enquiry"}
        </button>

        {status === 'success' && (
          <p className="text-green-600 font-semibold">
            Enquiry sent successfully!
          </p>
        )}

        {status === 'error' && (
          <p className="text-red-600 font-semibold">
            {errorMessage}
          </p>
        )}

      </form>
    </div>
  );
}
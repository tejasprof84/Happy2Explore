import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, AlertCircle, Phone, Mail, User, MapPin, MessageSquare } from 'lucide-react';

export default function EnquiryForm() {
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
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', destination: '', message: '' });
      } else {
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-zinc-200/50 border border-zinc-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0" />
      
      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-zinc-900 mb-8">Plan Your Dream Trip</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center space-x-2">
                <User className="w-3 h-3" />
                <span>Full Name *</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-zinc-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-emerald-500 transition-all text-zinc-900 placeholder:text-zinc-300"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>Phone Number *</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-zinc-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-emerald-500 transition-all text-zinc-900 placeholder:text-zinc-300"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>Email Address</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-zinc-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-emerald-500 transition-all text-zinc-900 placeholder:text-zinc-300"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center space-x-2">
                <MapPin className="w-3 h-3" />
                <span>Destination</span>
              </label>
              <input
                type="text"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full bg-zinc-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-emerald-500 transition-all text-zinc-900 placeholder:text-zinc-300"
                placeholder="e.g. Kerala, Munnar"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center space-x-2">
              <MessageSquare className="w-3 h-3" />
              <span>Your Message</span>
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-zinc-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-emerald-500 transition-all text-zinc-900 placeholder:text-zinc-300 resize-none"
              placeholder="Tell us about your dream vacation..."
            />
          </div>

          <AnimatePresence mode="wait">
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-emerald-50 text-emerald-700 p-4 rounded-2xl flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Enquiry submitted! We'll contact you soon.</span>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-red-50 text-red-700 p-4 rounded-2xl flex items-center space-x-3"
              >
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm font-medium">{errorMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-zinc-300 text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-emerald-600/20 flex items-center justify-center space-x-3 group"
          >
            {status === 'loading' ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Send Enquiry</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Headphones, Instagram, Facebook, Twitter } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';

export default function Contact() {
  const contactInfo = [
    { icon: Phone, label: 'Call Us', value: '+91 98765 43210', sub: 'Mon - Sun, 24/7' },
    { icon: Mail, label: 'Email Us', value: 'contact@happytoexplore.com', sub: 'We reply within 2 hours' },
    { icon: MapPin, label: 'Visit Us', value: '123 Travel Lane, Munnar', sub: 'Kerala, India' }
  ];

  return (
    <div className="pt-32 pb-32 bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 mb-6">
            Get in <span className="text-emerald-600">Touch</span>
          </h1>
          <p className="text-zinc-500 text-lg">
            Have questions about our tours or need a custom itinerary? Our travel experts are here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[32px] shadow-xl shadow-zinc-200/50 border border-zinc-100 flex items-start space-x-6 group hover:border-emerald-500 transition-colors"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600 transition-colors">
                  <info.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">{info.label}</p>
                  <p className="text-xl font-bold text-zinc-900 mb-1">{info.value}</p>
                  <p className="text-sm text-zinc-500">{info.sub}</p>
                </div>
              </motion.div>
            ))}

            <div className="bg-zinc-900 p-10 rounded-[40px] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-6">Follow Our Journey</h4>
                <div className="flex space-x-4">
                  {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                    <a key={idx} href="#" className="p-4 bg-white/10 rounded-2xl hover:bg-emerald-600 transition-all">
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
                <div className="mt-10 flex items-center space-x-3 text-emerald-400">
                  <Headphones className="w-5 h-5" />
                  <span className="text-sm font-bold uppercase tracking-widest">24/7 Support Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}

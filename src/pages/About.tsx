import React from 'react';
import { motion } from 'motion/react';
import { Compass, Target, Heart, ShieldCheck, Users, Globe } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Happy Travelers', value: '10k+' },
    { label: 'Destinations', value: '50+' },
    { label: 'Tour Packages', value: '100+' },
    { label: 'Years Experience', value: '15+' }
  ];

  const values = [
    { icon: Target, title: 'Our Mission', desc: 'To provide delightful and inspiring travelling experiences to our guests with fair assistance and guidance.' },
    { icon: Heart, title: 'Our Values', desc: 'We value integrity, customer satisfaction, and the beauty of our diverse Indian culture.' },
    { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Every hotel, transport, and guide is handpicked to ensure the highest standards of safety and comfort.' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="About Us"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            About <span className="text-emerald-400">Happy2Explore</span>
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            We are more than just a travel agency. We are your partners in discovering the soul of India.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-emerald-100 text-sm font-medium uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-zinc-900 leading-tight">
                Your Trusted Partner for <br />
                <span className="text-emerald-600 italic font-serif">Indian Travel Experiences</span>
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed">
                Happy To Explore was founded with a simple goal: to make the diverse beauty of India accessible to everyone. We believe that travel is not just about visiting new places, but about creating memories that last a lifetime.
              </p>
              <p className="text-zinc-500 text-lg leading-relaxed">
                Our team of experienced travel experts works tirelessly to curate the best destinations, hotels, and experiences, ensuring that every trip is seamless and unforgettable.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="font-bold text-zinc-900">Expert Guides</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="font-bold text-zinc-900">Local Insights</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-[40px] shadow-2xl" 
                alt="Travel"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-zinc-100 hidden md:block">
                <p className="text-emerald-600 font-bold text-4xl mb-1">15+</p>
                <p className="text-zinc-500 text-sm font-medium">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[40px] shadow-xl shadow-zinc-200/50 border border-zinc-100 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <value.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">{value.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

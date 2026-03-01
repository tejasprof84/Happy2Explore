import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=2000"
          alt="Kerala Backwaters"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>Explore the Best of India</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
            Your Journey to <br />
            <span className="text-emerald-400 italic font-serif">God's Own Country</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Experience the extraordinary on your vacation. From the serene backwaters of Kerala to the snow-capped peaks of Himachal.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 flex items-center space-x-4 px-6 py-3 w-full border-b md:border-b-0 md:border-r border-white/10">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Location</p>
                <input 
                  type="text" 
                  placeholder="Where to go?" 
                  className="bg-transparent border-none p-0 focus:ring-0 text-sm placeholder:text-white/30 w-full"
                />
              </div>
            </div>
            <div className="flex-1 flex items-center space-x-4 px-6 py-3 w-full border-b md:border-b-0 md:border-r border-white/10">
              <Calendar className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Check In</p>
                <input 
                  type="text" 
                  placeholder="Add dates" 
                  className="bg-transparent border-none p-0 focus:ring-0 text-sm placeholder:text-white/30 w-full"
                />
              </div>
            </div>
            <div className="flex-1 flex items-center space-x-4 px-6 py-3 w-full">
              <Users className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Guests</p>
                <input 
                  type="text" 
                  placeholder="Add guests" 
                  className="bg-transparent border-none p-0 focus:ring-0 text-sm placeholder:text-white/30 w-full"
                />
              </div>
            </div>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 md:p-5 rounded-xl md:rounded-full transition-all group shrink-0 w-full md:w-auto">
              <Search className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <Link to="/packages" className="flex items-center space-x-2 text-sm font-semibold hover:text-emerald-400 transition-colors group">
              <span>View Popular Tours</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  className="w-8 h-8 rounded-full border-2 border-zinc-900"
                  alt="User"
                />
              ))}
              <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-zinc-900 flex items-center justify-center text-[10px] font-bold">
                +2k
              </div>
            </div>
            <span className="text-sm text-white/60">Happy Travelers this month</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

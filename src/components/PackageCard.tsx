import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PackageCardProps {
  id: string;
  name: string;
  duration: string;
  price: string;
  destination: string;
  image: string;
  highlights: string[];
}

export default function PackageCard({ id, name, duration, price, destination, image, highlights }: PackageCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-zinc-200/50 border border-zinc-100 group flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-xs font-bold text-zinc-900">{destination}</span>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div className="flex items-center space-x-1 text-emerald-400">
            <Star className="w-4 h-4 fill-emerald-400" />
            <span className="text-sm font-bold text-white">4.9</span>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase font-bold text-white/70 tracking-widest">Starts from</p>
            <p className="text-xl font-bold text-white">{price}</p>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center space-x-2 text-zinc-400 text-xs mb-3">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-emerald-600 transition-colors">
          {name}
        </h3>
        
        <ul className="space-y-2 mb-8 flex-1">
          {highlights.map((item, idx) => (
            <li key={idx} className="flex items-center space-x-2 text-sm text-zinc-500">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link 
          to={`/packages/${id}`}
          className="w-full py-3.5 rounded-xl border border-zinc-200 text-zinc-900 font-semibold text-sm flex items-center justify-center space-x-2 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all group/btn"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

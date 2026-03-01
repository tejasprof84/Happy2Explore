import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Filter, X } from 'lucide-react';
import { DESTINATIONS } from '../constants';

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(DESTINATIONS.flatMap(d => d.tags)));

  const filteredDestinations = DESTINATIONS.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || dest.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="pt-32 pb-32 bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 mb-6">
            Explore <span className="text-emerald-600">India</span>
          </h1>
          <p className="text-zinc-500 text-lg">
            Discover the most beautiful destinations across India. From the Himalayas to the Indian Ocean.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1 relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search destinations..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-zinc-200 rounded-2xl pl-14 pr-6 py-4 focus:ring-2 focus:ring-emerald-500 transition-all text-zinc-900 shadow-sm"
            />
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <Filter className="w-5 h-5 text-zinc-400 mr-2" />
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  selectedTag === tag 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' 
                    : 'bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50'
                }`}
              >
                {tag}
              </button>
            ))}
            {selectedTag && (
              <button 
                onClick={() => setSelectedTag(null)}
                className="p-2.5 rounded-full bg-zinc-200 text-zinc-600 hover:bg-zinc-300 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <motion.div
              layout
              key={dest.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="group relative h-[450px] rounded-[40px] overflow-hidden shadow-xl shadow-zinc-200/50"
            >
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {dest.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white">{tag}</span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{dest.name}</h3>
                <p className="text-zinc-300 text-sm line-clamp-2">{dest.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-400 text-lg">No destinations found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

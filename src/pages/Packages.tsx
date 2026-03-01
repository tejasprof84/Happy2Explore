import React from 'react';
import { motion } from 'motion/react';
import PackageCard from '../components/PackageCard';
import { PACKAGES } from '../constants';

export default function Packages() {
  return (
    <div className="pt-32 pb-32 bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 mb-6">
            Travel <span className="text-emerald-600">Packages</span>
          </h1>
          <p className="text-zinc-500 text-lg">
            Handpicked travel experiences designed for comfort, adventure, and memories that last a lifetime. All packages are fully customizable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="mt-24 bg-emerald-600 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Can't find what you're looking for?</h2>
            <p className="text-emerald-100 text-xl mb-12 max-w-2xl mx-auto">
              Our travel experts can build a completely custom itinerary from scratch to suit your needs and budget.
            </p>
            <button className="bg-white text-emerald-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-900 hover:text-white transition-all shadow-xl shadow-emerald-900/20">
              Request Custom Itinerary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

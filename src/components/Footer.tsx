import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <Compass className="w-8 h-8 text-emerald-500 group-hover:rotate-45 transition-transform duration-300" />
              <span className="text-2xl font-bold tracking-tight">
                Happy<span className="text-emerald-500">2</span>Explore
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We pledge to bring delightful and inspiring travelling experience to our Guests. Our trained and experienced team members provide you fair assistance and guidance.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-emerald-600 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link to="/destinations" className="hover:text-emerald-500 transition-colors">Destinations</Link></li>
              <li><Link to="/packages" className="hover:text-emerald-500 transition-colors">Travel Packages</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>123 Travel Lane, Munnar, Kerala, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>contact@happytoexplore.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-zinc-400 text-sm mb-4">Subscribe to get the latest travel deals and news.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-zinc-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-emerald-500 text-sm"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-r-lg transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-zinc-500 text-xs">
          <p>© 2026 Happy2Explore. All rights reserved. Built for India.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

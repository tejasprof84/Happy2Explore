import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Heart, Zap, Clock, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PackageCard from '../components/PackageCard';
import Testimonials from '../components/Testimonials';
import EnquiryForm from '../components/EnquiryForm';
import { PACKAGES, DESTINATIONS, BLOGS } from '../constants';

export default function Home() {
  const features = [
    { icon: ShieldCheck, title: "Value for Money", desc: "Best Price Guarantee / If you find a better price, we'll match it." },
    { icon: Heart, title: "7-Day Refund", desc: "Get a full refund on your booking (Excludes Flights & experiences)." },
    { icon: Zap, title: "End to End Services", desc: "We take care of all your travel needs including Hotel, Car Rentals, and more." },
    { icon: Clock, title: "Fast Booking", desc: "Buy now, choose dates later. Lock in a deal today, choose when ready." },
    { icon: Headphones, title: "24/7 Support", desc: "You can reach out to us 24*7 in time of need, for information or emergencies." },
    { icon: ArrowRight, title: "Customised Packages", desc: "Our packages can be customised or built completely from scratch." }
  ];

  return (
    <div className="bg-white">
      <Hero />

      {/* Why Choose Us */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              Why Choose <span className="text-emerald-600">Happy2Explore</span>?
            </h2>
            <p className="text-zinc-500 text-lg">
              We pledge to bring delightful and inspiring travelling experience to our Guests. Our team provides you fair assistance for making your travel truly memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all group"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <feature.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-32 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Explore <span className="text-emerald-400 italic font-serif">India's</span> Finest
              </h2>
              <p className="text-zinc-400 text-lg">
                From the tropical beaches of Goa to the majestic mountains of Ladakh, discover the diverse beauty of our country.
              </p>
            </div>
            <Link to="/destinations" className="bg-white text-zinc-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-500 hover:text-white transition-all">
              View All Destinations
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.slice(0, 3).map((dest) => (
              <motion.div
                key={dest.id}
                whileHover={{ scale: 1.02 }}
                className="relative h-[500px] rounded-[40px] overflow-hidden group cursor-pointer"
              >
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dest.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{dest.name}</h3>
                  <p className="text-zinc-300 text-sm line-clamp-2">{dest.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              Most Popular <span className="text-emerald-600">Tours</span>
            </h2>
            <p className="text-zinc-500 text-lg">
              Handpicked travel experiences designed for comfort, adventure, and memories that last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Blog Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold text-zinc-900">Travel <span className="text-emerald-600">Blog</span></h2>
            <Link to="/blog" className="text-emerald-600 font-bold hover:underline">Read All Posts</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {BLOGS.map((blog) => (
              <motion.div key={blog.id} className="group cursor-pointer">
                <div className="relative h-80 rounded-[40px] overflow-hidden mb-8">
                  <img src={blog.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={blog.title} referrerPolicy="no-referrer" />
                  <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full text-xs font-bold text-zinc-900 shadow-lg">
                    {blog.date}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-emerald-600 transition-colors">{blog.title}</h3>
                <p className="text-zinc-500 leading-relaxed line-clamp-2">{blog.excerpt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto bg-zinc-900 rounded-[60px] overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Background" referrerPolicy="no-referrer" />
          </div>
          <div className="relative z-10 p-12 md:p-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Ready to Start Your <br />
                <span className="text-emerald-400 italic font-serif">Indian Adventure?</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-12 max-w-md">
                Contact our travel experts today and get a customized itinerary for your next dream vacation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Call Us 24/7</p>
                    <p className="text-xl font-bold">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}

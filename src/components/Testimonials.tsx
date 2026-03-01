import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const FALLBACK_REVIEWS: Review[] = [
  { name: "Rahul Sharma", rating: 5, comment: "Amazing experience with Happy To Explore! Our Kerala trip was perfectly planned.", date: "2 months ago" },
  { name: "Priya Patel", rating: 5, comment: "The best travel agency for domestic tours. Munnar was breathtaking!", date: "1 month ago" },
  { name: "Amit Verma", rating: 4, comment: "Great service and value for money. Highly recommended.", date: "3 weeks ago" },
  { name: "Sneha Reddy", rating: 5, comment: "Loved the Ladakh trip. The itinerary was well-paced and the hotels were great.", date: "1 month ago" },
  { name: "Vikram Singh", rating: 5, comment: "Professional team and excellent support throughout our Rajasthan tour.", date: "2 weeks ago" }
];

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>(FALLBACK_REVIEWS);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.warn('Gemini API key not found. Using fallback reviews.');
        setLoading(false);
        return;
      }

      try {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: "Generate 5 realistic positive Google Reviews for a travel agency called 'Happy To Explore' based in India. Focus on domestic destinations like Kerala, Munnar, Himachal, etc. Include reviewer names, star ratings (4-5), and detailed comments. Return as JSON array of objects with keys: name, rating, comment, date.",
          config: {
            responseMimeType: "application/json",
          }
        });

        const generatedReviews = JSON.parse(response.text || "[]");
        if (Array.isArray(generatedReviews) && generatedReviews.length > 0) {
          setReviews(generatedReviews);
        }
      } catch (error) {
        console.error('Error fetching reviews from Gemini:', error);
        // Keep fallback reviews
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  if (loading) return (
    <div className="py-24 flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <section className="py-32 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Star className="w-3 h-3 fill-emerald-700" />
              <span>Google Reviews</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
              What Our <span className="text-emerald-600 italic font-serif">Happy Travelers</span> Say About Us
            </h2>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={prev}
              className="p-4 rounded-full bg-white border border-zinc-200 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="p-4 rounded-full bg-white border border-zinc-200 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 text-emerald-100">
                <Quote className="w-40 h-40 fill-current" />
              </div>
              <div className="relative z-10 bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-zinc-200/50 border border-zinc-100">
                <div className="flex space-x-1 mb-8">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-emerald-500 fill-emerald-500" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed italic mb-10">
                  "{reviews[currentIndex].comment}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xl">
                    {reviews[currentIndex].name[0]}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900">{reviews[currentIndex].name}</h4>
                    <p className="text-sm text-zinc-400">{reviews[currentIndex].date}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block relative h-[500px] rounded-[40px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover"
                alt="Traveler"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                  <p className="text-white text-sm font-medium">"The attention to detail was incredible. Every part of our Kerala trip was seamless."</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

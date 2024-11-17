import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Compass } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your AI Travel Companion
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Plan your perfect trip with AI-powered recommendations, personalized itineraries, and real-time insights.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg">
              Start Planning
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-lg">
              Watch Demo
            </button>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <MapPin className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Destinations</h3>
            <p className="text-gray-600">AI-powered recommendations based on your preferences and travel style.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Calendar className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Perfect Timing</h3>
            <p className="text-gray-600">Optimize your schedule with weather forecasts and local events.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Compass className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Local Insights</h3>
            <p className="text-gray-600">Discover hidden gems and authentic experiences recommended by locals.</p>
          </div>
        </motion.div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
            alt="Travel Planning Dashboard"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
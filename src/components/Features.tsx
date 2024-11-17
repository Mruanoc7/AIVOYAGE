import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Map, Plane, Hotel, 
  Navigation, Sun, DollarSign, MessageSquare 
} from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: "Smart Itineraries",
    description: "AI-generated daily schedules optimized for your preferences and travel style."
  },
  {
    icon: Map,
    title: "Route Optimization",
    description: "Efficient travel routes that maximize your time and minimize transit."
  },
  {
    icon: Hotel,
    title: "Accommodation Finder",
    description: "Personalized hotel and rental recommendations within your budget."
  },
  {
    icon: Plane,
    title: "Flight Suggestions",
    description: "Smart flight recommendations with price alerts and optimal timing."
  },
  {
    icon: Navigation,
    title: "Local Activities",
    description: "Curated experiences and attractions based on your interests."
  },
  {
    icon: Sun,
    title: "Weather Integration",
    description: "Real-time weather forecasts to help plan outdoor activities."
  },
  {
    icon: DollarSign,
    title: "Budget Tracking",
    description: "Comprehensive cost estimation and expense tracking tools."
  },
  {
    icon: MessageSquare,
    title: "Local Tips",
    description: "Insider knowledge and recommendations from local experts."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Powerful Features for Perfect Trips
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Everything you need to plan, organize, and enjoy your dream vacation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
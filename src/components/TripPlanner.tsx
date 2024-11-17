import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, Wallet } from 'lucide-react';

export default function TripPlanner() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Planifica tu Viaje
          </h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
                  Destino
                </label>
                <input
                  type="text"
                  placeholder="¿A dónde quieres ir?"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  <Users className="w-5 h-5 mr-2 text-indigo-600" />
                  Travelers
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>1 Persona</option>
                  <option>2 Personas</option>
                  <option>3 Personas</option>
                  <option>4+ Personas</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                  Start Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center text-gray-700 font-medium">
                  <Clock className="w-5 h-5 mr-2 text-indigo-600" />
                  Duración
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>3-5 días</option>
                  <option>1 semana</option>
                  <option>2 semanas</option>
                  <option>Más de 2 semanas</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                <Wallet className="w-5 h-5 mr-2 text-indigo-600" />
                Presupuesto
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option>Económico (hasta €50/día)</option>
                <option>Moderado (€50-150/día)</option>
                <option>Premium (€150-300/día)</option>
                <option>Lujo (€300+/día)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Intereses (opcional)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Cultura', 'Gastronomía', 'Aventura', 'Relax', 'Compras', 'Naturaleza'].map((interest) => (
                  <label key={interest} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Crear Itinerario</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
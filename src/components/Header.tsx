import React from 'react';
import { Plane, Menu, X } from 'lucide-react';
import AuthModal from './auth/AuthModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAuthOpen, setIsAuthOpen] = React.useState(false);
  const [authView, setAuthView] = React.useState<'login' | 'signup'>('login');

  const openAuth = (view: 'login' | 'signup') => {
    setAuthView(view);
    setIsAuthOpen(true);
    setIsMenuOpen(false); // Close mobile menu when opening auth modal
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Plane className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">VoyageAI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors">Pricing</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => openAuth('login')}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Sign in
              </button>
              <button 
                onClick={() => openAuth('signup')}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Features</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Pricing</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
            <button 
              onClick={() => openAuth('login')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Sign in
            </button>
            <button 
              onClick={() => openAuth('signup')}
              className="block w-full text-left px-3 py-2 text-indigo-600 font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialView={authView}
      />
    </header>
  );
}
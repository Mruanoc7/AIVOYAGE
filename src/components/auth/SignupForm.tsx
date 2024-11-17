import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock } from 'lucide-react';

interface SignupFormProps {
  onLoginClick: () => void;
}

export default function SignupForm({ onLoginClick }: SignupFormProps) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement signup logic
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Create account</h2>
      <p className="text-gray-600 mb-8">Sign up to start planning your next adventure</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="flex items-center text-gray-700 font-medium">
            <User className="w-5 h-5 mr-2 text-indigo-600" />
            Full Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-gray-700 font-medium">
            <Mail className="w-5 h-5 mr-2 text-indigo-600" />
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="your@email.com"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center text-gray-700 font-medium">
            <Lock className="w-5 h-5 mr-2 text-indigo-600" />
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="••••••••"
          />
        </div>

        <div className="space-y-4">
          <label className="flex items-start">
            <input type="checkbox" required className="rounded text-indigo-600 focus:ring-indigo-500 mt-1 mr-2" />
            <span className="text-sm text-gray-600">
              I agree to the{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-700">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-700">Privacy Policy</a>
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Creating account...' : 'Create account'}
        </button>

        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onLoginClick}
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Sign in
          </button>
        </p>
      </form>
    </motion.div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock } from 'lucide-react';

interface LoginFormProps {
  onSignupClick: () => void;
}

export default function LoginForm({ onSignupClick }: LoginFormProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement login logic
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
      <p className="text-gray-600 mb-8">Sign in to your account to continue</p>

      <form onSubmit={handleSubmit} className="space-y-6">
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

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500 mr-2" />
            <span className="text-sm text-gray-600">Remember me</span>
          </label>
          <button type="button" className="text-sm text-indigo-600 hover:text-indigo-700">
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </button>

        <p className="text-center text-gray-600">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={onSignupClick}
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Sign up
          </button>
        </p>
      </form>
    </motion.div>
  );
}
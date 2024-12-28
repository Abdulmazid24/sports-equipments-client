import React, { useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    setError(''); // Reset the error message
    if (email && password) {
      // Perform login logic here
      console.log('Logged in with:', { email, password });
      // Navigate to home or dashboard
      navigate('/');
    } else {
      setError('Please fill out both email and password fields.');
    }
  };

  const handleGoogleLogin = () => {
    // Perform Google login logic
    console.log('Google login clicked');
  };

  const handleGithubLogin = () => {
    // Perform GitHub login logic
    console.log('GitHub login clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-950 via-lime-950 to-indigo-950 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-green-100 rounded-md border-2">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Welcome Back!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-100 text-red-600 p-2 rounded">{error}</div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-950 via-black to-indigo-950 py-2 px-4 rounded-lg hover:shadow-lg transition duration-300 text-white font-bold"
          >
            Log In
          </button>
        </form>
        <div className="flex items-center justify-between mt-4">
          <span className="border-b border-gray-300 w-1/3"></span>
          <span className="text-sm text-gray-500 px-2">or login with</span>
          <span className="border-b border-gray-300 w-1/3"></span>
        </div>
        <div className="flex space-x-4 mt-4">
          <button
            onClick={handleGoogleLogin}
            className="flex-1 bg-gradient-to-r from-indigo-950 via-black to-indigo-950 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-600 transition duration-300 font-bold"
          >
            <FaGoogle />
            <span>Google</span>
          </button>
        </div>
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

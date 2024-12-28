import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoURL: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const validatePassword = password => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    const { name, email, photoURL, password } = formData;

    if (!name || !email || !photoURL || !password) {
      setError('All fields are required!');
      return;
    }

    if (!validatePassword(password)) {
      setError(
        'Password must have at least 6 characters, including uppercase and lowercase letters.'
      );
      return;
    }

    setSuccessMessage('Registration successful! Redirecting...');
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-950 via-black to-indigo-950 py-10 font-bold">
      <div className="w-full max-w-md p-8 rounded-md border transform transition hover:scale-105 duration-300 bg-gradient-to-r from-indigo-950 via-black to-indigo-950 text-white">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-lime-700 to-gray-950 mb-6 py-3">
          Register Now
        </h2>
        {error && (
          <div className="text-red-500 bg-red-100 rounded-lg p-2 text-center mb-4">
            {error}
          </div>
        )}
        {successMessage && (
          <div className="text-green-500 bg-green-100 rounded-lg p-2 text-center mb-4">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6 ">
          {/* Name Field */}
          <div className="relative">
            <label htmlFor="name" className=" px-2 py-3 text-lg">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <label htmlFor="email" className=" px-2 py-3 text-lg">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Photo URL Field */}
          <div className="relative">
            <label htmlFor="photoURL" className=" px-2 py-3 text-lg">
              Photo URL
            </label>
            <input
              type="url"
              id="photoURL"
              name="photoURL"
              placeholder="Enter a valid photo URL"
              value={formData.photoURL}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label htmlFor="password" className=" px-2 pb-3 text-lg">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-950 via-black to-indigo-950 text-white rounded-lg hover:shadow-lg transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-purple-500 hover:text-purple-600 transition duration-200"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;

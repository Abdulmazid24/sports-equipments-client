import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-950 to-orange-800 text-gray-950 text-center">
      <h1 className="text-8xl font-bold mb-4">404</h1>
      <p className="text-2xl font-semibold mb-6">Oops! Page Not Found</p>
      <p className="text-lg mb-8">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-white text-blue-700 font-semibold rounded shadow hover:bg-gray-200"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;

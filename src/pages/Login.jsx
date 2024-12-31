import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import auth from '../firebase/firebase.config';
import { toast, ToastContainer } from 'react-toastify';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then(result => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login Successful',
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(result.user);
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.message}`,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        toast.success('Login successful!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      })
      .catch(error => {
        setErrorMessage(error.message);
        toast.error(errorMessage, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-950 via-lime-950 to-indigo-950 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-green-100 rounded-md border-2">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Welcome Back!
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
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
              name="email"
              placeholder="Enter your email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-2xl"
            >
              {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </button>

            <div className="mb-4 ">
              <Link href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </div>
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
            onClick={handleGoogleSignIn}
            className="flex-1 bg-gradient-to-r from-indigo-950 via-black to-indigo-950 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-600 transition duration-300 font-bold"
          >
            <FaGoogle />
            <span>Continue With Google</span>
          </button>
          <ToastContainer />
        </div>
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account? Please Sign Up{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

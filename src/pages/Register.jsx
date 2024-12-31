import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState('');

  const handleRegister = e => {
    e.preventDefault();
    setError('');

    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const value = { form, name, photo, email, password };
    console.log(value);
    const validatePassword = password => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      return passwordRegex.test(password);
    };
    if (!validatePassword(password)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.',
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      return;
    }
    createUser(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You Are successfully registered',
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(result.user);
        const createdAt = result.user.metadata?.creationTime;
        const newUser = { name, photo, email, createdAt };
        // save new user in the database
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(newUser),
        })
          .then(res => res.json())
          .then(data => {
            console.log('user created to db', data);
          });
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-950 via-black to-indigo-950 py-10 font-bold">
      <div className="w-full max-w-md p-8 rounded-md border transform transition hover:scale-105 duration-300 bg-gradient-to-r from-indigo-950 via-black to-indigo-950 text-white">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-lime-800 to-purple-950 mb-6 py-3">
          Register Now
        </h2>
        {error && (
          <div className="text-red-500 bg-red-100 rounded-lg p-2 text-center mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-6 ">
          {/* Name Field */}
          <div className="relative">
            <label htmlFor="name" className=" px-2 py-3 text-lg">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none text-black"
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
              required
              placeholder="Enter a valid photo URL"
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none text-black"
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
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none text-black"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label htmlFor="password" className=" px-2 pb-3 text-lg">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              required
              placeholder="Create a strong password"
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none text-black"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-11 text-black text-2xl"
            >
              {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-950 via-black to-indigo-950 text-white rounded-lg hover:shadow-lg transition duration-300 border border-inherit"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-white mt-6">
          Already have an account ?{' '}
          <Link
            to="/login"
            className="text-yellow-400 hover:text-yellow-500 hover:text-lg hover:underline transition duration-200"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

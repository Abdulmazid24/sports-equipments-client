import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-950 via-black to-indigo-950 text-white py-10 font-semibold">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">EquiSports</h2>
          <p className="text-sm">
            Your one-stop shop for premium sports gear. We bring you top-quality
            equipment for every sport, crafted for champions like you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="/all-sports-equipment" className="hover:text-yellow-400">
                All Sports Equipment
              </a>
            </li>
            <li>
              <a href="/add-equipment" className="hover:text-yellow-400">
                Add Equipment
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-yellow-400" />
              support@equisports.com
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-yellow-400" />
              +123-456-7890
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-yellow-400" />
              123 Sports Ave, Active City, USA
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-yellow-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-yellow-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-yellow-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-yellow-400"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-600 text-center pt-4 text-sm">
        <p>© {new Date().getFullYear()} EquiSports. All Rights Reserved.</p>
        <p className="text-xs mt-1">
          Designed with passion for champions like you.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

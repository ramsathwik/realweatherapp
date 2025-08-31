import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:text-green-500 transition-colors"
        >
          🌦️ WeatherApp
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/Weather"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            Get Weather
          </Link>
          <Link
            to="/About"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link
            to="/Contact"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Login Button (desktop only) */}
        <div className="hidden sm:block">
          <Link
            to="/login"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold shadow-lg hover:scale-105 active:scale-95 transition-transform"
          >
            Login
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="sm:hidden text-3xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-lg shadow-md px-6 py-4 space-y-4">
          <Link
            to="/"
            className="block text-gray-700 font-medium hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/Weather"
            className="block text-gray-700 font-medium hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Get Weather
          </Link>
          <Link
            to="/About"
            className="block text-gray-700 font-medium hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/Contact"
            className="block text-gray-700 font-medium hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold shadow-lg hover:scale-105 active:scale-95 transition-transform"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

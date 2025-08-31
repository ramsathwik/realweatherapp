function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold text-blue-600 hover:text-green-500 transition-colors"
        >
          🌦️ WeatherApp
        </a>

        {/* Links */}
        <div className="flex space-x-6">
          <a
            href="/"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            Home
          </a>
          <a
            href="/weather"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            Get Weather
          </a>
          <a
            href="/about"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Login Button */}
        <a
          href="/login"
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold shadow-lg hover:scale-105 active:scale-95 transition-transform"
        >
          Login
        </a>
      </div>
    </nav>
  );
}

export default NavBar;

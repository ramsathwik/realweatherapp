// src/pages/Home.jsx
import { Link } from "react-router-dom";
import RotatingGlobe from "../components/RotatingGlobe"; // Will work once textures are ready

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Discover amazing features and explore what we have built just for you.
        </p>
        <Link
          to="/weather"
          className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold shadow hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Feature One</h3>
          <p className="text-gray-600">
            A short description of this awesome feature goes here.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
          <p className="text-gray-600">
            Another great highlight about your website or app.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
          <p className="text-gray-600">
            Explain why users should love this feature.
          </p>
        </div>
      </section>

      {/* Globe Placeholder */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Explore Our Planet 🌍</h2>
        <div className="h-[400px] w-full bg-gray-300 rounded-2xl flex items-center justify-center text-gray-700">
          3D Green Globe Coming Soon
          {/* Replace this div with <RotatingGlobe /> once textures are ready */}
        </div>
      </section>

      {/* Quick Intro + Link to About */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to know more?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Learn more about our mission, vision, and story on the About page.
        </p>
        <Link
          to="/about"
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition"
        >
          Learn More
        </Link>
      </section>
    </div>
  );
}

export default Home;

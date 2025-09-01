import GetMap from "../components/Map";

function Getweather() {
  return (
    <div className="pt-24 px-6">
      {/* Main container with space around */}
      <div className="max-w-7xl mx-auto bg-white/20 backdrop-blur-lg rounded-3xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
        {/* Map */}
        <div className="flex-1 min-h-[400px] rounded-2xl overflow-hidden shadow-md">
          <GetMap />
        </div>

        {/* Input / Info Container */}
        <div className="flex-1 bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Welcome to GetWeather Page
          </h1>
          <p className="text-gray-600 mb-6">
            Enter your location and date to check the weather forecast,
            precautions, and analytics.
          </p>

          {/* Placeholder for future inputs */}
          <div className="border border-blue-300/40 rounded-xl p-6 bg-white/70 shadow-md">
            <p className="text-gray-500 italic text-center">
              Weather input form will appear here...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getweather;

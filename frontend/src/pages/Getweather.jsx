function Getweather() {
  return (
    <div className="pt-20 px-6 flex justify-center">
      <div className="bg-white/60 backdrop-blur-lg shadow-lg rounded-2xl p-8 max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Welcome to GetWeather Page
        </h1>
        <p className="text-gray-600 mb-6">
          Enter your location and date to check the weather forecast,
          precautions, and analytics.
        </p>

        {/* Placeholder for future inputs */}
        <div className="border border-blue-300/40 rounded-xl p-6 bg-white/70 shadow-md">
          <p className="text-gray-500 italic">
            Weather input form will appear here...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Getweather;

function SearchPanel() {
  function formhandler(e) {
    e.preventDefault();
  }

  return (
    <div className="w-full h-full p-6 flex flex-col justify-center bg-white rounded-2xl shadow-inner">
      <h1 className="text-2xl font-bold text-blue-600 mb-2">GetWeather</h1>
      <p className="text-gray-600 mb-4">
        Enter your location and date to check the weather forecast, precautions,
        and analytics.
      </p>

      <form onSubmit={formhandler} className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-800">Weather Search</h2>

        <input
          type="date"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Enter Location"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all duration-300"
        >
          Get Weather
        </button>
      </form>
    </div>
  );
}

export default SearchPanel;

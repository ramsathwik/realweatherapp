import GetMap from "../components/Map";
import SearchPanel from "../components/SearchPanel";

function Getweather() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-50 to-cyan-100 pt-40 px-20 pb-20">
      <div className="w-full max-w-7xl h-[600px] bg-white/90 rounded-3xl shadow-2xl p-6 flex gap-6">
        {/* Map */}
        <div className="flex-1">
          <GetMap />
        </div>

        {/* Search */}
        <div className="flex-1">
          <SearchPanel />
        </div>
      </div>
    </div>
  );
}

export default Getweather;

import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer className="text-center py-4 text-sm text-gray-500">
        © 2025 WeatherApp. All rights reserved.
      </footer>
    </>
  );
}

export default App;

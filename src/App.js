import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent.js";
import Projects from "./pages/Projects.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
function App() {
  return (
    <div className="Main scroll-smooth">
      <div className="relative">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<MainContent />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        {/* <Route path="/About" element={<About />}></Route>
        <Route path="/Services" element={<Services />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;

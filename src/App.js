
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent.js";
import Projects from "./pages/Projects.js";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} > </Route>
        <Route path="/Projects" element={<Projects />} > </Route>
      </Routes>
    
    </>
  );
}

export default App;

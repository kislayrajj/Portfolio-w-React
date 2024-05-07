import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent.js";
// import Projects from "./pages/Projects.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading.js";
import LoadingAnimation from "./components/Loaders/Loader2.json";
import Lottie from "lottie-react";

// import LoadingAnimation2 from "./components/Loaders/Loader1.json";

const Projects = lazy(() => import("./pages/Projects.js"));
function App() {
  // increase loading time
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-screen center">
          <Lottie animationData={LoadingAnimation} className="h-44 md:h-80" />
        </div>
      ) : (
        <div className="Main scroll-smooth">
          <div className="relative">
            <Navbar />
          </div>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<MainContent />}></Route>
              <Route path="/Projects" element={<Projects />}></Route>

              {/* <Route path="/About" element={<About />}></Route>
        <Route path="/Services" element={<Services />}></Route> */}
            </Routes>
          </Suspense>
          {/* <Loading /> */}
          {/* <div className="h-screen center">
       
       <Lottie animationData={LoadingAnimation2} className="h-44 md:h-80" />
     </div> */}
        </div>
      )}
    </>
  );
}

export default App;

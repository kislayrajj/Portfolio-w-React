import "./App.css";
import { Routes, Route,useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent.js";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading.js";
import LoadingAnimation from "./components/Loaders/Loader2.json";
import Lottie from "lottie-react";
import { useSelector } from "react-redux";
import NavigationButton from "./components/NavigationButton.js";
// import LoadingAnimation2 from "./components/Loaders/Loader1.json";

const Projects = lazy(() => import("./pages/Projects.js"));
function App() {
  // increase loading time
  const [isLoading, setIsLoading] = useState(true);
  const themeColor = useSelector((state) => state.theme.themeColor);
  const {pathname} = useLocation()
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])


  return (
    <>
      <div
        className={` kr ${
          themeColor === "dark"
            ? "godLevelClassFromAppJS "
            : "godLevelClassFromAppJS-light"
        }`}>
        {isLoading ? (
          <div className="h-screen center">
            <Lottie animationData={LoadingAnimation} className="h-44 md:h-80" />
          </div>
        ) : (
          <div className="Main scroll-smooth">
            <div className="relative">
              <Navbar />
            </div>
            <div className="absolute bottom-12 lg:bottom-14 right-12 lg:right-14 z-20">
              <NavigationButton />
            </div>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<MainContent />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
              </Routes>
            </Suspense>
          </div>
        )}
      </div>
      <div className="small_screen_msg">
        The screen size is too small to display this website properly. Please
        use a larger device.
      </div>
    </>
  );
}

export default App;

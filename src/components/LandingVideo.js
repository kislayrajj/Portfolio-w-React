import React, { useEffect } from "react";
import bgVideo1 from "../assets/heroBgVideos/bgPortfolio1.mp4";
import bgVideo2 from "../assets/heroBgVideos/bgPortfolio2.mp4";
import videoLoader from "../components/Loaders/videoLoader.json";
import Lottie from "lottie-react";
import Slogan from "./Slogan";
import { useState } from "react";
import "../App.css";
import { useSelector } from "react-redux";
const LandingVideo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [sloganKey, setSloganKey] = useState(0);
  const themeColor = useSelector((state) => state.theme.themeColor);
  const currentHeroBgVideo = useSelector((state)=> state.heroBgVideo.currentHeroBgVideo)
  const heroBgVideoSources = [bgVideo2, bgVideo1]; 

  useEffect(() => {
    setSloganKey((prevKey) => prevKey + 1);
    // console.log("🐶 ~ LandingVideo ~ sloganKey:", sloganKey)
  }, [themeColor]);
useEffect(()=>{
  setIsVideoLoading(true);

},[currentHeroBgVideo])
  
  return (
    <div
      className={` ${
        themeColor === "dark" ? "landingVideo" : "landingVideo-light"
      } flex  justify-around items-center  w-full h-screen`}>
      {themeColor === "dark" && (
        <>
          {isVideoLoading && (
            <div className="absolute bottom-10 text-white  ">
              <Lottie animationData={videoLoader} className="h-44 md:h-80" />
            </div>
          )}

          <video
          key={currentHeroBgVideo}
            autoPlay
            muted
            loop
            onLoadedData={() => setIsVideoLoading(false)}
            className="absolute inset-0 object-cover w-full h-full ">
            <source src={heroBgVideoSources[currentHeroBgVideo]} type="video/mp4" />
          </video>
        </>
      )}
      <div className="mt-32 md:mt-0 z-10">
        <h1
          className="text-7xl m-2 md:text-8xl font-bold"
          style={
            themeColor === "dark"
              ? {
                  WebkitTextStroke: "2px white",
                  color: "transparent",
                }
              : {
                  WebkitTextStroke: "2px white",
                  color: "transparent",
                }
          }
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          {/* Building Your Brand */}
          <Slogan key={sloganKey} />
        </h1>
      </div>
    </div>
  );
};

export default LandingVideo;

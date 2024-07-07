import React from 'react'
import bgVideo from "../assests/bgPortfolio.mp4";
import videoLoader from "../components/Loaders/videoLoader.json";
import Lottie from "lottie-react"
import Slogan from "./Slogan";
import { useState } from 'react';
import "../App.css"
import { useSelector } from 'react-redux';
const LandingVideo = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVideoLoading, setIsVideoLoading] = useState(true);
const themeColor = useSelector((state)=> state.theme.themeColor)
  return (
    <div
    
    className={` ${themeColor === "dark" ? "landingVideo":"landingVideo-light"} flex  justify-around items-center  w-full h-screen`}>
          { themeColor === "dark" && (
            <>
    {isVideoLoading && (
      <div className="absolute bottom-10 text-white  ">
        <Lottie animationData={videoLoader} className="h-44 md:h-80" />
      </div>
    )}
  
    <video
      autoPlay
      muted
      loop
      onLoadedData={() => setIsVideoLoading(false)}
      className="absolute  inset-0 object-cover ml- w-full h-full ">
      <source src={bgVideo} type="video/mp4" />
    </video>
    </>
   ) }
    <div className="sloga mt-32 md:mt-0 z-10">
      <h1
        className=" text-7xl m-2 md:text-8xl font-bold"
        style={themeColor === "dark" ?{
          WebkitTextStroke: "2px white",
          WebkitTextFillColor: isHovered ? "white" : "transparent",
        } : {
            WebkitTextStroke: "2px white",
            WebkitTextFillColor: isHovered ? "black" : "transparent", 
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        {/* Building Your Brand */}
        <Slogan />
      </h1>
    </div>
  </div>
  )
}

export default LandingVideo

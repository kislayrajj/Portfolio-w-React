import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PortfThumb from "../assests/portfolioWeb.png";
import MAcard from "../assests/MAcard.png";
import RockPaperScissor from "../assests/RockPaperScissor.png";
import ReactCardThumb from "../assests/ReactCard-Thumb.png";
import { motion } from "framer-motion"

const Projects = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const dateString = now.toDateString();
      const timeString = now.toLocaleString();
      setDateTime(`${dateString} <br> ${timeString}`);
    };
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <motion.div
    initial ={{y:-2000}}
    animate ={{y:0}}
    transition={{duration:1}}
      className=" w-full box-border flex flex-wrap  gap-6 items-center  justify-around md:flex-row md:gap-1 md:items-start  pt-32 text-xs
    
   "
    >
      <div
        className="box-card clock border-2 rounded-xl h-72 w-64 p-8 text-xl"
        dangerouslySetInnerHTML={{ __html: dateTime }}
      ></div>
      <Link
        to="https://kislayrajj.github.io/DynamicCard-html-css/"
        target="_blank"
      >
        
        <div className="box-card border-2 rounded-xl  h-72 w-64 opacity-90 hover:opacity-100 transition-opacity duration-300 hover:border-b-green-500 overflow-hidden  relative">
          <img src={MAcard} alt="" className="h-44 flex pl-16  rounded-xl " />
          <div className="flex items-center justify-center absolute top-0  border-1 rounded-t-xl border-transparent h-44 w-64 backdrop-blur-[1px] opacity-0 hover:opacity-100 transition-opacity duration-300">
          <i class="fa-brands fa-github   mt-24 pr-3 text-3xl text-green-500 "></i>
          </div>
          
          <div className=" p-2 pt-4 text-gray-300 ">•Dynamic Businnes Card</div>
          <div className="pl-2 pt-0 text-gray-300">
            •This is card design dedicated to Marcus Aurelius <br />
          </div>
          <div className="pl-2 text-gray-300">•Language used - HTML & CSS</div>
        </div>
      </Link>
      <Link to="https://kislayrajj.github.io/DevMen-Portfolio/" target="_blank">
        <div
          className="box-card border-2 rounded-xl h-80 w-72 
        
        opacity-90 hover:opacity-100 transition-opacity duration-300
        hover:border-b-green-500  overflow-hidden   relative
        "
        >
          <img src={PortfThumb} alt="" className=" object-fill rounded-t-xl " />
          <div className="flex items-center justify-center absolute top-0  border-1 rounded-t-xl  h-40 w-72 backdrop-blur-[1px] opacity-0 hover:opacity-100 transition-opacity duration-300">
          <i class="fa-brands fa-github   mt-24 pr-4 text-4xl text-green-500 "></i>
          </div>
          <div className=" p-2 pt-4  text-gray-300">
            •Personalized Portfolio
          </div>
          <div className="p-2 pt-0 text-gray-300">
            •This was the first proper website I built. Take a look by visiting
            the website. <br />
            Click to visit.
          </div>
          <div className="p-2 text-gray-300 ">
            •Language used - HTML, CSS & JS
          </div>
        </div>
      </Link>
      <Link
        to="https://kislayrajj.github.io/Rock-Paper-Scissor/"
        target="_blank"
      >
        <div
          className="box-card border-2 rounded-xl h-72 w-64
         opacity-90 hover:opacity-100 transition-opacity duration-300 hover:border-b-green-500  overflow-hidden   relative
        "
        >
          <img src={RockPaperScissor} alt="" className="rounded-t-xl" />
          <div className="flex items-center justify-center absolute top-0  border-1 rounded-t-xl border-transparent h-40 w-64 backdrop-blur-[1px] opacity-0 hover:opacity-100 transition-opacity duration-300">
          <i class="fa-brands fa-github   mt-24 pr-3 text-3xl text-green-500 "></i>
          </div>
          <div className=" p-2 pt-4  text-gray-300">
            •Rock-Paper-Scissor Game
          </div>
          <div className="p-2 pt-0 text-gray-300">
            •I built this simple version of the game while learnig JavaScript.{" "}
            <br />
            Click to give it a try.
          </div>
          <div className="pl-2 text-gray-300">
            •Language used - HTML, CSS & JS
          </div>
        </div>
      </Link>
      <Link to="/ReactCard">
        <div
          className="box-card border-2 rounded-xl h-72 w-64
        
        opacity-90 hover:opacity-100 transition-opacity duration-300
        hover:border-b-green-500  overflow-hidden   relative"
        >
          <img src={ReactCardThumb} alt="" className="rounded-t-xl" />
          <div className="flex  items-center justify-center absolute top-0  border-1 rounded-t-xl  h-44 w-64 backdrop-blur-[1px] opacity-0 hover:opacity-100 transition-opacity duration-300">
          <i class="fa-brands fa-github   mt-24 pr-3 text-3xl text-green-500 "></i>
          </div>
          <div className=" p-2 pt-4 pb-0 text-gray-300">•Business Card</div>
          <div className="p-2 pt-0 pb-0 text-gray-300">
            •Custom business card design using React for a personalized touch.{" "}
            <br />
            Click to view.
          </div>
          <div className="pl-2  text-gray-300 tracking-tight">
            •Language used - React & Tailwind CSS
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Projects;

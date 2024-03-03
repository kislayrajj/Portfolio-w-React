import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PortfThumb from "../assests/portfolioWeb.png";
import MAcard from '../assests/MAcard.png'
import RockPaperScissor from "../assests/RockPaperScissor.png"
import ReactCardThumb from '../assests/ReactCard-Thumb.png'


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
    <div className="flex justify-around m-2 pt-16 text-xs ">
      <div
        className="box-card clock border-2 rounded-xl h-72 w-64 p-8 text-lg"
        dangerouslySetInnerHTML={{ __html: dateTime }}
      ></div>
      <Link to="https://kislayrajj.github.io/DynamicCard-html-css/" target="_blank">
        <div className="box-card border-2 rounded-xl h-72 w-64 text-red-700">
         <img src={MAcard} alt="" className="h-44 flex pl-16  rounded-lg"/>
         <div className=" p-2 pt-4 text-gray-300 ">•Dynamic Businnes Card</div>
          <div className="pl-2 pt-0 text-gray-300">
          •This is card design dedicated to Marcus Aurelius <br />
          </div>
          <div className="pl-2 text-gray-300">•Language used - HTML & CSS</div>
        </div>
      </Link>
      <Link  to="https://kislayrajj.github.io/DevMen-Portfolio/" target="_blank"><div className="box-card border-2 rounded-xl h-80 w-72 ">
      <img src={PortfThumb} alt="" className=" object-fill rounded-t-lg " />
          <div className=" p-2 pt-4  text-gray-300">•Personalized Portfolio</div>
          <div className="p-2 pt-0 text-gray-300">
          •This was the first proper website i built. Take a look by visiting
            the website. <br />
            Click to visit.
          </div>
          <div className="p-2 text-gray-300 ">•Language used - HTML, CSS & JS</div></div></Link>
      <Link to="https://kislayrajj.github.io/Rock-Paper-Scissor/" target="_blank"><div className="box-card border-2 rounded-xl h-72 w-64">
        <img src={RockPaperScissor} alt="" className="rounded-t-lg" />
        <div className=" p-2 pt-4  text-gray-300">•Rock-Paper-Scissor Game</div>
          <div className="p-2 pt-0 text-gray-300">
          •I built this simple version of the game while learnig JavaScript. <br />
            Click to give it a try.
          </div>
          <div className="pl-2 text-gray-300">•Language used - HTML, CSS & JS</div>
        </div></Link>
      <Link to="/ReactCard"><div className="box-card border-2 rounded-xl h-72 w-64">
        <img src={ReactCardThumb} alt="" className="" />
        <div className=" p-2 pt-4  text-gray-300">•Business Card</div>
          <div className="p-2 pt-0 text-gray-300">
          •I built this simple version of the game while learnig React. <br />
            Click to view.
          </div>
          <div className="pl-2 text-gray-300">•Language used - React & Tailwind CSS</div>
        </div></Link>
    </div>
  );
};

export default Projects;

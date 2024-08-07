import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projectData from "../assets/data/project_data";
import { useSelector } from "react-redux";
const Projects = () => {
  const [dateTime, setDateTime] = useState("");
  const themeColor = useSelector((state) => state.theme.themeColor);
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
  }, [dateTime]);

  return (
    <div className={`min-h-screen ${themeColor === "dark" ? "" : "projects"}`}>
      <motion.div
        initial={{opacity:0, y: 2000 }}
        animate={{opacity:1, y: 0 }}
        transition={{ duration: 1 }}
        className={` w-full  box-border flex flex-wrap  gap-6 items-center  justify-around md:flex-row md:gap-1   pt-32 text-xs`}>
        <div
          className={`${themeColor === "dark" ? "bg-black/80":"bg-gradient-to-r from-violet-200 to-pink-200"}
           box-card theme-font border-2 rounded-xl h-72 w-64 p-8 text-xl`}
          dangerouslySetInnerHTML={{ __html: dateTime }}></div>

        {projectData.map((item, index) => {
          return (
            <Link to={item.link} target="_blank">
              <div
                key={index}
                className={`box-card border-2 rounded-xl  hover:-translate-y-2 ease-in-out transition-all duration-500 opacity-90 hover:opacity-100 hover:border-b-green-500 overflow-hidden relative ${themeColor==="dark" ? "shadow-[inset_0px_0px_33px_18px_#2c5282] " : " bg-gradient-to-r from-violet-200 to-pink-200"}`}
                style={{
                  width: item.width,
                  height: item.height,
                  marginTop: item["margin-top"],
                }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 flex  rounded-xl"
                />

                <div className=" center flex-col gap-8 absolute top-0 left-0 border-1 rounded-t-xl border-transparent h-44 w-64 backdrop-blur-[1px] opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="hover:scale-105 ease-in-out duration-500 hover:opacity-80 text-2xl font-semibold opacity-30 text-green-400">
                    Click To See Demo
                  </div>
                  <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github  text-3xl text-green-500 hover:text-black hover:scale-125 transition-all duration-300"></i>
                  </a>
                </div>

                <div className={`p-2 pt-4 ${themeColor === "dark" ? "text-gray-300" : "text-black"} `}>•{item.title}</div>
                <div className={`pl-2 pt-0 ${themeColor === "dark" ? "text-gray-300" : "text-black"} `}>
                  •{item.description}
                </div>
                <div className={`pl-2 ${themeColor === "dark" ? "text-gray-300" : "text-black"} `}>
                  •Language used - {item.languages.join(", ")}
                </div>
              </div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Projects;

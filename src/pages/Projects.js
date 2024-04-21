import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projectData from "../assests/data/Projects_Data";

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
      initial={{ y: -2000 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}>
      <div className=" w-full box-border flex flex-wrap  gap-6 items-center  justify-around md:flex-row md:gap-1   pt-32 text-xs">
        <div
          className="box-card theme-font border-2 rounded-xl h-72 w-64 p-8 text-xl"
          dangerouslySetInnerHTML={{ __html: dateTime }}></div>

        {projectData.map((item, index) => {
          return (
            <Link to={item.link} target="_blank">
              <div
                className=" box-card border-2 rounded-xl  hover:-translate-y-2 ease-in-out transition-all duration-500 opacity-90 hover:opacity-100 hover:border-b-green-500 overflow-hidden relative"
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

                <div className="flex items-center justify-center absolute top-0 border-1 rounded-t-xl border-transparent h-44 w-64 backdrop-blur-[1px] opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute hover:scale-105 ease-in-out duration-500 hover:opacity-80 text-2xl font-semibold opacity-30 text-green-400">
                    Click To See Demo
                  </span>
                  <a href={item.githubLink} target="_blank">
                    <i className="fa-brands fa-github mt-24 pr-3 text-3xl text-green-500 hover:text-black hover:scale-125 transition-all duration-300"></i>
                  </a>
                </div>

                <div className="p-2 pt-4 text-gray-300">•{item.title}</div>
                <div className="pl-2 pt-0 text-gray-300">
                  •{item.description}
                </div>
                <div className="pl-2 text-gray-300">
                  •Language used - {item.languages.join(", ")}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;

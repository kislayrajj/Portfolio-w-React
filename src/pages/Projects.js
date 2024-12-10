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
      setDateTime(`${dateString} ${timeString}`);
    };
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, [dateTime]);

  return (
    <div
      className={`min-h-screen ${
        themeColor === "dark" ? "" : "projects"
      } overflow-hidden px-5 xl:px-10 py-12`}>
      <div className=" pt-20 center">
        {" "}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`${
            themeColor === "dark"
              ? "bg-black/80"
              : "bg-gradient-to-r from-violet-200 to-pink-200"
          }
           box-card theme-font border-2 rounded-xl  w-fit px-5 py-2 center text-xl`}
          dangerouslySetInnerHTML={{ __html: dateTime }}></motion.div>
      </div>
      {/* beginner level */}
      <div
        className={`theme-font px-6 
        ${
          themeColor === "dark" ? "text-green-400 " : "text-blue-400"
        }  font-semibold text-xl xl:text-2xl`}>
        <h1 className={`fancy w-fit px-2 py-1`}>Beginner</h1>
      </div>
      <div
        className={`mt-6 xl:8 w-full  flex flex-wrap  gap-6 items-center  justify-between md:flex-row md:gap-8  text-xs`}>
        {projectData?.beginnerLevel.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}>
              <Link to={item.link} target="_blank">
                <div
                  className={`box-card border-2 rounded-xl  hover:-translate-y-2 ease-in-out transition-all duration-500 opacity-90 hover:opacity-100 hover:border-b-green-500 overflow-hidden relative ${
                    themeColor === "dark"
                      ? "shadow-[inset_0px_0px_33px_18px_#2c5282] "
                      : " bg-gradient-to-r from-violet-200 to-pink-200"
                  }`}
                  style={{
                    width: item.width,
                    height: item.height,
                    marginTop: item["margin-top"],
                  }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-44 flex  rounded-xl object-cover"
                  />

                  <div className="center flex-col gap-8 absolute top-0 left-0 border-1 rounded-t-xl border-transparent h-44 w-64 backdrop-blur-[1px] opacity-0 hover:opacity-100 transition-opacity duration-300 group">
                    <div className="hover:scale-105 ease-in-out duration-500 hover:opacity-80 text-2xl font-semibold opacity-30 text-green-400">
                      Click To See Demo
                    </div>
                    <a
                      href={item.githubRepoLink}
                      target="_blank"
                      rel="noopener noreferrer">
                      <i
                        title="Go to github repo"
                        className="fa-brands fa-github  text-3xl text-green-500  hover:scale-125 transition-all duration-300"></i>
                    </a>
                  </div>
                  <div className="pt-3">
                    <ul className="list-disc list-outside pl-7">
                      <li
                        className={`neon_text  ${
                          themeColor === "dark"
                            ? "neon_text_light"
                            : "text-black font-semibold"
                        } `}>
                        {item.title}
                      </li>
                      <li
                        className={`  ${
                          themeColor === "dark" ? "text-gray-300" : "text-black"
                        } `}>
                        {item.description}
                      </li>
                      <li
                        className={` ${
                          themeColor === "dark" ? "text-gray-300" : "text-black"
                        } `}>
                        Built with - {item.languages.join(", ")}
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Mid level */}
      <div className="mt-12">
        <div
          className={`theme-font px-6 
        ${
          themeColor === "dark" ? "text-green-400 " : "text-blue-400"
        }  font-semibold text-xl xl:text-2xl`}>
          <h1 className="fancy w-fit px-2 py-1">Mid</h1>
        </div>
        <div
          className={`mt-2 w-full  flex flex-wrap  gap-6 items-center  justify- md:flex-row md:gap-20  text-xs`}>
          {/* give justify-between above if enough project is there to cover the width */}
          {projectData?.mediumLevel?.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}>
                <Link to={item.link} target="_blank">
                  <div
                    className={`box-card border-2 rounded-xl  hover:-translate-y-2 ease-in-out transition-all duration-500 opacity-90 hover:opacity-100 hover:border-b-green-500 overflow-hidden relative ${
                      themeColor === "dark"
                        ? "shadow-[inset_0px_0px_33px_18px_#2c5282] "
                        : " bg-gradient-to-r from-violet-200 to-pink-200"
                    }`}
                    style={{
                      width: item.width,
                      height: item.height,
                      marginTop: item["margin-top"],
                    }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-44 flex  rounded-xl object-cover"
                    />

                    <div className="center flex-col gap-8 absolute top-0 left-0 border-1 rounded-t-xl border-transparent h-44 w-64 backdrop-blur-[1px] opacity-0 hover:opacity-100 transition-opacity duration-300 group">
                      <div className="hover:scale-105 ease-in-out duration-500 hover:opacity-80 text-2xl font-semibold opacity-30 text-green-400">
                        Click To See Demo
                      </div>
                      <a
                        href={item.githubRepoLink}
                        target="_blank"
                        rel="noopener noreferrer">
                        <i
                          title="Go to github repo"
                          className="fa-brands fa-github  text-3xl text-green-500  hover:scale-125 transition-all duration-300"></i>
                      </a>
                    </div>
                    <div className="pt-3">
                      <ul className="list-disc list-outside pl-7">
                        <li
                          className={`neon_text  ${
                            themeColor === "dark"
                              ? "neon_text_light"
                              : "text-black font-semibold"
                          } `}>
                          {item.title}
                        </li>
                        <li
                          className={`  ${
                            themeColor === "dark"
                              ? "text-gray-300"
                              : "text-black"
                          } `}>
                          {item.description}
                        </li>
                        <li
                          className={` ${
                            themeColor === "dark"
                              ? "text-gray-300"
                              : "text-black"
                          } `}>
                          Built with - {item.languages.join(", ")}
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expert level */}
      <div className="mt-12">
        <div
          className={`theme-font px-6 
        ${
          themeColor === "dark" ? "text-green-400 " : "text-blue-400"
        }  font-semibold text-xl xl:text-2xl`}>
          <h1 className="fancy w-fit px-2 py-1">Expert</h1>
        </div>
        <div
          className={`mt-2 w-full  flex flex-wrap  gap-6 items-center  justify-between md:flex-row md:gap-8  text-xs`}>
          {projectData?.expertLevel?.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}>
                <Link to={item.link} target="_blank">
                  <div
                    className={`box-card border-2 rounded-xl  hover:-translate-y-2 ease-in-out transition-all duration-500 opacity-90 hover:opacity-100 hover:border-b-green-500 overflow-hidden relative ${
                      themeColor === "dark"
                        ? "shadow-[inset_0px_0px_33px_18px_#2c5282] "
                        : " bg-gradient-to-r from-violet-200 to-pink-200"
                    }`}
                    style={{
                      width: item.width,
                      height: item.height,
                      marginTop: item["margin-top"],
                    }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-44 flex  rounded-xl object-cover"
                    />

                    <div className="center flex-col gap-8 absolute top-0 left-0 border-1 rounded-t-xl border-transparent h-44 w-64 backdrop-blur-[1px] opacity-0 hover:opacity-100 transition-opacity duration-300 group">
                      <div className="hover:scale-105 ease-in-out duration-500 hover:opacity-80 text-2xl font-semibold opacity-30 text-green-400">
                        Click To See Demo
                      </div>
                      <a
                        href={item.githubRepoLink}
                        target="_blank"
                        rel="noopener noreferrer">
                        <i
                          title="Go to github repo"
                          className="fa-brands fa-github  text-3xl text-green-500  hover:scale-125 transition-all duration-300"></i>
                      </a>
                    </div>
                    <div className="pt-3">
                      <ul className="list-disc list-outside pl-7">
                        <li
                          className={`neon_text  ${
                            themeColor === "dark"
                              ? "neon_text_light"
                              : "text-black font-semibold"
                          } `}>
                          {item.title}
                        </li>
                        <li
                          className={`  ${
                            themeColor === "dark"
                              ? "text-gray-300"
                              : "text-black"
                          } `}>
                          {item.description}
                        </li>
                        <li
                          className={` ${
                            themeColor === "dark"
                              ? "text-gray-300"
                              : "text-black"
                          } `}>
                          Built with - {item.languages.join(", ")}
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

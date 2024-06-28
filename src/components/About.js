import React from "react";
import IndianFlag from "../assests/Indianflag.png";
import dp from "../assests/profilepic2.jpg";
import SvgIcon from "../components/drinkCoffeSVG";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
const aboutInfo = {
  name: "Kislay Raj",
  title: "Web Developer",
  location: "India",
  email: "Your Email",
  phone: "Your Phone Number",
  website: "Your Website",
  summary:
    "As a frontend web developer aspiring to become full-stack, I prioritize delivering top-quality, user-centric solutions and emphasize effective communication to ensure client satisfaction.",
  experience: [
    {
      title: "Front-End Developer",
      company: "Vedic Technologies",
      location: "India",
      date: "2023 - ",
      description:
        "Front-End Developer",
    },
    // Add more experience entries as needed
  ],
  education: [
    {
      degree: "Graduate in Computer Applications",
      institution: "TMBU University",
      location: "India",
      date: "2024",
      description:
        "Additional details about your education, such as honors or achievements.",
    },
    // Add more education entries as needed
  ],
  // Add any other sections or information you want to include
};

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden" ref={aboutRef}>
      <div className="about-top h-1/2 bg-black relative pt-8">
        <div className="w-full text-start text-3xl pl-12 theme-font font-semibold text-green-400">
          About Me
        </div>
        <div className="w-full p-2 pl-12 lg:px-12 flex justify-between">
          <div className="">
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={isVisible ? { opacity: 1, x: 0 } : ""}
              transition={{
                type: "sprig",
                duration: 1,
              }}
              className="title text-xl">
              {aboutInfo.title}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={isVisible ? { opacity: 1, x: 0 } : ""}
              transition={{
                type: "sprig",
                duration: 1,
                delay: 0.3,
              }}
              className="location flex gap-2 items-center">
              {aboutInfo.location}{" "}
              <img src={IndianFlag} alt="" className="h-5" />{" "}
            </motion.div>
          </div>
          <div className=" lg:w-[300px] w-[200px]">
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={isVisible ? { opacity: 1, x: 0 } : ""}
              transition={{
                type: "sprig",
                duration: 1,
              }}
              className="  text-sm md:text-base">
              {aboutInfo.summary}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={isVisible ? { opacity: 1, y: 0 } : ""}
          transition={{
            type: "sprig",
            duration: 1,
            delay: 1,
          }}
          className=" absolute text-4xl lg:text-6xl bottom-[-20px] lg:bottom-[-30px] flex justify-center w-full ">
          <i className="fa-regular  theme-font font-bold uppercase">
            {aboutInfo?.name}
          </i>
        </motion.div>
      </div>
      <div className="about-bottom h-1/2 bg-gradient-to-r from-slate-900 to-slate-900">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-10 items-center p-2 pt-12">
          <div className="dp md:h-60 w-72 center">
            {/* <img src={dp} alt="" className="h-44 w-44 rounded-full" /> */}
            <SvgIcon />
          </div>

          <div className="follow text-2xl lg:text-4xl flex gap-10">
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={isVisible ? { opacity: 1, y: 0 } : ""}
              transition={{
                type: "sprig",
                duration: 1,
                delay: 2,
              }}>
                <a href="https://github.com/kislayrajj" target="_blank"><motion.i
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -360,
                }}
                transition={{ duration: 0.3 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`fa-brands fa-github hover:text-green-400 ${
                  isHover ? " " : "fa-beat-fade"
                }`}></motion.i></a>
              
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 200 }}
              animate={isVisible ? { opacity: 1, y: 0 } : ""}
              transition={{
                type: "sprig",
                duration: 1,
                delay: 2.1,
              }}>
                <a href="https://www.linkedin.com/in/kislay-raj-b462502a6/" target="_blank" ><motion.i
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -360,
                }}
                transition={{ duration: 0.3 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`fa-brands fa-linkedin hover:text-green-400 ${
                  isHover ? " " : "fa-beat-fade"
                }`}></motion.i></a>
              
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 300 }}
              animate={isVisible ? { opacity: 1, y: 0 } : ""}
              transition={{
                type: "sprig",
                duration: 1,
                delay: 2.2,
              }}>
                <a href="https://www.instagram.com/kislayrajj" target="_blank"> <motion.i
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -360,
                }}
                transition={{ duration: 0.3 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`fa-brands fa-square-instagram  hover:text-green-400 ${
                  isHover ? " " : "fa-beat-fade"
                }`}></motion.i></a>
             
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 400 }}
              animate={isVisible ? { opacity: 1, y: 0 } : ""}
              transition={{
                type: "sprig",
                duration: 1,
                delay: 2.3,
              }}>
                <a href="https://www.twitter.com/Kislayrajj" target="_blank"><motion.i
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -360,
                }}
                transition={{ duration: 0.3 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`fa-brands fa-square-x-twitter  hover:text-green-400 ${
                  isHover ? " " : "fa-beat-fade"
                }`}></motion.i></a>
              
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 500 }}
              animate={isVisible ? { opacity: 1, y: 0 } : ""}
              transition={{
                type: "sprig",
                duration: 1,
                delay: 2.4,
              }}>
                <a href="mailto:kislayraj751@gmail.com" target="_blank"></a>
              <motion.i
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -360,
                }}
                transition={{ duration: 0.3 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`fa-solid fa-envelope hover:text-green-400 ${
                  isHover ? " " : "fa-beat-fade"
                }`}></motion.i>
            </motion.span>
          </div>

          <div className="experience text-center ">
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={isVisible ? { opacity: 1, x: 0 } : ""}
              transition={{
                type: "sprig",
                duration: 1,
                delay: 1,
              }}
              className="md:text-xl text-green-400 font-bold">
              {aboutInfo.experience[0].title}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={isVisible ? { opacity: 1, x: 0 } : ""}
              transition={{
                type: "sprig",
                duration: 1,
                delay: 1.3,
              }}
              className="text-green-300">
              {aboutInfo.experience[0].company}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={isVisible ? { opacity: 1, x: 0 } : ""}
              transition={{
                type: "sprig",
                duration: 1,
                delay: 1.4,
              }}
              className="text-green-300">
              {aboutInfo.experience[0].date}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={isVisible ? { opacity: 1, x: 0 } : ""}
              transition={{
                type: "sprig",
                duration: 1,
                delay: 1.5,
              }}
              className="w-[300px] text-green-300">
              {aboutInfo.experience[0].description}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

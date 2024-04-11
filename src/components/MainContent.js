import React from "react";
import { useState, useEffect, useRef } from "react";
import bgVideo from "../assests/bgPortfolio.mp4";
import Skills from "./Skills";
import htmlLogo from "../assests/htmlpng.png";
import cssLogo from "../assests/csspng.png";
import jsLogo from "../assests/jspng.png";
import reactLogo from "../assests/reactpng.png";
import tailwindLogo from "../assests/tailwindpng.png";
import About from "./About";
import websiteDev_img from "../assests/websitedev.png"
import thumbVideobg from "../assests/website-development.mp4"
import thumbVideobg2 from '../assests/thumbnail-of-web-application-development.mp4'
import thumbVideobg3 from '../assests/ux-designer.mp4'
import thumbVideobg4 from '../assests/texhnical-experties.mp4'
import thumbVideobg5 from '../assests/digital-marketing.mp4'
import thumbVideobg6 from '../assests/thumbnail-of-maintenance.mp4'
import {motion} from "framer-motion"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const MainContent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false); 

const aboutContentMotion = {
  initial: { opacity: 0, y: 300 },
  animate: { 
    opacity: isVisible ? 1 : 0, // Control animation based on visibility
    y: isVisible ? 0 : 300,
    transition: {  
      duration: 1.5,
      delay: .5,
      type: 'spring', // You can use different types of transitions like spring
      damping: 10, // Adjust the damping for a smoother animation
    } 
  } 
};

  


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries; 
      setIsVisible(entry.isIntersecting); 
    }, { threshold:.1 }); 

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
    <div>
      <div>
        <div id="home" className="main-component flex  justify-around items-center  w-full h-screen">
          <video
            autoPlay
            muted
            loop
            className="absolute  inset-0 object-cover ml- w-full h-full z-[-1]"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="sloga mt-32 md:mt-0">
            <h1
              className=" text-7xl m-2 md:text-8xl font-bold  "
              style={{
                WebkitTextStroke: "2px white",
                WebkitTextFillColor: isHovered ? "white" : "transparent",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Building Your Brand
            </h1>
          </div>
        </div>
      </div>
      <div  id="about" className="scroll-m-12" ref={aboutRef}>
        <div  className=" about h-auto w-full text-gray-700 p-5 ">
          <h1 className=" bg-gradient-to-r from-red-500 via-blue-500 to-black text-transparent bg-clip-text font-extrabold text-3xl ">What we do :</h1>
          <p className=" md:w-3/4 3/4 m-2 font-light  text-xs md:text-sm text-white">
            At DevStudio, we specialize in delivering top-notch web development
            solutions tailored to meet your unique needs. With our expert team
            of developers, designers, and strategists, we offer a comprehensive
            range of services to help you succeed online. Here's what we can do
            for you:
          </p>
          <motion.div
          variants={aboutContentMotion}
         initial="initial"
          animate="animate"        
          className="  Boxes m-10 flex flex-wrap justify-between gap-5 scroll-smooth ">
          <About 
          thumbVideo={thumbVideobg}
          snumber="01"
          service="Website Developments"
          img={websiteDev_img}
          ListOne="Custom Website Design"
          ListTwo="Responsive Development"
          ListThree="E-commerce Solutions"
        
          />
          <About 
          snumber="02"
          thumbVideo={thumbVideobg2}
              service="Web Application Development"
              ListOne="Bespoke Web Applications: "
              ListTwo="API Integration"
              ListThree="Content Management Systems (CMS)"
           />
          <About 
          snumber="03"
          thumbVideo={thumbVideobg3}
              service="UI/UX Design"
              ListOne="User-Centric Design"
              ListTwo="Wireframing and Prototyping"
              ListThree="Usability Testing"
         />
          <About
          snumber="04"
          thumbVideo={thumbVideobg4}
              service="Technology Expertise"
              ListOne="Frontend Development"
              ListTwo="Backend Development:"
              ListThree="Database Management & Cloud Services"
 />
          <About 
          snumber="05"
          thumbVideo={thumbVideobg5}
              service="Digital Strategy & Marketing"
              ListOne="Consultation and Planning"
              ListTwo="Digital Marketing"
              ListThree="Search Engine Optimization (SEO)"
         />
          <About 

          snumber="06"
          thumbVideo={thumbVideobg6}
              service="Support and Maintenance"
              ListOne="Ongoing Support:"
              ListTwo="Performance Monitoring"
        
           />
        </motion.div>
        </div>
     
      </div>

      <div className=" skills flex  flex-wrap justify-around pt-12 h-screen ">
     <div className="w-[80%]"> <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'4'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier:1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Skills
          image={htmlLogo}
          bg="bg-gradient-to-r from-purple-600 to-yellow-300"
          title="HTML"
          disc="Proficient in HTML for web development, creating structured and semantic content."
        /></SwiperSlide>
        <SwiperSlide>
        <Skills
          image={cssLogo}
          title="CSS"
          disc="Skilled in styling web, layout elements,, and responsiveness  for visually appealing designs."
          bg="bg-gradient-to-br from-blue-600 to-pink-500"
        />
</SwiperSlide>
<SwiperSlide>
        <Skills
          image={jsLogo}
          title="JavaScript"
          disc="Competent in JavaScript for interactive and dynamic web development."
          bg="bg-gradient-to-br from-pink-600 to-black"
        />
        </SwiperSlide>
        <SwiperSlide>
        <Skills
          image={reactLogo}
          title="React.js"
          disc="Experienced in building UI components for modern web applications."
          bg="bg-gradient-to-tr from-blue-500 via-indigo-400 to-purple-300"
        /></SwiperSlide><SwiperSlide>
        <Skills
          image={tailwindLogo}
          title="Tailwind"
          disc=" Skilled in leveraging Tailwind utility-first CSS framework CSS for highly efficient styling"
          bg="bg-gradient-to-tr from-blue-900 via-blue-600 to-green-400"
        /></SwiperSlide>
   </Swiper>
   </div>
      </div>
    </div>
  );
};

export default MainContent;

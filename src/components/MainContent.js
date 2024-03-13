import React from "react";
import { useState } from "react";
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

const MainContent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div>
        <div className="main-component flex  justify-around items-center  w-full h-screen">
          {/* <video
            autoPlay
            muted
            loop
            className="absolute  inset-0 object-cover ml- w-full h-full z-[-1]"
          >
            <source src={bgVideo} type="video/mp4" />
          </video> */}
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
      <div>
        <div className=" about h-auto w-full text-gray-700 p-5  ">
          <h1 className=" bg-gradient-to-r from-red-500 via-blue-500 to-black text-transparent bg-clip-text font-extrabold text-3xl ">What we do :</h1>
          <p className=" md:w-1/2 3/4 m-2  text-xs md:text-base text-gray-700">
            At DevStudio, we specialize in delivering top-notch web development
            solutions tailored to meet your unique needs. With our expert team
            of developers, designers, and strategists, we offer a comprehensive
            range of services to help you succeed online. Here's what we can do
            for you:
          </p>
          <div className="Boxes m-10 flex flex-wrap justify-between gap-2 ">
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
        </div>
        </div>
     
      </div>
      <div className=" skills flex  flex-wrap justify-around pt-12 h-screen">
        <Skills
          image={htmlLogo}
          bg="bg-gradient-to-r from-purple-600 to-yellow-300"
          title="HTML"
          disc="Proficient in HTML for web development, creating structured and semantic content."
        />
        <Skills
          image={cssLogo}
          title="CSS"
          disc="Skilled in styling web, layout elements,, and responsiveness  for visually appealing designs."
          bg="bg-gradient-to-br from-blue-600 to-pink-500"
        />

        <Skills
          image={jsLogo}
          title="JavaScript"
          disc="Competent in JavaScript for interactive and dynamic web development."
          bg="bg-gradient-to-br from-pink-600 to-black"
        />
        <Skills
          image={reactLogo}
          title="React.js"
          disc="Experienced in building UI components for modern web applications."
          bg="bg-gradient-to-tr from-blue-500 via-indigo-400 to-purple-300"
        />
        <Skills
          image={tailwindLogo}
          title="Tailwind"
          disc=" Skilled in leveraging Tailwind utility-first CSS framework CSS for highly efficient styling"
          bg="bg-gradient-to-tr from-blue-900 via-blue-600 to-green-400"
        />
      </div>
    </div>
  );
};

export default MainContent;

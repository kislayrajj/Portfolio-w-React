import React from "react";
import { useState } from "react";
import bgVideo from "../assests/bgPortfolio.mp4";
import Skills from "./Skills";
import htmlLogo from "../assests/htmlpng.png";
import cssLogo from "../assests/csspng.png";
import jsLogo from "../assests/jspng.png";
import reactLogo from "../assests/reactpng.png";
import tailwindLogo from "../assests/tailwindpng.png";
import About from './About'
const MainContent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div>
        <div className="main-component flex  justify-around items-center  w-full h-screen">
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
<div>
  <About />
</div>
      <div className="flex  flex-wrap justify-around pt-12 h-screen">
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

import React from "react";
import { useState, useEffect, useRef } from "react";
import Skills from "./Skills";
import htmlLogo from "../assets/htmlpng.png";
import cssLogo from "../assets/csspng.png";
import jsLogo from "../assets/jspng.png";
import reactLogo from "../assets/reactpng.png";
import tailwindLogo from "../assets/tailwindpng.png";
import jaqueryLogo from "../assets/jqueryblack.png";
import jiraLogo from "../assets/jiraLogo.png";
import gitLogo from "../assets/Git-Icon-Black.png";
import Service from "./Services";
import websiteDev_img from "../assets/websitedev.png";
import thumbVideobg from "../assets/website-development.mp4";
import thumbVideobg2 from "../assets/thumbnail-of-web-application-development.mp4";
import thumbVideobg3 from "../assets/ux-designer.mp4";
import thumbVideobg4 from "../assets/texhnical-experties.mp4";
// import thumbVideobg5 from "../assets/digital-marketing.mp4";
import thumbVideobg6 from "../assets/thumbnail-of-maintenance.mp4";
import About from "./About";
import Contact from "./Contact";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import LandingVideo from "./LandingVideo";
import { useSelector } from "react-redux";
import Footer from "./Footer";
const MainContent = () => {
  const serviceRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const themeColor = useSelector((state) => state.theme.themeColor);
  const servicesContentMotion = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: isVisible ? 1 : 0, // Control animation based on visibility
      y: isVisible ? 0 : 100,
      transition: {
        duration: 1.5,
        delay: 0.5,
        type: "spring", // You can use different types of transitions like spring
        damping: 10, // Adjust the damping for a smoother animation
      },
    },
  };

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    const currentRef = serviceRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div>
      <div id="main-content">
        <LandingVideo />
      </div>
      <div
        className={`${
          themeColor === "dark" ? "text-white" : "services-light"
        }`}>
        <div id="services" className={`scroll-m-16 `} ref={serviceRef}>
          <div className=" services h-auto w-full  p-5 ">
            <h1
              className={`${
                themeColor === "dark" ? "text-green-400" : " text-blue-600"
              } 
          font-bold text-3xl inline theme-font`}>
              What I do :
            </h1>
            <p className=" md:w-3/4 3/4 m-2 font-light  text-xs md:text-base ">
              I specialize in delivering top-notch web development solutions
              tailored to meet your unique needs. With my expertise as a
              developer, designer, and strategist, I offer a comprehensive range
              of services to help you succeed online. Here's what I can do for
              you
            </p>
            <motion.div
              variants={servicesContentMotion}
              initial="initial"
              animate="animate"
              className=" Boxes m-10 flex flex-wrap justify-center gap-5 scroll-smooth ">
              <div
                className={`larger_screen lg:w-[90%] w-[95%] hidden lg:block px-0.5 pt-5 rounded-lg ${
                  themeColor === "dark"
                    ? "shadow-[0px_0px_30px_3px_#48bb78] "
                    : "shadow-[0px_0px_30px_3px_#2d3748] "
                }`}>
                {" "}
                <Swiper
                  spaceBetween={-200}
                  slidesPerView={2}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  loop={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  onAutoplayTimeLeft={onAutoplayTimeLeft}
                  className="mySwiper   md:h-96 ">
                  <SwiperSlide>
                    {" "}
                    <Service
                      thumbVideo={thumbVideobg}
                      snumber="01"
                      service="Website Developments"
                      img={websiteDev_img}
                      ListOne="Custom Website Design"
                      ListTwo="Responsive Development"
                      ListThree="E-commerce Solutions"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Service
                      snumber="02"
                      thumbVideo={thumbVideobg2}
                      service="Web Application Development"
                      ListOne="Bespoke Web Applications: "
                      ListTwo="API Integration"
                      ListThree="Content Management Systems (CMS)"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Service
                      snumber="03"
                      thumbVideo={thumbVideobg3}
                      service="UI/UX Design"
                      ListOne="User-Centric Design"
                      ListTwo="Wireframing and Prototyping"
                      ListThree="Usability Testing"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Service
                      snumber="04"
                      thumbVideo={thumbVideobg4}
                      service="Technology Expertise"
                      ListOne="Frontend Development"
                      ListTwo="Backend Development:"
                      ListThree="Database Management & Cloud Services"
                    />
                  </SwiperSlide>
                  {/* <SwiperSlide>
                  <Service
                    snumber="05"
                    thumbVideo={thumbVideobg5}
                    service="Digital Strategy & Marketing"
                    ListOne="Consultation and Planning"
                    ListTwo="Digital Marketing"
                    ListThree="Search Engine Optimization (SEO)"
                  />
                </SwiperSlide> */}
                  <SwiperSlide>
                    <Service
                      snumber="06"
                      thumbVideo={thumbVideobg6}
                      service="Support and Maintenance"
                      ListOne="Ongoing Support:"
                      ListTwo="Performance Monitoring"
                    />
                  </SwiperSlide>
                  <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                      <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                  </div>
                </Swiper>
              </div>
              <div className="mobile w-full lg:hidden block px-3 pt-5 shadow-[0px_0px_30px_3px_#48bb78] rounded-lg">
                <Swiper
                  direction={"vertical"}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  onAutoplayTimeLeft={onAutoplayTimeLeft}
                  className="mySwiper h-[300px]">
                  <SwiperSlide>
                    <Service
                      thumbVideo={thumbVideobg}
                      snumber="01"
                      service="Website Developments"
                      img={websiteDev_img}
                      ListOne="Custom Website Design"
                      ListTwo="Responsive Development"
                      ListThree="E-commerce Solutions"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Service
                      snumber="02"
                      thumbVideo={thumbVideobg2}
                      service="Web Application Development"
                      ListOne="Bespoke Web Applications: "
                      ListTwo="API Integration"
                      ListThree="Content Management Systems (CMS)"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Service
                      snumber="03"
                      thumbVideo={thumbVideobg3}
                      service="UI/UX Design"
                      ListOne="User-Centric Design"
                      ListTwo="Wireframing and Prototyping"
                      ListThree="Usability Testing"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Service
                      snumber="04"
                      thumbVideo={thumbVideobg4}
                      service="Technology Expertise"
                      ListOne="Frontend Development"
                      ListTwo="Backend Development:"
                      ListThree="Database Management & Cloud Services"
                    />
                  </SwiperSlide>
                  {/* <SwiperSlide>
                  <Service
                    snumber="05"
                    thumbVideo={thumbVideobg5}
                    service="Digital Strategy & Marketing"
                    ListOne="Consultation and Planning"
                    ListTwo="Digital Marketing"
                    ListThree="Search Engine Optimization (SEO)"
                  />
                </SwiperSlide> */}
                  <SwiperSlide>
                    <Service
                      snumber="06"
                      thumbVideo={thumbVideobg6}
                      service="Support and Maintenance"
                      ListOne="Ongoing Support"
                      ListTwo="Performance Monitoring"
                      ListThree="On Demand Features"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </motion.div>
          </div>
        </div>

        <div
          className={`  ${
            themeColor === "dark" ? "skills" : "skills-light"
          } flex flex-col flex-wrap gap-12 items-center pt-12 h-auto pb-10`}>
          <div
            className={`w-full text-start text-3xl pl-12 theme-font font-semibold ${
              themeColor === "dark" ? "text-green-400" : "text-blue-600"
            } `}>
            Experties
            <p
              className={`theme-font-normal md:w-3/4 3/4 m-2 font-light  text-xs md:text-base ${
                themeColor === "dark" ? "text-white" : "text-black"
              }`}>
              I am a versatile and experienced programmer with a strong
              foundation in multiple programming languages. My diverse skill set
              allows me to tackle a wide range of projects.
            </p>
          </div>
          <div
            className={`lg:w-[80%] w-[95%] md:p-5 rounded ${
              themeColor === "dark" ? "" : "shadow-[0px_0px_30px_3px_#2d3748] "
            }`}>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"4"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              loop={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper h-[230px] md:h-full">
              <SwiperSlide>
                <Skills
                  image={htmlLogo}
                  bg="bg-gradient-to-r from-purple-600 to-yellow-300"
                  title="HTML"
                  disc="Proficient in HTML for web development, creating structured and semantic content."
                />
              </SwiperSlide>
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
                />
              </SwiperSlide>
              <SwiperSlide>
                <Skills
                  image={tailwindLogo}
                  title="Tailwind"
                  disc=" Skilled in leveraging Tailwind utility-first CSS framework CSS for highly efficient styling"
                  bg="bg-gradient-to-tr from-blue-900 via-blue-600 to-green-400"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Skills
                  image={jaqueryLogo}
                  title="jQuery"
                  disc="Proficient in utilizing jQuery to enhance interactivity within web applications"
                  bg="bg-gradient-to-br from-purple-900 via-purple-600 to-yellow-400"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Skills
                  image={jiraLogo}
                  title="Jira Software"
                  disc="Skilled in Jira Software for efficient project management and collaboration."
                  bg="bg-gradient-to-tr from-red-900 via-red-600 to-yellow-400"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Skills
                  image={gitLogo}
                  title="Git/Version Control"
                  disc="Experienced in Git for collaborative code management and version control."
                  bg="bg-gradient-to-br from-gray-800 via-gray-600 to-gray-400"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div id="about" className="scroll-m-16">
        <About />
      </div>
      <div id="contact" className="scroll-m-16">
        <Contact />
      </div>
      <div id="footer" className="scroll-m-16">
        <Footer />
      </div>

    </div>
  );
};

export default MainContent;

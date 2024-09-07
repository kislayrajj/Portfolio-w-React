import React from "react";
import { Link } from "react-router-dom";
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
import  skillsData  from "../assets/data/skill_data";
const Skills = () => {
  return (
    <div className="swiper-container">
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
      navigation={true}
      
      autoplay={{ delay: 2500, disableOnInteraction: false }} // Enable autoplay
      modules={[Autoplay,EffectCoverflow, Pagination,Navigation]}

      className="mySwiper h-[230px] md:h-full"
    >
      {skillsData?.map((skill, index) => (
        <SwiperSlide key={index}>
          <div className="h-52 lg:h-96 text-black bg-white/100 w-32 lg:w-64 rounded-lg relative border-b-4 hover:border-b-green-600 hover:scale-105 transition-transform duration-700 shadow-2xl overflow-hidden m-2">
            <div
              className={`${skill.bg} h-1/2 flex justify-center rounded-t-lg rounded-br-[20px] lg:rounded-br-[100px] shadow-2xl hover:scale-110 transition-transform duration-700 p-1 lg:p-0`}
            >
              <img
                src={skill.image}
                alt={skill.title}
                className="lg:h-32 mt-4 backdrop-blur-[1px]"
              />
            </div>
            <div className="title text-center text-sm lg:text-xl font-bold p-2 pb-1">
              {skill.title}
            </div>
            <div className="disc p-1 pt-0 text-[8px] lg:text-base">
              {skill.disc}
            </div>
            <div className="text-center text-white/90">
              <Link to="/projects">
                <button
                  className={`${skill.bg} text-[8px] lg:text-base rounded-lg p-1 lg:p-2 absolute bottom-1 left-10 lg:bottom-5 lg:left-20 opacity-80`}
                >
                  Projects
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default Skills;

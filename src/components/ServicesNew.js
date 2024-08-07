// import React from "react";
// import { useState, useEffect, useRef } from "react";

// import { useSelector } from "react-redux";
// import serviceData from "../assets/data/sevice_data";
// import { motion } from "framer-motion";

// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// // import required modules
// import {
//   Autoplay,
//   Pagination,
//   Navigation,
// } from "swiper/modules";

// const Services = () => {
//   const themeColor = useSelector((state) => state.theme.themeColor);
//   const [isVisible, setIsVisible] = useState(false);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const serviceRef = useRef(null);
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty("--progress", 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const [entry] = entries;
//         if (entry.isIntersecting && !hasAnimated) {
//           setIsVisible(true);
//           setHasAnimated(true);
//         }
//       },
//       { threshold: 0.1 }
//     );
//     const currentRef = serviceRef.current;
//     if (currentRef) {
//       observer.observe(currentRef);
//     }

//     return () => {
//       if (currentRef) {
//         observer.unobserve(currentRef);
//       }
//     };
//   }, []);

//   const servicesContentMotion = {
//     initial: { opacity: 0, y: 100 },
//     animate: {
//       opacity: isVisible ? 1 : 0, // Control animation based on visibility
//       y: isVisible ? 0 : 100,
//       transition: {
//         duration: 1.5,
//         delay: 0.5,
//         type: "spring", // You can use different types of transitions like spring
//         damping: 10, // Adjust the damping for a smoother animation
//       },
//     },
//   };

//   return (
//     <div ref={serviceRef}>
//         <motion.div
//               variants={servicesContentMotion}
//               initial="initial"
//               animate={isVisible ? 'animate' : 'initial'}
//               className=" Boxes m-10 flex flex-wrap justify-center gap-5 scroll-smooth ">
//               <div
//                 className={`larger_screen lg:w-[90%] w-[95%] hidden lg:block px-0.5 pt-5 rounded-lg ${
//                   themeColor === "dark"
//                     ? "shadow-[0px_0px_30px_3px_#48bb78] "
//                     : "shadow-[0px_0px_30px_3px_#2d3748] "
//                 }`}>
//       <Swiper
//         spaceBetween={-200}
//         slidesPerView={2}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         loop={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper md:h-96"
//       >
//         {serviceData?.map((service, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className={`border-2 flex justify-between flex-grow p-2 w-[250px] 2xl:min-w-[450px] h-auto md:min-h-72 relative rounded-md overflow-hidden vss_service ${
//                 themeColor === "dark"
//                   ? "text-white/90 bg-black/30"
//                   : "text-black/90 bg-pink-300/40"
//               }`}
//             >
//               <div>
//                 <div className="font-semibold lg:font-bold text-base md:text-xl tracking-wider pl-2 vss_serviceHeading">
//                   {service?.serviceTitle}
//                 </div>

//                 <ul
//                   className={`list-disc pt-2 md:pt-5 pl-2 md:pl-10 text-xs md:text-base lg:font-semibold tracking-wider ${
//                     themeColor === "dark" ? "text-gray-100/85" : "text-black/80"
//                   }`}
//                 >
//                   {service.list.map((item, index) => (
//                     <li key={index}>{item}</li>
//                   ))}
//                 </ul>
//                 <div
//                   className={`absolute bottom-[-40px] z-[] text-9xl vss_service_snumber ${
//                     themeColor === "dark"
//                       ? "text-green-500/40"
//                       : "text-pink-500/40"
//                   }`}
//                 >
//                   {service?.sNumber}
//                 </div>
//               </div>
//               <div className="lg:absolute 2xl:static lg:opacity-50 2xl:opacity-100 lg:w-full lg:flex 2xl:block lg:justify-center lg:items-center lg:-z-10 xl:z-0 object-fill h-44 w-44 overflow-hidden 2xl:min-w-44 mt-10">
//                 {/* <img src={img} alt="" className='h-52 rounded-md'/> */}

//                 <video
//                   autoPlay
//                   muted
//                   loop
//                   className="p-2 rounded-3xl w-24 2xl:w-full vss_service_video"
//                 >
//                   <source src={service?.thumbVideo} type="video/mp4" />
//                 </video>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Services
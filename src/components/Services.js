import React from "react";
import { useSelector } from "react-redux";
const Services = ({
  thumbVideo,
  service,
  ListOne,
  ListTwo,
  ListThree,
  snumber,
}) => {

  const themeColor = useSelector((state)=> state.theme.themeColor)
  return (
    <div className={`border-2 flex justify-between flex-grow p-2  w-[250px] xl:min-w-[350px] 2xl:min-w-[450px] 4xl:min-w-[650px]  h-auto md:min-h-72  relative    rounded-md overflow-hidden vss_service  ${themeColor === "dark" ? "text-white/90 bg-black/30" : " text-black/90 bg-pink-300/40"}`}>
      <div>
        <div className="font-semibold lg:font-bold text-base md:text-xl tracking-wider pl-2 vss_serviceHeading">
          {service}
        </div>

        <ul className={`list-disc  pt-2 md:pt-5 pl-2 md:pl-10  text-xs md:text-base lg:font-semibold tracking-wider ${themeColor === "dark" ? " text-gray-100/85" : " text-black/80"}`}>
          <li>{ListOne}</li>
          <li>{ListTwo} </li>
          <li>{ListThree}</li>
        </ul>
        <div className={`absolute bottom-[-40px] z-[] text-9xl vss_service_snumber  ${themeColor==="dark" ? "text-green-500/40":"text-pink-500/40"}`}>
          {snumber}
        </div>
      </div>
      <div className="lg:absolute 2xl:static lg:opacity-50 2xl:opacity-100 lg:w-full lg:flex 2xl:block lg:justify-center lg:items-center  lg:-z-10 xl:z-0 object-fill h-44 w-44 overflow-hidden  2xl:min-w-44 mt-10 ">
        {/* <img src={img} alt="" className='h-52 rounded-md'/> */}

        <video autoPlay muted loop className=" p-2 rounded-3xl w-24 2xl:w-full   vss_service_video">
          <source src={thumbVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Services;

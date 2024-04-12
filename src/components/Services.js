import React from "react";

const About = ({
  thumbVideo,
  service,
  ListOne,
  ListTwo,
  ListThree,
  snumber,
}) => {
  return (
    <div className="webdev  border-2 flex justify-between flex-grow p-2  w-[250px]  lg:min-w-[450px]   h-auto md:min-h-72 relative  text-white/90  rounded-md overflow-hidden bg-black/30 ">
      <div>
        <div className=" font-semibold lg:font-bold text-base md:text-xl tracking-wider pl-2">
          {service}
        </div>

        <ul className="list-disc  pt-2 md:pt-5 pl-2 md:pl-10 text-gray-100/85 text-xs md:text-base lg:font-semibold tracking-wider">
          <li>{ListOne}</li>
          <li>{ListTwo} </li>
          <li>{ListThree}</li>
        </ul>
        <div className="absolute bottom-[-40px] z-[] text-9xl text-green-500/40">
          {snumber}
        </div>
      </div>
      <div className=" object-fill h-44 w-44 overflow-hidden  lg:min-w-44 mt-10  ">
        {/* <img src={img} alt="" className='h-52 rounded-md'/> */}

        <video autoPlay muted loop className=" p-2 rounded-3xl w-24 lg:w-full ">
          <source src={thumbVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default About;

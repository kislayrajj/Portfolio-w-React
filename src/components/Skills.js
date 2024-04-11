import React from 'react'
import { Link } from 'react-router-dom'


const Skills = ({image,title,disc,bg}) => {
    let logoBg=bg
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
  return (
    <div className='h-52 lg:h-96 text-black bg-white/100 w-32 lg:w-64  rounded-lg relative border-b-4 hover:border-b-green-600 hover:scale-105 transition-transform duration-700 shadow-2xl overflow-hidden m-2'> 
      <div className={`${logoBg} h-1/2 flex justify-center rounded-t-lg rounded-br-[20px] lg:rounded-br-[100px] shadow-2xl hover:scale-110 transition-transform duration-700 p-1 lg:p-0`} >
        <img src={image} alt="" className='lg:h-32 mt-4 backdrop-blur-[1px] '/> </div>
      <div className="title text-center text-sm lg:text-xl font-bold p-2 pb-1">
        {title}
      </div>
      <div className="disc p-1 pt-0 text-[8px] lg:text-base ">
     {disc}
      </div>
      <div className='text-center text-white/90'>
      <Link to="/Projects">
     <button className={`${bg}   text-[8px] lg:text-base   rounded-lg p-1 lg:p-2 absolute bottom-1 left-10 lg:bottom-5 lg:left-20`}>Projects</button> </Link>
      </div>
     
    </div>

  )
}

export default Skills

import React from 'react'
import { Link } from 'react-router-dom'


const Skills = ({image,title,disc,bg}) => {
    let logoBg=bg
  return (
    
    <div className='h-96 text-black bg-white/100  w-64  rounded-lg relative border-b-4 hover:border-b-green-600 hover:scale-105 transition-transform duration-700 shadow-2xl overflow-hidden'> 
      <div className={`${logoBg} h-1/2 flex justify-center rounded-t-lg rounded-br-[100px] shadow-2xl hover:scale-110 transition-transform duration-700`} >
        <img src={image} alt="" className='h-32 mt-4 backdrop-blur-[1px] '/> </div>
      <div className="title text-center text-xl font-bold p-2 pb-1">
        {title}
      </div>
      <div className="disc p-1 pt-0 ">
     {disc}
      </div>
      <div className='text-center text-white/90'>
      <Link to="/Projects">
     <button className={`${bg} rounded-lg p-2 absolute bottom-5 left-20`}>Projects</button> </Link>
      </div>
     
    </div>
  )
}

export default Skills

import React from 'react'

const About = ({ thumbVideo, service, ListOne, ListTwo, ListThree, snumber}) => {
  return (
      <div
       className='webdev  border-2 flex justify-between flex-grow p-2  sm:w-1/3 md:max-w-[500px]  h-auto md:min-h-72 relative  text-white/90  rounded-md overflow-hidden'>
<div>
<div className='  font-bold text-md md:text-xl tracking-wider pl-2'>{service}
          </div>
         
          <ul className='list-disc  pt-2 md:pt-5 pl-2 md:pl-10 text-gray-100/85 text-xs md:text-base font-semibold tracking-wider'> 
            <li >{ListOne}</li>
            <li>{ListTwo} </li>
            <li>{ListThree}</li>
          </ul>
          <div className='absolute bottom-[-40px] z-[] text-9xl text-green-500/40 '>{snumber}</div>
      </div>
      <div className=' object-fillh-44 w-44 overflow-hidden  md:min-w-44 mt-10'>
           {/* <img src={img} alt="" className='h-52 rounded-md'/> */}
           
           <video
            autoPlay
            muted
            loop
            className=" p-2 rounded-3xl  absolute md:static top-0 right-0 opacity-10 md:opacity-90 "
          >
            <source src={thumbVideo} type="video/mp4" />
          </video>
          </div>
</div>
   
    
    
  )
}

export default About

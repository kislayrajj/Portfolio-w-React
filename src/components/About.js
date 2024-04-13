import React from 'react'
import IndianFlag from "../assests/Indianflag.png"
const aboutInfo = {
    name: "Kislay Raj",
    title: "Web Developer",
    location: "India",
    email: "Your Email",
    phone: "Your Phone Number",
    website: "Your Website",
    summary: "As a frontend web developer aspiring to become full-stack, I prioritize delivering top-quality, user-centric solutions and emphasize effective communication to ensure client satisfaction.",
    experience: [
      {
        title: "Job Title",
        company: "Vedic Technologies",
        location: "India",
        date: "Start Date - End Date",
        description: "Description of your responsibilities and achievements in this role."
      },
      // Add more experience entries as needed
    ],
    education: [
      {
        degree: "Graduate in Computer Applications",
        institution: "TMBU University",
        location: "India",
        date: "2024",
        description: "Additional details about your education, such as honors or achievements."
      },
      // Add more education entries as needed
    ],
    // Add any other sections or information you want to include
  };
  


const About = () => {
  return (
    <div className='h-screen'>
      <div className='about-top h-1/2 bg-gradient-to-r from-zinc-900 to-zinc-300 relative pt-8'>
        <div className="w-full text-start text-3xl pl-12 theme-font font-semibold text-green-400">About Me</div>
       <div className='w-full p-2 pl-12 lg:px-12 flex justify-between'>
<div className=''>
<div className="title">{aboutInfo.title}</div>
        <div className="location flex gap-2 items-center">{aboutInfo.location} <img src={IndianFlag} alt="" className='h-5'/> </div>
</div>
<div className=' lg:w-[300px] w-[200px]'>
  <div className='lg:text-gray-700  text-sm md:text-base' >
    {aboutInfo.summary}
  </div>
</div>
       </div>
       
  
        <span className=' absolute text-4xl lg:text-6xl bottom-[-20px] lg:bottom-[-30px] left-[25%] lg:left-[40%] '><i className="fa-regular fa-fade theme-font font-bold uppercase"> {aboutInfo.name}</i></span>
      
      
      </div>
      <div className='about-bottom h-1/2 bg-gradient-to-r from-blue-800 to-indigo-900'>

        <div className='w-full p-2 pl-12 pt-12'> 
          <div className="experience ">
<div>{aboutInfo.experience[0].title}</div>
<div>{aboutInfo.experience[0].company}</div>
<div>{aboutInfo.experience[0].date}</div>
<div className='w-[300px]'>{aboutInfo.experience[0].description}</div>
          </div>
          <div className="dp">
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About

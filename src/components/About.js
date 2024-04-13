import React from 'react'

const aboutInfo = {
    name: "Kislay Raj",
    title: "Web Developer",
    location: "India",
    email: "Your Email",
    phone: "Your Phone Number",
    website: "Your Website",
    summary: "A brief summary about yourself, highlighting your strengths and goals.",
    experience: [
      {
        title: "Job Title",
        company: "Company Name",
        location: "Job Location",
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
      <div className='about-top h-1/2 bg-gradient-to-r from-zinc-900 to-zinc-300 relative'>
        <span className=' absolute text-4xl lg:text-6xl bottom-[-20px] lg:bottom-[-30px] left-[25%] lg:left-[40%] '><i className="fa-regular fa-fade theme-font font-bold ">KISLAY RAJ</i></span>
      
      
      </div>
      <div className='about-bottom h-1/2 bg-gradient-to-r from-lime-400 to-green-900'></div>
      
    </div>
  )
}

export default About

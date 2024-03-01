import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';



const Projects = () => {

    const[dateTime, setDateTime]= useState("");

    useEffect(()=>{
        const updateDateTime =()=>{
            const now =new Date();
            const dateString = now.toDateString()
            const timeString = now.toLocaleString();
            setDateTime(`${dateString} <br> ${timeString}`);
        }
        updateDateTime();
        const intervalId = setInterval(updateDateTime,1000);
        return () => clearInterval(intervalId);
    })


  return (
    <div className='flex justify-around m-5'>
      <div className="box-card clock border-2 rounded-xl h-64 w-64" dangerouslySetInnerHTML={{__html:dateTime}}></div>
      <div className="box-card border-2 rounded-xl h-64 w-64">2</div>
      <div className="box-card border-2 rounded-xl h-72 w-72">3</div>
      <div className="box-card border-2 rounded-xl h-64 w-64">4</div>
      <div className="box-card border-2 rounded-xl h-64 w-64">5</div>
    </div>
  )
}

export default Projects

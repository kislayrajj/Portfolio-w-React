import React from "react";
import dp from "../images/krmoon.jpg"
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className=" info flex-col justify-center text-center bg-slate-900 text-white" >
        <div className=""><img src={dp} alt ="profile" className="dp object-cover h-56 m-2 ml-20 rounded-lg"/></div>
       
      <div className="name font-semibold">
        
      Kislay Raj
      </div>
      <div className="job text-xs text-sky-200 mt-1">Web Developer</div>
      <div className="buttons m-2 ">
       <Link to="mailto:kislayraj751@gmail.com?subject=Subject&body=Hello%20Kislay"><button className=" mr-4 border-2 border-transparent pl-2 pr-2 rounded-sm text-black bg-white text-sm"><i class="fa-solid fa-envelope text-sm pr-2"></i>Email</button></Link> 
    <Link to="https://www.linkedin.com/in/kislay-raj-b462502a6/"><button className="ml-4 border-2 border-transparent pl-2 pr-2 rounded-sm text-white bg-blue-800 text-sm"><i class="fa-brands fa-linkedin text-sm pr-2"></i>LinkedIn</button></Link> 
      </div>
      </header>
    </div>
  );
};

export default Header;

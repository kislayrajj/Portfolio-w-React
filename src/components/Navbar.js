import React from 'react'
import Logo from "../assests/companylogo.png"
import { Link } from 'react-router-dom'


const Navbar = () => {
  const subject = "Let's work together (edit as per requirement)";
const body = "Hello Kislay,";
  return (
    <div>
      
      <nav className='navbar h-auto w-full flex justify-around p-3 bg-gradient-to-r from-dark-start to-dark-end'>
        <img src={Logo} alt='' class="company-logo h-12 object-cover"/>
        <div className='menu-1 m-2 '>
          <ul className='flex gap-10'>
           <Link to="/" ><li className=' cursor-pointer' >Home</li></Link> 
            <li className=' cursor-pointer'>About</li>
             <li className=' cursor-pointer'> <Link to ="/Projects"><button className='border-2 border-green-600 rounded-sm pl-2 pr-2 '> Projects</button></Link> </li>
            <li className=' cursor-pointer'>Contact</li>
            <li className=' cursor-pointer'>Services</li>
          </ul>
        </div>
        <div className="menu-2 m-2">
          <ul className='flex gap-10'>
            <li>FAQs</li>
            <li>Resume</li>
          </ul>
        </div>
       <a href={`mailto:kislayraj751@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}><button className='border-2 border-l-black border-t-black border-r-teal-200 border-b-teal-100 bg-slate-900 p-1 pl-5 pr-5'>Hire</button></a> 
      
      </nav>
    </div>
  )
}

export default Navbar


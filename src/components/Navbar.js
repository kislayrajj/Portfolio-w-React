import React from 'react'
import Logo from "../assests/companylogo.png"
import { Link } from 'react-router-dom'
import { saveAs } from 'file-saver'

const Navbar = () => {
  const subject = "Let's work together (edit as per requirement)";
const body = "Hello Kislay,";

const downloadResume =()=>{
  const url = "../assests.krRESUME.pdf";
fetch(url)
.then(response => response.blob())
.then(blob=> saveAs(blob,"krRESUME.pdf"))
.catch(error=> console.error("Error downloading file:",error))
}

  return (
    <div>
      
      <nav className='navbar h-auto w-full flex justify-around p-3 sticky'>
        <img src={Logo} alt='' class="company-logo h-12 object-cover hover:scale-150 transition-transform duration-400"/>
        <div className='menu-1 m-2 '>
          <ul className='flex gap-10 '>
           <Link to="/" ><li className=' cursor-pointer hover:text-green-500 hover:scale-[1.4]' >Home</li></Link> 
            <li className=' cursor-pointer hover:text-green-500 hover:scale-[1.4]'>About</li>
             <li className=' cursor-pointer hover:text-green-500'> <Link to ="/Projects"><button className='border-2 border-green-600 rounded-sm pl-2 pr-2 '> Projects</button></Link> </li>
            <li className=' cursor-pointer hover:text-green-500 hover:scale-[1.4]'>Contact</li>
            <li className=' cursor-pointer hover:text-green-500 hover:scale-[1.4]'>Services</li>
          </ul>
        </div>
        <div className="menu-2 m-2">
          <ul className='flex gap-10'>
            <li className='cursor-pointer hover:text-green-500 hover:scale-[1.4]'>FAQs</li>
           <li onClick={()=>downloadResume()} className='cursor-pointer hover:text-green-500 '>Resume <i class="fa-solid fa-file-lines text-xs"></i></li>
          </ul>
        </div>
       <a href={`mailto:kislayraj751@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}><button className='border-2 border-l-black border-t-black border-r-teal-200 border-b-teal-100 bg-transparent backdrop-blur-[1px] p-1 pl-5 pr-5 hover:text-green-500 '>Hire</button></a> 
      
      </nav>
      
    </div>
  )
}

export default Navbar


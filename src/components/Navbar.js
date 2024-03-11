import React, { useState } from 'react'
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
let [IsBurger, setIsBurger] = useState(false)

  return (
    <div>
      
      <nav className='navbar h-auto w-full flex justify-around p-3 fixed  z-10'>
        <img src={Logo} alt='' class="company-logo h-12 object-cover hover:scale-150 transition-transform duration-400"/>
       <div onClick={()=>setIsBurger(!IsBurger)} className="burger text-2xl absolute right-8 top-4 cursor-pointer md:hidden" >
       <i class="fa-solid fa-ellipsis-vertical h-10 w-10" name={IsBurger ? "close" : "menu"} ></i>
       </div>
        <div className={`menu-1 m-2 `}>
          <ul className={`md:flex text-xl text-white lg:gap-20 md:gap-10  absolute md:static  w-screen md:z-auto left-0 md:w-auto md:pl-0 pl-20 transition-all duration-500 ease-in-out ${IsBurger? 'left-0 top-24' : 'left-[-800px] top-20' } bg-gray-900/75 md:bg-inherit`}>
           <Link to="/" ><li className=' cursor-pointer hover:text-green-500 md:hover:scale-[1.4] hover:font-bold' >Home</li></Link> 
            <li className=' cursor-pointer hover:text-green-500 md:hover:scale-[1.4] hover:font-bold'>About</li>
             <li className=' cursor-pointer hover:text-green-500 md:hover:font-bold'> <Link to ="/Projects"><button className='border-2 border-green-600 rounded-sm pl-2 pr-2 '> Projects</button></Link> </li>
            <li className=' cursor-pointer hover:text-green-500 md:hover:scale-[1.4] hover:font-bold'>Contact</li>
            <li className=' cursor-pointer hover:text-green-500 md:hover:scale-[1.4] hover:font-bold'>Services</li>
          </ul>
        </div>
        <div className="menu-2 m-2">
          <ul className='flex gap-10'>
            <li className='cursor-pointer hover:text-green-500 hover:scale-[1.4]'>FAQs</li>
           <li onClick={()=>downloadResume()} className='cursor-pointer hover:text-green-500 '>Resume <i class="fa-solid fa-file-lines text-xs"></i></li>
          </ul>
        </div>
       <a href={`mailto:kislayraj751@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}><button className='border-2 border-l-black border-t-black border-r-teal-200 border-b-teal-100 bg-transparent backdrop-blur-[1px] p-1 pl-5 pr-5 hover:text-green-500 mt-10 md:mt-1'>Hire</button></a> 
      
      </nav>
      
    </div>
  )
}

export default Navbar


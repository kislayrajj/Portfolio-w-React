import React, { useState } from "react";
import Logo from "../assests/companylogo.png";
import { HashLink as Link } from 'react-router-hash-link';
import { saveAs } from "file-saver";
import { motion } from "framer-motion";
import NameLogoGsap from "./logos/NameLogoGsap";
const Navbar = () => {
  let [IsBurger, setIsBurger] = useState(false);
  const [isActive, setIsActive]=useState ("");

  const handleMenuClick = () => {
    setIsBurger(false); //close the menu
  };

const handleActive=(section)=>{
  // setIsActive(!isActive);
  setIsActive(section);
  handleMenuClick()
}
  const subject = "Let's work together (edit as per requirement)";
  const body = "Hello Kislay,";

  const downloadResume = () => {
    const url = "../assests.krRESUME.pdf";
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, "krRESUME.pdf"))
      .catch((error) => console.error("Error downloading file:", error));
  };


 
  return (
    <div className="flex justify-center">
      <nav className="navbar h-auto w-11/12 m-2 rounded-3xl flex justify-around p-3 fixed  z-10 ">
        {/* <img
          src={Logo}
          class="company-logo h-12 object-cover hover:scale-150 transition-transform duration-400"
        /> */}
        <motion.div
         initial={{ opacity: 0, y: -200 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 1 }}
        >
          <span className=""><NameLogoGsap /></span>
        </motion.div>
        <div
          onClick={() => setIsBurger(!IsBurger)}
          className="burger text-2xl absolute right-[-20px] top-4 md:right-0  md:top-4 cursor-pointer lg:hidden">
          <i
            className="fa-solid fa-ellipsis-vertical h-10 w-10"
            name={IsBurger ? "close" : "menu"}></i>
        </div>
        <div className={`menu-1 m-2 `}>
          <ul
            className={`md:flex text-xl text-white lg:gap-20 md:gap-10  absolute lg:static  w-screen md:z-auto left-0 md:w-auto md:pl-0 pl-20 transition-all duration-500 ease-in-out ${
              IsBurger ? "left-0 top-24" : "left-[-800px] top-20"
            } bg-gray-900/75 md:bg-inherit`}>
            <Link smooth to="/#main-content">
              <motion.li
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className= {`cursor-pointer hover:text-green-500  hover:font-bold transition-all ease-in-out duration-500 ${isActive =="home" ? "text-2xl text-green-500 border-b-2 border-green-500 ":""}`}
                onClick={()=>handleActive("home")}>
                Home
              </motion.li>
            </Link>
            <Link smooth to="/#services">
            <motion.li
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 1 }}
              className= {`cursor-pointer hover:text-green-500  hover:font-bold transition-all ease-in-out duration-500 ${isActive =="services" ? "text-2xl text-green-500 border-b-2 border-green-500":""}`}
              onClick={()=>handleActive("services")}>
            Services
            </motion.li>
            </Link>
            <Link smooth to="/Projects">
              <motion.li
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1 }}
                className=" cursor-pointer hover:text-green-500 md:hover:font-bold"
                onClick={()=>handleActive("projects")}>
                <button className={`border-2 border-green-600 rounded-sm pl-2 pr-2 transition-all ease-in-out duration-500 ${isActive =="projects" ? "text-2xl text-green-500 border-b-2 border-green-500":""}`}>
                  {" "}
                  Projects
                </button>{" "}
              </motion.li>
            </Link>
            <Link smooth to="/#about">
            <motion.li
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className= {`cursor-pointer hover:text-green-500 hover:font-bold transition-all ease-in-out duration-500 ${isActive =="about" ? "text-2xl text-green-500 border-b-2 border-green-500":""}`}
              onClick={()=>handleActive("about")}>
           About
            </motion.li>
            </Link>
            <Link smooth to="#contact">
            <motion.li
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 1 }}
              className= {`cursor-pointer hover:text-green-500  hover:font-bold transition-all ease-in-out duration-500 ${isActive =="contact" ? "text-2xl text-green-500 border-b-2 border-green-500":""}`}
              onClick={()=>handleActive("contact")}>
                
              Contact
            </motion.li>
            </Link>
       
          </ul>
        </div>
        <div className="menu-2 m-2">
          <ul className="flex gap-5 md:gap-10">
            <motion.li
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className= {`cursor-pointer hover:text-green-500  hover:font-bold transition-all ease-in-out duration-500 ${isActive =="faqs" ? "text-2xl text-green-500 border-b-2 border-green-500":""}`}
              onClick={()=>handleActive("faqs")}>
              FAQs
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -700 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              onClick={() => downloadResume()}
              className="cursor-pointer hover:text-green-500"
              >
              Resume{" "}
              <i className="fa-solid fa-file-lines text-xs hidden md:inline"></i>
            </motion.li>
          </ul>
        </div>
        <a
          href={`mailto:kislayraj751@gmail.com?subject=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(body)}`}>
          <motion.button
            initial={{ opacity: 0, x: -900 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="border-2 border-l-black border-t-black border-r-teal-200 border-b-teal-100 bg-transparent backdrop-blur-[1px] p-1 pl-5 pr-5 hover:text-green-300 absolute md:static top-14 right-6  md:mr-0 md:mt-1 hover:bg-black/50 hover:border-r-black hover:border-b-black hover:border-l-teal-200 hover:border-t-teal-100 transition-all duration-200">
            Hire
          </motion.button>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;

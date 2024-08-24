import React, { useState,useEffect , useRef} from "react";
// import Logo from "../assets/companylogo.png";
import { HashLink as Link } from 'react-router-hash-link';
import { saveAs } from "file-saver";
import { motion } from "framer-motion";
import NameLogoGsap from "./logos/NameLogoGsap";
import { useDispatch, useSelector } from "react-redux";
import { setThemeColor } from "../redux/themeColorSlice";
const Navbar = () => {
  let [isBurger, setIsBurger] = useState(false);
  const [isActive, setIsActive]=useState ("");
  const [isThemeMenuHidden, setIsThemeMenuHidden]= useState(true)
const themeColor = useSelector((state)=> state.theme.themeColor)
  const dispatch = useDispatch();
  const menuRef = useRef(null);

  
  const handleThemeColor=(color)=>{
    dispatch(setThemeColor(color));
  }
  const handleMenuClick = () => {
    setIsBurger(false); //close the menu
  };

  const handleBurgerMenuClick=()=>{
    setIsBurger(!isBurger); //toggle the menu
    setIsThemeMenuHidden(true)
  }

  const handleThemeMenuClick=()=>{
    setIsThemeMenuHidden(!isThemeMenuHidden)
    setIsBurger(false); 
  }

const handleActive=(section)=>{
  // setIsActive(!isActive);
  setIsActive(section);
  handleMenuClick()
}
  const subject = "Let's work together (edit as per requirement)";
  const body = "Hello Kislay,";

  const downloadResume = () => {
    const url = "/kislayRaj_resume_webDeveloper _1yr_exp.pdf";
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        const file = new Blob([blob], { type: 'application/pdf' });
        saveAs(file, "kislayRaj_resume_webDeveloper _1yr_exp.pdf");
      })
      .catch((error) => console.error("Error downloading file:", error));
  };

  const colorOptions = [
    { name: "Dark", value: "dark"  },
    { name: "Light", value: "light" },
    // { name: "Blue", value: "blue", bgColor: "bg-blue-500" },
    // { name: "Green", value: "green", bgColor: "bg-green-500" },
    // { name: "Purple", value: "purple", bgColor: "bg-purple-500" },
    // { name: "Orange", value: "orange", bgColor: "bg-orange-500" },
  ];

  const handleThemeSelection=(color)=>{
    handleThemeColor(color);
    setIsThemeMenuHidden(true)
  }

  

  const handleClickOutside = (e) => {
    if (e.target !== menuRef?.current && !menuRef?.current?.contains(e.target)) {
      setIsBurger(false);
      setIsThemeMenuHidden(true)
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => handleClickOutside(e);

    if (isBurger || !isThemeMenuHidden ) {
      document.addEventListener('click', handleOutsideClick);
    }
     else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => document.removeEventListener('click', handleOutsideClick); // Cleanup
  }, [isBurger,isThemeMenuHidden]);


  return (
    <div ref={menuRef} className="flex justify-center relative">
      <nav className={`navbar  h-auto w-11/12 m-2 rounded-3xl flex justify-around p-3 fixed  z-20 ${themeColor==="dark" ? "":"bg-white/80"}`}>
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
          
          onClick={handleBurgerMenuClick}
          className="burger text-2xl absolute right-[-20px] top-4 md:right-0  md:top-4 cursor-pointer lg:hidden">
            { isBurger ? <i class="fa-solid fa-xmark h-10 w-10"></i> : <i
            className="fa-solid fa-ellipsis-vertical h-10 w-10"
            ></i>}
          
        </div>
        <div className={`menu-1 m-2 `}>
          <ul
            className={`md:flex lg:text-base xl:text-xl ${themeColor === "dark" ? "text-white" : "text-black"}  lg:gap-20 md:gap-10  absolute lg:static  w-screen md:z-auto left-0 md:w-auto md:pl-0 pl-20 transition-all duration-500 ease-in-out ${
              isBurger ? "left-0 top-24" : "left-[-800px] top-20"
            } ${themeColor === "dark" ? "bg-gray-900/75 md:bg-inherit":" bg-white/75 md:bg-inherit"}`}>
            <Link smooth to="/#main-content">
              <motion.li
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className= {`cursor-pointer hover:text-green-500  hover:font-bold transition-all ease-in-out duration-500 ${isActive ==="home" ? "xl:text-2xl lg:text-lg text-green-500 border-b-2 border-green-500 ":""}`}
                onClick={()=>handleActive("home")}>
                Home
              </motion.li>
            </Link>
            <Link smooth to="/#services">
            <motion.li
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 1 }}
              className= {`cursor-pointer hover:text-green-500  hover:font-bold transition-all ease-in-out duration-500 ${isActive ==="services" ? "xl:text-2xl lg:text-lg text-green-500 border-b-2 border-green-500":""}`}
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
                <button className={`border-2 border-green-600 rounded-sm pl-2 pr-2 transition-all ease-in-out duration-500 ${isActive ==="projects" ? "xl:text-2xl lg:text-lg text-green-500 border-b-2 border-green-500":""} button-glitch`}>
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
              className= {`cursor-pointer hover:text-green-500 hover:font-bold transition-all ease-in-out duration-500 ${isActive ==="about" ? "xl:text-2xl lg:text-lg text-green-500 border-b-2 border-green-500":""}`}
              onClick={()=>handleActive("about")}>
           About
            </motion.li>
            </Link>
            <Link smooth to="/#contact">
            <motion.li
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 1 }}
              className= {`cursor-pointer hover:text-green-500  hover:font-bold transition-all ease-in-out duration-500 ${isActive ==="contact" ? "xl:text-2xl lg:text-lg text-green-500 border-b-2 border-green-500":""}`}
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
              className= {`cursor-pointer hover:text-green-500  hover:font-bold transition-all ease-in-out duration-500 ${isActive ==="faqs" ? "xl:text-2xl lg:text-lg text-green-500 border-b-2 border-green-500":""}`}
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
              <i className="fa-solid fa-file-lines text-xs hidden md:inline lg:hidden xl:inline"></i>
            </motion.li>
          </ul>
        </div>
        <a
          href={`mailto:wrkislayraj89@gmail.com?subject=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(body)}`}>
          <motion.button
            initial={{ opacity: 0, x: -900 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className={`border-2 border-l-black border-t-black border-r-teal-200 border-b-teal-100 bg-transparent backdrop-blur-[1px] p-1 pl-5 pr-5  absolute md:static top-14 right-6  md:mr-0 md:mt-1  hover:border-r-black hover:border-b-black hover:border-l-teal-200 hover:border-t-teal-100 transition-all duration-200 ${themeColor === "dark" ? "hover:bg-black/50 hover:text-green-300" : "text-pink-500 hover:bg-white/50 hover:text-green-600"}`}>
            Hire
          </motion.button>
        </a>
        <div
         className="older_smaller_screen_theme_icon lg:center lg:mt-2 text-sm  2xl:text-xl absolute right-10 top-6 md:right-44 lg:right-44  lg:static">        
        <motion.div
          initial={{ opacity: 0, x: -900 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="cursor-pointer"
          onClick={handleThemeMenuClick}
          >
        <i className={`fa-solid fa-palette hover:scale-105 ${!isThemeMenuHidden ? "fa-fade":""}`}></i>
       
        </motion.div>
        <div className="relative older_smaller_screen_theme_menu_parent">
        {
          !isThemeMenuHidden && 
       
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .3,  }}
         className={`older_smaller_screen_theme_menu absolute -left-3 xl:left-0 rounded p-1 lg:p-2 ${themeColor === "dark" ? "bg-white/90 text-black" : "bg-black/90 text-white"}`}>
        {colorOptions.map((color) => (
          <p
            key={color.value}
            onClick={() => handleThemeSelection(color.value)}
            className={`older_smaller_screen_theme_menu_list cursor-pointer  px-2 py-1 mt-1 rounded-md transition-all ease-in-out duration-300 center ${themeColor===color.value ? "bg-green-400" : ""}`}
          >
            {color.name}
          </p>
        ))}
        </motion.div>
         }
         </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

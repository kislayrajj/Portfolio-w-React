import React, { useState } from "react";
import Logo from "../assests/companylogo.png";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";
const Navbar = () => {
  const subject = "Let's work together (edit as per requirement)";
  const body = "Hello Kislay,";

  const downloadResume = () => {
    const url = "../assests.krRESUME.pdf";
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, "krRESUME.pdf"))
      .catch((error) => console.error("Error downloading file:", error));
  };
  let [IsBurger, setIsBurger] = useState(false);

  const handleMenuClick = () => {
    setIsBurger(false); //close the menu
  };

  return (
    <div className="flex justify-center">
      <nav className="navbar h-auto w-11/12 m-2 rounded-3xl flex justify-around p-3 fixed  z-10 ">
        <img
          src={Logo}
          alt=""
          class="company-logo h-12 object-cover hover:scale-150 transition-transform duration-400"
        />
        <div
          onClick={() => setIsBurger(!IsBurger)}
          className="burger text-2xl absolute right-[-20px] top-4 md:right-0  md:top-4 cursor-pointer lg:hidden">
          <i
            class="fa-solid fa-ellipsis-vertical h-10 w-10"
            name={IsBurger ? "close" : "menu"}></i>
        </div>
        <div className={`menu-1 m-2 `}>
          <ul
            className={`md:flex text-xl text-white lg:gap-20 md:gap-10  absolute lg:static  w-screen md:z-auto left-0 md:w-auto md:pl-0 pl-20 transition-all duration-500 ease-in-out ${
              IsBurger ? "left-0 top-24" : "left-[-800px] top-20"
            } bg-gray-900/75 md:bg-inherit`}>
            <Link to="/">
              <motion.li
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className=" cursor-pointer hover:text-green-500 md:hover:scale-[1.4] hover:font-bold"
                onClick={handleMenuClick}>
                Home
              </motion.li>
            </Link>
            <motion.li
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className=" cursor-pointer hover:text-green-500 md:hover:scale-[1.4] hover:font-bold active:scale-[1.4]">
              <a href="#about"> About</a>
            </motion.li>
            <Link to="/Projects">
              <motion.li
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1 }}
                className=" cursor-pointer hover:text-green-500 md:hover:font-bold"
                onClick={handleMenuClick}>
                <button className="border-2 border-green-600 rounded-sm pl-2 pr-2 ">
                  {" "}
                  Projects
                </button>{" "}
              </motion.li>
            </Link>
            <motion.li
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 1 }}
              className=" cursor-pointer hover:text-green-500 md:hover:scale-[1.4] hover:font-bold">
              Contact
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 1 }}
              className=" cursor-pointer hover:text-green-500 md:hover:scale-[1.4] hover:font-bold">
              Services
            </motion.li>
          </ul>
        </div>
        <div className="menu-2 m-2">
          <ul className="flex gap-5 md:gap-10">
            <motion.li
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="cursor-pointer hover:text-green-500 hover:scale-[1.4]">
              FAQs
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -700 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              onClick={() => downloadResume()}
              className="cursor-pointer hover:text-green-500">
              Resume <i class="fa-solid fa-file-lines text-xs"></i>
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
            className="border-2 border-l-black border-t-black border-r-teal-200 border-b-teal-100 bg-transparent backdrop-blur-[1px] p-1 pl-5 pr-5 hover:text-green-500 absolute md:static top-14 right-6  md:mr-0 md:mt-1">
            Hire
          </motion.button>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;

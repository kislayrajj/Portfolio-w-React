import React from "react";
import webLogo from "../assets/logos/verySmall/favicon.ico";
// import webLogo from "../assets/webLogo.png";
import { HashLink as Link } from 'react-router-hash-link';
import { useSelector } from "react-redux";
const Footer = () => {
  const themeColor = useSelector((state) => state.theme.themeColor)
  return (
    <div className={` px-4 lg:px-12 py-5 flex flex-x justify-between lg:items-center  text-xs lg:text-base  ${themeColor === "dark" ? "bg-gradient-to-r from-slate-900 to-slate-700" : "bg-gradient-to-r from-neutral-50 via-blue-100 to-fuchsia-200"}`}>
      <div className="">
        <div className="flex items-center  gap-2">
          <img src={webLogo} className="h-4 lg:h-8" alt="" />
          <div>Kislay</div>
        </div>
        <div className="mt-8 lg:mt-4 flex items-center gap-2 lg:gap-5 text-[#AF5] ">
          <span className=" size-6 lg:size-8 bg-black center rounded-lg hover:bg-gray-200 hover:text-black animate">
            <i className="fa-brands fa-linkedin-in"></i>
          </span>
          <span className="size-6 lg:size-8 bg-black center rounded-lg hover:bg-gray-200 hover:text-black animate">
            {" "}
            <i className="fa-brands fa-twitter"></i>
          </span>
          <span className="size-6 lg:size-8 bg-black center rounded-lg hover:bg-gray-200 hover:text-black animate">
            <i className="fa-brands fa-instagram"></i>
          </span>
          <span className="size-6 lg:size-8 bg-black center rounded-lg hover:bg-gray-200 hover:text-black animate">
            <i className="fa-brands fa-github"></i>
          </span>
        </div>
      </div>

      <div>
        <span className="">2025 Kislay Raj. All rights reserved.</span>
      </div>
      <div className="flex flex-col gap-2">
        <span><Link smooth to="/#main-content">Home</Link>
          </span>
        <span><Link smooth to="/projects">Projects </Link></span>
        {/* <span>Blogs</span> */}
        <span></span>
      </div>
    </div>
  );
};

export default Footer;

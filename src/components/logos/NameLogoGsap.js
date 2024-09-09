import React from "react";
import { useSelector } from "react-redux";
import "./NameText.css";

const NameLogoGsap = () => {
  const themeColor = useSelector((state)=> state.theme.themeColor)

  return (
    <div className="flex items-center h-full">
      <h1 className={`lg:hidden xl:block text-lg lg:text-xl xl:text-2xl 2xl:text-5xl font-bold leading-tight trainOne_font_text  ${themeColor === "dark" ? "text-custom-light text-shadow-custom-shadow-light" : "text-custom-blue text-shadow-custom-shadow-blue"} `}>
        <span className="inline-block letter-1">K</span>
        <span className="inline-block letter-2">I</span>
        <span className="inline-block letter-3">S</span>
        <span className="inline-block letter-4">L</span>
        <span className="inline-block letter-5">A</span>
        <span className="inline-block letter-6">Y</span>
      </h1>
      <h1 className={`hidden lg:block xl:hidden text-lg lg:text-xl xl:text-2xl 2xl:text-5xl font-bold leading-tight trainOne_font_text  ${themeColor === "dark" ? "text-custom-light text-shadow-custom-shadow-light" : "text-custom-blue text-shadow-custom-shadow-blue"} `}>
        <span className="inline-block letter-1">K</span>
        <span className="inline-block letter-2">R</span>
      </h1>
    </div>
  );
};

export default NameLogoGsap;

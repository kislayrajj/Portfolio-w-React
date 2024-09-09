import React, { useEffect, useRef,useState } from 'react';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';
import "../components/logos/NameText.css"
const sloganText = ['B', 'u', 'i', 'l', 'd', 'i', 'n', 'g', ' ', 'Y', 'o', 'u', 'r', ' ', 'B', 'r', 'a', 'n', 'd'];

const Slogan = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sloganRef = useRef(null);
const themeColor = useSelector((state)=> state.theme.themeColor)
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: .05, ease: 'power3.out' } });

    sloganText.forEach((item, index) => {
      tl.fromTo(
        sloganRef.current.children[index],
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, delay: .005 }
      );
    });
    // Optionally, you can return a cleanup function if needed
    // return () => tl.kill(); // Ensure animations are cleaned up

  }, []);

  return (
    <div ref={sloganRef}>
      {sloganText.map((item, index) => (
        <span onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)} className={`vss_slogan  transition-all duration-500 ease-in-out ${themeColor === "dark" ? `${isHovered ? "letter_white" :""}` : `${isHovered ? "letter_pink" :""}`} `} key={index}>{item}</span>
      ))}
    </div>
  );
};

export default Slogan;

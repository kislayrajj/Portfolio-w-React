import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useSelector } from 'react-redux';

const NameLogoGsap = () => {
  const textRef = useRef();
  const svgRef = useRef();
  const themeColor = useSelector((state)=>state.theme.themeColor)

  useEffect(() => {
    const splitText = new SplitType(textRef.current, { types: 'chars' });

    gsap.fromTo(
      splitText.chars,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.05,
      }
    );

    gsap.fromTo(
      svgRef.current,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)',
        delay: 1,
      }
    );

    // Clean up split text to avoid memory leaks
    return () => {
      splitText.revert();
    };
  }, []);

  return (
    <div className="relative flex items-center">
      <h1 ref={textRef} className="lg:hidden xl:block text-lg  lg:text-xl xl:text-2xl 2xl:text-5xl grad font-bold leading-tight">
        Kislay Raj
      </h1>
      <svg
        ref={svgRef}
        className="absolute top-1/2 left-2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 lg:w-16 lg:h-16 xl:w-24 xl:h-24 -z-10"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {themeColor ==="dark" ?  <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="5" /> : <circle cx="50" cy="50" r="40" stroke="deepPink" strokeWidth="5" /> }
       {themeColor ==="dark" ?   <circle cx="50" cy="50" r="30" stroke="blue" strokeWidth="5" /> : <circle cx="50" cy="50" r="30" stroke="#06D001" strokeWidth="5" /> }

       {themeColor ==="dark" ?    <circle cx="50" cy="50" r="20" stroke="#06D001" strokeWidth="5" /> : <circle cx="50" cy="50" r="20" stroke="blue" strokeWidth="5" /> }
        {/* <circle cx="50" cy="50" r="30" stroke="blue" strokeWidth="5" />
        <circle cx="50" cy="50" r="20" stroke="#06D001" strokeWidth="5" /> */}
         {/* <circle cx="50" cy="50" r="10" stroke="violet" strokeWidth="5" /> */}

      </svg>
    </div>
  );
};

export default NameLogoGsap;

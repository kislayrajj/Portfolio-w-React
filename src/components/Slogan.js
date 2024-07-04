import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const sloganText = ['B', 'u', 'i', 'l', 'd', 'i', 'n', 'g', ' ', 'Y', 'o', 'u', 'r', ' ', 'B', 'r', 'a', 'n', 'd'];

const Slogan = () => {
  const sloganRef = useRef(null);

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
        <span key={index}>{item}</span>
      ))}
    </div>
  );
};

export default Slogan;

import React from 'react';
import {motion} from "framer-motion"

const sloganText = ['B', 'u', 'i', 'l', 'd', 'i', 'n', 'g', ' ', 'Y', 'o', 'u', 'r', ' ', 'B', 'r', 'a', 'n', 'd'];

const Slogan = () => {
  return (
    <div>
      {sloganText.map((item, index) => {
        return (<motion.span
            key={index}
        initial={{ y: 2000 }}
    animate={{ y: 0 }}
    transition={{ duration: 1, delay: index * 0.1 }} 
    >{item}</motion.span>)
      })}
    </div>
  );
};

export default Slogan;

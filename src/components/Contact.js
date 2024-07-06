import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const Contact = () => {
  const contactRef = useRef(null);
  const [isvisible, setIsVisible] = useState(false);
  const [isFormDark, setIsFormDark] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = contactRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={contactRef}
      className="h-screen  bg-gradient-to-r from-slate-900 to-zinc-900">
      {/* <h1> hi this where you can contact me</h1> */}
      <div className="pt-8 w-fll text-start text-3xl pl-12 theme-font font-semibold text-green-400">
        Contact Me
      </div>
      <div className="h-[90%]  flex flex-col md:flex-row justify-evenly">
        <div className="center">
          <div className="">
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={isvisible ? { opacity: 1, x: 0 } : ""}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-2xl lg:text-3xl xl:text-5xl tracking-wide">
              Let's talk a bit.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={isvisible ? { opacity: 1, x: 0 } : ""}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-2xl lg:text-3xl xl:text-5xl tracking-wide md:mt-2">
              Tell me about Your
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={isvisible ? { opacity: 1, x: 0 } : ""}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-2xl lg:text-3xl xl:text-5xl tracking-wide md:mt-2">
              project.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -150 }}
              animate={isvisible ? { opacity: 1, y: 0 } : ""}
              transition={{ duration: 1 }}
              className="text-lg lg:text-xl xl:text-2xl mt-5 md:mt-10">
              Let's turn you idea into{" "}
              <span className="theme-font bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent font-bold">
                Reality
              </span>{" "}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isvisible ? { opacity: 1, scale: 1 } : ""}
              transition={{ duration: 0.7, delay: 1 }}
              className="mt-3 md:mt-5 lg:mt lg:flex lg:items-center lg:gap-2">
              <div className="center h-full">
                <div className=" bg-violet-400 hover:bg-green-500 px-2 rounded animate">
                  <i className="fa-solid fa-envelope hidden lg:block text-6xl hover:scale-105 "></i>
                </div>
              </div>
              <div>
                <p className="text-sm md:text-base">
                  You can connect{" "}
                  <i className="fa-brands fa-twitter ml-3 text-green-500"></i>{" "}
                </p>
                <p className="text-sm md:text-base">
                  with me using social media handles or
                </p>
                <p className=" text-sm md:text-base">
                  Just mail me at{" "}
                  <a
                    href="mailto:wrkislayraj89@gmail.com"
                    className="underline text-green-500">
                    Click
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="center">
          <div>
            Send me a text <i className="fa-solid fa-paper-plane fa-bounce"></i>
            <div
              className={`relative w-[300px]  sm:w-[400px] lg:w-[500px] xl:w-[600px]  mx-auto p-6  rounded-lg shadow-md ${
                isFormDark
                  ? "text-white animated-bg-form-dark"
                  : "animated-bg-form-light"
              }`}>
              <div
                onClick={() => setIsFormDark(!isFormDark)}
                className="absolute top-1 right-1 size-8 rounded-full center ">
                {isFormDark ? (
                  <i className="fa-regular fa-sun"></i>
                ) : (
                  <i className="fa-regular fa-moon text-black"></i>
                )}
              </div>
              <form className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  animate={isvisible ? { opacity: 1, y: 0 } : ""}
                  transition={{ duration: 1, delay: 0.2 }}>
                  <label
                    htmlFor="name"
                    className={`block text-sm lg:text-base font-medium 
            ${isFormDark ? "text-white" : "text-black"} `}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className={`mt-1 py-2 px-2 block w-full rounded-md shadow-sm
            focus:outline-none
            focus:outline-green-500 sm:text-sm lg:text-base 
            ${
              isFormDark ? " bg-white/30 text-white" : "text-black bg-violet-50"
            }
            `}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  animate={isvisible ? { opacity: 1, y: 0 } : ""}
                  transition={{ duration: 1, delay: 0.3 }}>
                  <label
                    htmlFor="email"
                    className={`block text-sm lg:text-base font-medium 
            ${isFormDark ? "text-white" : "text-black"} `}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className={`mt-1 py-2 px-2 block w-full rounded-md shadow-sm             focus:outline-none
              focus:outline-green-500 sm:text-sm lg:text-base 
              ${
                isFormDark
                  ? " bg-white/30 text-white"
                  : "text-black bg-violet-50"
              }
              `}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  animate={isvisible ? { opacity: 1, y: 0 } : ""}
                  transition={{ duration: 1, delay: 0.4 }}>
                  <label
                    htmlFor="subject"
                    className={`block text-sm lg:text-base font-medium 
            ${isFormDark ? "text-white" : "text-black"} `}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter the subject"
                    className={`mt-1 py-2 px-2 block w-full rounded-md shadow-sm focus:outline-none
              focus:outline-green-500 sm:text-sm lg:text-base 
              ${
                isFormDark
                  ? " bg-white/30 text-white"
                  : "text-black bg-violet-50"
              }
              `}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  animate={isvisible ? { opacity: 1, y: 0 } : ""}
                  transition={{ duration: 1, delay: 0.5 }}>
                  <label
                    htmlFor="message"
                    className={`block text-sm lg:text-base font-medium 
            ${isFormDark ? "text-white" : "text-black"} `}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Enter your message"
                    className={`mt-1 py-2 px-2 block w-full rounded-md shadow-sm focus:outline-none
              focus:outline-green-500 sm:text-sm lg:text-base 
              ${
                isFormDark
                  ? " bg-white/30 text-white"
                  : "text-black bg-violet-50"
              }
              `}
                  />
                </motion.div>
                <div className="flex justify-end">
                  <div
                    className={`flex justify-end ${
                      isFormDark
                        ? "shadow-[0px_0px_23px_1px_#edf2f7]"
                        : "shadow-[0px_0px_23px_1px_#48bb78]"
                    }`}>
                    <motion.button
                      initial={{ opacity: 0, y: 150 }}
                      animate={isvisible ? { opacity: 1, y: 0 } : ""}
                      transition={{ duration: 1, delay: 0.6 }}
                      type="submit"
                      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
              ${isFormDark ? "text-white" : "text-black "}`}>
                      Submit
                    </motion.button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

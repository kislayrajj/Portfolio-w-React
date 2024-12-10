import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const Contact = () => {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isFormDark, setIsFormDark] = useState(true);
  const [isErrorInFormSubmission, setIsErrorInFormSubmission] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const slidingTexts = ["project", "idea", "vision", "requirements"];
  const [currentSlidingText, setCurrentSlidingText] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const themeColor = useSelector((state) => state.theme.themeColor);

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
      observer?.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer?.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (themeColor !== "dark") {
      setIsFormDark(false);
    } else {
      setIsFormDark(true);
    }
  }, [themeColor]);

  //sliding text animation
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlidingText(
        (prevIndex) => (prevIndex + 1) % slidingTexts?.length
      );
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  //form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionSuccess(false);

    try {
      const formDataWithAccessKey = {
        ...formData,
        access_key: "cc7bab87-183d-4401-af8f-3023601e7c83",
      };
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataWithAccessKey),
      });
      const result = await response.json();

      if (result.success) {
        // console.log("form submitted successfully : ", result.data);
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
        setIsErrorInFormSubmission(false);
        setSubmissionSuccess(true);
      } else {
        console.error("Error occurred  : ", result.message);
        setIsErrorInFormSubmission(true);

        setTimeout(() => {
          setIsErrorInFormSubmission(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form (catchError) : ", error);
      setIsErrorInFormSubmission(true);

      setTimeout(() => {
        setIsErrorInFormSubmission(false);
      }, 5000);
    } finally {
      setIsSubmitting(false); // Stop loader
      setTimeout(() => {
        setIsErrorInFormSubmission(false);
        setSubmissionSuccess(false);
      }, 5000);
    }
  };

  // const handleClearForm =()=>{
  //   setFormData({
  //     name: "",
  //     email: "",
  //     company: "",
  //     message: "",
  //   });
  //   setIsErrorInFormSubmission(false);
  //   setSubmissionSuccess(false);
  // }

  return (
    <div
      ref={contactRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`min-h-screen overflow-hidden pb-5 ${
        themeColor === "dark"
          ? "bg-gradient-to-r from-slate-900 to-zinc-900"
          : "bg-gradient-to-r from-gray-50 to-fuchsia-50"
      } `}>
      {/* <h1> hi this where you can contact me</h1> */}
      <div
        className={`pt-8 text-start text-3xl pl-12 theme-font font-semibold  ${
          themeColor === "dark" ? "text-green-400" : "text-blue-600"
        }`}>
        Contact Me
      </div>
      <div className="h-[90%] mt-20 flex flex-col md:flex-row justify-evenly">
        <div className="center">
          <div className={`group`}>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={isVisible ? { opacity: 1, x: 0 } : ""}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-2xl lg:text-3xl xl:text-5xl tracking-wide">
              Let's talk a bit.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={isVisible ? { opacity: 1, x: 0 } : ""}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-2xl lg:text-3xl xl:text-5xl tracking-wide md:mt-2">
              Tell me about Your
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={isVisible ? { opacity: 1, x: 0 } : ""}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-2xl lg:text-3xl xl:text-5xl tracking-wide md:mt-2 ">
              <motion.p
                key={currentSlidingText}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className={`${
                  themeColor === "dark"
                    ? `${isHovered ? "letter_white" : ""}`
                    : `${isHovered ? "letter_pink" : ""}`
                } transition-all duration-500 ease-in-out`}>
                {slidingTexts[currentSlidingText]}.
              </motion.p>
              {/* project. */}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -150 }}
              animate={isVisible ? { opacity: 1, y: 0 } : ""}
              transition={{ duration: 1 }}
              className="text-lg lg:text-xl xl:text-2xl mt-5 md:mt-10">
              Let's turn you idea into{" "}
              <span className="theme-font bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent font-bold group-hover:text-lime-500  transition-all duration-700 delay-[.2s]">
                Reality
              </span>{" "}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : ""}
              transition={{ duration: 0.7, delay: 1 }}
              className="mt-3 md:mt-5 lg:mt lg:flex lg:items-center lg:gap-2">
              <div className="center h-full">
                <div
                  className={`${
                    themeColor === "dark"
                      ? " bg-violet-400 hover:bg-green-500"
                      : " bg-pink-300 hover:bg-blue-400 "
                  } px-2 rounded animate text-white`}>
                  <i className="fa-solid fa-envelope hidden lg:block text-6xl hover:scale-105"></i>
                </div>
              </div>
              <div>
                <p className="text-sm md:text-base">
                  You can connect{" "}
                  <i className="fa-brands fa-twitter ml-3 text-green-500 group-hover:-translate-y-10 lg:group-hover:-translate-y-12 lg:group-hover:translate-x-12 group-hover:translate-x-24 group-hover:opacity-0 transition-all duration-700"></i>{" "}
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
          <div className="relative mt-10 lg:mt-0 group">
            <span
              //
              className={`lg:absolute group-hover:-translate-y-1  transition-all duration-500 ease-in-out lg:text-5xl ${
                themeColor === "dark"
                  ? "text-white lg:group-hover:bg-gradient-to-r lg:group-hover:from-slate-300 lg:group-hover:to-slate-500 lg:group-hover:bg-clip-text lg:group-hover:text-transparent"
                  : "text-black lg:group-hover:bg-gradient-to-r lg:group-hover:from-rose-400 lg:group-hover:to-red-500 lg:group-hover:bg-clip-text lg:group-hover:text-transparent"
              }`}>
              Send me a text
            </span>
            <motion.i
              initial={{ opacity: 0, x: 120, y: -120 }}
              animate={
                submissionSuccess
                  ? { opacity: 0, x: 120, y: -120 }
                  : { opacity: 1, x: 0, y: 0 }
              }
              transition={{
                opacity: submissionSuccess
                  ? { delay: 0.5, duration: 0.5 }
                  : { delay: 1, duration: 0.5 }, // When not submitting, opacity changes without delay
                x: { duration: 0.5 },
                y: { duration: 0.5 },
              }}
              className={`px-2 lg:px-0 fa-solid fa-paper-plane lg:absolute lg:text-5xl lg:-top-1 lg:right-12  transition-all duration-500 ease-in-out ${
                isErrorInFormSubmission ? "text-red-400" : ""
              } ${
                submissionSuccess
                  ? "text-lime-500"
                  : "lg:group-hover:translate-x-2 lg:group-hover:-translate-y-2 "
              }`}></motion.i>
            <div
              className={`relative mt-2 lg:mt-9 w-[300px] sm:w-[400px] lg:w-[500px] xl:w-[600px] h-[494px]  md:h-[466px] lg:h-[500px] mx-auto p-6  rounded-lg shadow-md ${
                themeColor === "dark" ? "shadow-form_dark" : "shadow-form_light"
              } ${
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
              <form className="space-y-4 relative" onSubmit={handleSubmit}>
                {isSubmitting && (
                  <div className="absolute  bottom-0 ">
                    <div className="formSubLoader"></div>
                  </div>
                )}
                {/* Success Message */}
                {submissionSuccess && (
                  <div className="absolute -bottom-3 md:bottom-0  text-[10px] md:text-xs lg:text-base w-min md:w-auto mr-2 p-2 bg-green-500/60 text-white rounded">
                    Message sent successfully!
                  </div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : ""}
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
                    value={formData.name}
                    onChange={handleChange}
                    required
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
                  animate={isVisible ? { opacity: 1, y: 0 } : ""}
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
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                  animate={isVisible ? { opacity: 1, y: 0 } : ""}
                  transition={{ duration: 1, delay: 0.4 }}>
                  <label
                    htmlFor="company"
                    className={`block text-sm lg:text-base font-medium 
            ${isFormDark ? "text-white" : "text-black"} `}>
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your company"
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
                  animate={isVisible ? { opacity: 1, y: 0 } : ""}
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
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
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
                <div className="absolute bottom-0 text-[10px] lg:text-sm w-[60%] md:[70%] lg:w-4/5 text-red-300">
                  {isErrorInFormSubmission && (
                    <div>
                      Error Submitting ! Please use email or any social media
                      platform.
                    </div>
                  )}
                </div>
                <div
                  className={`flex justify-end transition-shadow duration-500 delay-1000`}>
                  {/* <div onClick={handleClearForm}>
                      clear

                    </div> */}
                  <motion.button
                    initial={{ opacity: 0, y: 150 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : ""}
                    transition={{ duration: 1, delay: 0.6 }}
                    type="submit"
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md w-24 center justify-center
              ${
                isFormDark
                  ? "shadow-[0px_0px_20px_2px_#e2e8f0] text-white"
                  : "shadow-[0px_0px_20px_2px_#f687b3] text-black"
              }`}>
                    {isSubmitting ? "Submitting..." : "Submit "}
                  </motion.button>
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

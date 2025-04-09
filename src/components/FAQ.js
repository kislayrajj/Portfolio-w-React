import React, { useState } from "react";
import faqs from "./../assets/data/faq_data";
import { useSelector } from "react-redux";
import "./../Background.css";
import { AnimatePresence, motion } from "framer-motion";

const FAQ = () => {
  const themeColor = useSelector((state) => state.theme.themeColor);
  const [activeId, setActiveId] = useState(null);

  const toggleDropdown = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div
      className={`${
        themeColor === "dark"
          ? "faqs-dark bg-gradient-to-r from-slate-900 to-slate-800"
          : "skills-light"
      } flex flex-col items-center gap-4 px-6 md:px-12 py-12 h-auto`}>
      <div
        className={`text-start  w-full text-3xl theme-font font-semibold ${
          themeColor === "dark" ? "text-green-400" : "text-blue-600"
        }`}>
        FAQs
      </div>

      <div className="w-full md:w-3/4">
        {faqs?.map((faq) => (
          <div
            key={faq.id}
            onClick={() => toggleDropdown(faq.id)}
            className={`border-b py-4 hover:bg-black/20 px-2 rounded-md cursor-pointer ${
              themeColor === "dark"
                ? "border-gray-700 text-white"
                : "border-gray-300 text-black"
            }`}>
            <div
              className="flex justify-between items-center">
              <h3 className="font-medium text-lg">{faq.question}</h3>
              <div className="icon">
                {activeId === faq.id ? (
                  <i className="fa-solid fa-caret-up"></i>
                ) : (
                  <i className="fa-solid fa-caret-down"></i>
                )}
              </div>
            </div>
            <AnimatePresence initial={false}>
  {activeId === faq.id && (
    <motion.div
      key="content"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden mt-2"
    >
      <p className="text-sm md:text-base font-light">{faq.answer}</p>
    </motion.div>
  )}
</AnimatePresence>

          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

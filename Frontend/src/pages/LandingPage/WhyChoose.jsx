

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";


import Img from "../../assets/Img5.jpg";


const WhyChoose = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const choose = [
    {
      name: "Peaceful & Supportive Learning Environment",
      description:
        "We provide a calm, friendly, and focused environment where students can learn comfortably without pressure.",
    },
    {
      name: "Experienced & Caring Instructors",
      description:
        "Our teachers guide each student with patience, clarity, and proper techniques to help them succeed.",
    },
    {
      name: "Free Study Materials",
      description:
        "From practice books to grammar notes, we provide essential learning materials at no extra cost.",
    },
  
  ];

  return (
    <div className="w-full py-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>

      <div className="max-w-6xl items-center justify-between mx-auto flex flex-col md:flex-row gap-10">
      
        {/* Left SIDE IMAGE */}
        <div className="flex-1 flex justify-center h-100">
          <img
            src={Img}
            alt="Why Choose Us"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>


        {/* Right SIDE - DROPDOWNS */}

        <div className=" flex-1">  
          <div className=" text-sm font-medium text-gray-700 ">At DOS, we provide a supportive and peaceful learning environment where students can focus, grow, and build confidence. Our experienced and friendly instructors guide each learner with personal attention, ensuring that every concept is understood clearly. With a modern, industry-relevant curriculum and a practical, hands-on teaching approach, we help students gain real skills they can use in the real world. All of this comes at an affordable cost, making quality education accessible for everyone.</div>

        <div className=" space-y-4 mt-6 overflow-y-auto max-h-100 ">
          {choose.map((c, i) => (
            <div key={i} className=" p-2 border-b border-gray-300 pb-3">
              {/* TITLE + ARROW */}
              <div
                onClick={() => toggle(i)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-primary">{c.name}</h3>

                {/* arrow rotate */}
                <motion.span
                  animate={{ rotate: openIndex === i ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl font-bold"
                >
                  <IoIosArrowForward />

                </motion.span>
              </div>

              {/* DROPDOWN DESCRIPTION */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-600 mt-3"
                  >
                    {c.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        </div>

      
      </div>
    </div>
  );
};

export default WhyChoose;

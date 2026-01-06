import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const choose = [
    {
      name: "What courses do you offer?",
      description:
        "We offer various IT and language courses including web development, graphic design, UI/UX, computer basics, Korean language, and more.",
    },
    {
      name: "How can I enroll in a course?",
      description:
        "You can enroll by visiting our office, filling out the online form, or contacting us through phone or social media.",
    },
    {
      name: "Do you provide certificates after course completion?",
      description:
        "Yes, we provide a recognized certificate upon successful completion of each course, including class participation and practical assessments.",
    },
    {
      name: "Do you offer online classes?",
      description:
        "Yes, we provide both online and offline learning options depending on course availability.",
    },
    {
      name: "Do you provide job placement or internship opportunities?",
      description:
        "Yes, we help our students with internships, job recommendations, and career guidance based on their skill level and performance.",
    },
  ];

  return (
    <div className="w-full py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center ">FAQ</h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* LEFT SIDE - DROPDOWNS */}
        <div className="flex-1 space-y-4 mt-2 overflow-y-auto max-h-100">
          {choose.map((c, i) => (
            <div key={i} className=" p-2 border-b border-gray-300 pb-3">
              {/* TITLE + ARROW */}
              <div
                onClick={() => toggle(i)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className=" font-semibold text-primary ">{c.name}</h3>

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
  );
};

export default FAQ;

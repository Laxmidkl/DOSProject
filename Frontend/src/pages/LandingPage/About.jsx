import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white w-full py-16">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-sm font-bold text-center text-primary uppercase"
      >
        About
      </motion.h2>

      {/* Main Content */}
      <div className="flex mt-12 px-14 gap-10">
        {/* LEFT: Image */}
        <img
          src="https://static.vecteezy.com/system/resources/previews/070/254/539/non_2x/collaborative-university-students-engaged-in-group-study-sharing-ideas-and-working-together-on-laptop-atmosphere-is-positive-and-focused-highlighting-teamwork-and-learning-free-photo.jpeg"
          alt=""
          className="h-96 w-1/2 object-cover rounded-2xl"
        />

        {/* RIGHT: Text */}
        <div className="w-1/2 flex flex-col justify-center">
          {/* Animated Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl font-bold  mb-6"
          >
            Empower Your Career with Language <span className="  flex justify-center">  & IT Skills! </span>
          </motion.h3>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-600 leading-relaxed"
          >
            At DOS Multi Services Training Center, we help you build the skills
            that matter in today’s global and digital world. Our programs include
            foreign language training in Korean, Japanese, and German,
            professional accounting courses, and modern IT programs such as
            Graphic Design, Frontend, Backend, and Full Stack Development.
            <br />
            <br />
            Whether you want to prepare for international opportunities, advance
            in your career, or gain practical industry-ready skills, our expert
            instructors provide hands-on, interactive, and career-focused
            learning that empowers you to succeed locally and globally.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import {content} from '../../components/data/courseData';

const categories = [
  { label: "All", value: "All" },
  { label: "Web Development", value: "Web Development" },
  { label: "Cyber Security", value: "Cyber Security" },
  { label: "Korean Language", value: "Korean Language" },
  { label: "UI/UX Design", value: "UI/UX Design" },
];

const Courses = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourse = content.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryLabel = (cat) => {
    switch (cat) {
      case "Web Development":
        return "Web Development";
      case "Cyber Security":
        return "Cyber Security";
      case "Korean Language":
        return "Korean Language";
      case "UI/UX Design":
        return "UI/UX Design";
      default:
        return "";
    }
  };

  return (
    <div className=" min-h-screen">
      <section className=" relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=" image"
          className=" w-full h-130.75   object-cover blur-xs "
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className=" text-center absolute inset-0 flex flex-col justify-center items-center">
          <motion.h2
            className=" text-5xl font-bold bg-linear-to-r from-sky-300 via-white to-red-300 text-transparent bg-clip-text h-16 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Our Courses
          </motion.h2>
          <motion.p
            className="text-sm font-medium text-gray-200 mt-3 max-w-2xl tracking-wider"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Master Korean language and IT skills under one roof with practical
            training, expert mentors, and career-oriented learning at DOS
            Institute.
          </motion.p>
        </div>
           <div className="font-medium absolute left-9 bottom-3 flex gap-1 items-center text-white cursor-pointer">
                <div><FaArrowLeftLong /></div>
                  <button
                  className="  hover:text-red-500 "
                  onClick={() =>{
                    navigate("/")
                  }}
                  > Home 
                  </button> /
          <span className=" underline"> Courses </span>
                </div>
        
      </section>

      {/* Filters */}
      <section className=" p-8  ml-5 ">
        <div className="flex flex-wrap gap-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-5 py-2 rounded-full font-medium border transition
                  ${
                    selectedCategory === cat.value
                      ? "bg-red-500 text-white border-red-500"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-red-100"
                  }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search course..."
          className="border p-2 rounded-xl w-full mb-6 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="  ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourse.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow hover:shadow-red-200 transition hover:-translate-y-2 overflow-hidden"
              >
                <div className=" relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-52 w-full object-cover"
                  />

                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {getCategoryLabel(course.category)}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  <span className=" bg-red-200 text-red-500 text-xs font-medium px-3 py-1 rounded-full">
                    {course.status}
                  </span>

                  <h3 className="font-bold text-lg line-clamp-2 mt-2">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-2 mt-2 h-11">
                    {course.description}
                  </p>

                  <div className="flex justify-between text-xs mt-4">
                    <span className=" text-gray-600P">{course.duration}</span>
                    <div className=" flex gap-2 items-center ">
                      <button
                        onClick={() => {
                          navigate(`/course/${course.id}`);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className=" cursor-pointer  text-red-600"
                      >
                        {" "}
                        Read More
                      </button>
                      <span className="   mt-0.5 cursor-pointer  text-red-600">
                        <FaArrowRightLong />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;

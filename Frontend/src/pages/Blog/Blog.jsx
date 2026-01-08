import React from 'react'
import { motion } from "framer-motion";
import { FaArrowLeftLong } from 'react-icons/fa6';

const Blog = () => {
  return (
      <div className="min-h-screen">
        {/* Banner */}
        <section className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
            alt="Blogs Banner"
            className="w-full h-130 object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <motion.h2
              className="text-5xl font-bold h-16 bg-linear-to-r from-sky-300 via-white to-red-300 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Blogs
            </motion.h2>

            <motion.p
              className="text-gray-200 mt-4 max-w-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Explore blogs that simplify IT concepts, language learning, and
              career guidance to help you grow every day.
            </motion.p>
          </div>

       <div className="font-medium absolute left-9 bottom-3 flex gap-1 items-center text-white  cursor-pointer">
        <div className="hover:text-red-500"><FaArrowLeftLong /></div>
          <button
          className=" hover:text-red-500 cursor-pointer"
          onClick={() =>{
            navigate("/")
          }}
          > Home 
          </button>  /
          <span className=" underline"> Blog </span>

        </div>

        </section>


    </div>
  )
}

export default Blog
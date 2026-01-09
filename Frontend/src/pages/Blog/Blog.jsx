import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { blogs } from "../../components/data/blogData";

// Blog data

const categories = [
  { label: "All", value: "All" },
  { label: "Information Technology", value: "Information Technology" },
  { label: "Language", value: "Language" },
  { label: "Career Tips", value: "Career Tips" },
  { label: "Workshops & Events", value: "Workshops & Events" },
];

const Blog = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryLabel = (cat) => {
    switch (cat) {
      case "Information Technology":
        return "Information Technology";
      case "Language":
        return "Language";
      case "Career Tips":
        return "Career Tips";
      case "Workshops & Events":
        return "Workshops & Events";
      default:
        return "";
    }
  };

  return (
    <>
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
          className=" hover:text-red-500"
          onClick={() =>{
            navigate("/")
          }}
          > Home 
          </button>  /
          <span className=" underline"> Blog </span>

        </div>

        </section>

        {/* Filters */}
        <section className=" p-8 ml-5">
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
            placeholder="Search blogs..."
            className="border p-2 rounded-xl w-full mb-6 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl shadow hover:shadow-red-200 transition hover:-translate-y-2 overflow-hidden"
              >
                {/* Image + Category */}
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-52 w-full object-cover"
                  />

                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {getCategoryLabel(blog.category)}
                  </span>

                  <span className="absolute bottom-2 left-1 bg-white px-3 py-1 rounded font-semibold text-sm">
                    {blog.date}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-lg line-clamp-2 h-14">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-2 mt-2 h-11">
                    {blog.description}
                  </p>

                  {/* Author & Date */}
                  <div className="flex justify-between text-xs text-gray-500 mt-4">
                    <span>{blog.author}</span>
                    <div className=" flex gap-2 items-center ">
                      <button
                        onClick={() => {
                          navigate(`/blog/${blog.id}`);
                          window.scrollTo({ top: 0, behavior: "smooth" }); 
                        }}
                        className=" cursor-pointer  text-red-600"
                      >
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
        </section>
      </div>

    </>
  );
};

export default Blog;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { galleryData } from "../../components/data/galleryData";



const categories = [
  { label: "All", value: "All" },
  { label: "Information Technology", value: "A" },
  { label: "Korean Language", value: "B" },
  { label: "Career Tips", value: "C" },
  { label: "Workshops & Events", value: "D" },
];

const getCategoryLabel = (cat) => {
  switch (cat) {
    case "A":
      return "Information Technology";
    case "B":
      return "Language";
    case "C":
      return "Career Tips";
    case "D":
      return "Workshops & Events";
    default:
      return "";
  }
};

const Gallery = () => {

  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6); // initial items

  const filteredGallery = galleryData.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  const handleViewMore = () => {
    const remaining = filteredGallery.length - visibleCount;
    setVisibleCount((prev) => prev + remaining); // add remaining items
  };
  return (
    <>
      <div className="min-h-screen ">
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
              Our Gallery
            </motion.h2>
            <motion.p
              className="text-sm font-medium text-gray-200 mt-3 max-w-2xl tracking-wider"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Discover a collection of moments carefully captured to highlight
              our work, values, and memorable experiences.
            </motion.p>
          </div>
          
           <div className="font-medium absolute left-9 bottom-3 flex gap-1 items-center text-white  cursor-pointer">
                <div><FaArrowLeftLong /></div>
                  <button
                  className=" hover:text-red-500"
                  onClick={() =>{
                    navigate("/")
                  }}
                  > Home  
                  </button> /
          <span className=" underline"> Gallery </span>
                </div>
        

        </section>

        {/* filter Button*/}
        <section className="p-8 ">
          <div className="flex flex-wrap gap-4 mb-10 ml-5 mt-5  ">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() =>
                  setSelectedCategory(cat.value) && setVisibleCount(6)
                }
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

          {/* Gallery grid  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ml-6 mb-6">
            {filteredGallery.slice(0, visibleCount).map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
            
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          {selectedCategory === "All" &&
            visibleCount < filteredGallery.length && (
              <div className="flex justify-center mt-6 ">
                <button
                  onClick={handleViewMore}
                  className="px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition"
                >
                  View More
                </button>
              </div>
            )}
        </section>
      </div>

    </>
  );
};

export default Gallery;

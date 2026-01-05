import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import { path } from "framer-motion/client";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { name: "Home", path: "./" },
    { name: "About", path: "./about" },
    { name: "Blog", path: "./blog" },
    { name: "Gallery", path: "./gallery" },
    { name: "Courses", path: "./course" },
    { name: "Events", path: "./event" },
    { name: "Contact", path: "./contact" },
  ];

  return (
    <div
      className=" flex bg-gray-100 py-2 text-black justify-between 
      border-b border-gray-200
    shadow-[0_8px_18px_rgba(155,0,0,0.6)]  "
    >
      
      <div className="flex mx-16 w-full justify-between ">

      <div className="">
        <img src={Logo} alt="Logo" className=" h-12 w-12 rounded-full" />
      </div>
      <div className=" flex gap-8 text-lg  py-3  font-semibold ">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={scrollToTop}
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            {link.name}
          </NavLink>
        ))}

        <NavLink
          to="/book"
          onClick={scrollToTop}
          style={({ isActive }) => ({
            color: isActive ? "white" : "black",
          })}
        >
          <button className=" px-4 py-1 bg-red-600 border-2 text-white border-gray-100 rounded-full -my-2  transform transition-transform duration-600 ease-in-out hover:scale-105 hover:text-white">
            Book Now
          </button>
        </NavLink>
      </div>
      </div>
    </div>
  );
};

export default Navbar;

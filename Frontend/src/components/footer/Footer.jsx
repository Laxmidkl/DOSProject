import React from "react";
import img2 from "../../assets/Img2.jpg";
import Logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { path } from "framer-motion/client";

const Footer = () => {
  const footerContact = [
    {
      icon: <FaLocationDot  />,
      name: " Butwal Rupandehi, Butwal, Nepal ",
    },

    {
      icon: <FaPhoneAlt />,
      name: " 986-7507700 ",
    },

    {
      icon: <MdEmail />,
      name: " korean@dosnpl.com ",
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <FaFacebookF />, url: "https://facebook.com" },
    { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, url: "https://linkedin.com" },
  ];

  const links = [
    { name: "Home", path: "./" },
    { name: "About", path: "./about" },
    { name: "Blog", path: "./blog" },
    { name: "Gallery", path: "./gallery" },
    { name: "Contact", path: "./contact" },
  ]
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="relative bg-gray-100 text-black  w-full h-80 bottom-0">


      {/* Footer Content (Optional) */}
      <div className=" relative z-20 ">
      <div className=" flex   justify-between mx-16 h-full">
        <div className=" mt-10 ">
          <img src={Logo} alt="" className=" h-12 w-12 rounded-full" />
          <p className=" w-52 mt-4 ">
            Delivering modern digital solutions with elegant UI, interactive
            animations, and clean design.
          </p>
        </div>

        <div className=" mt-10">
          <p className=" font-semibold  mb-5 text-red-500"> Quick Link</p>
          <nav className=" flex flex-col gap-3">
            {
              links.map((link) =>(
            <Link
            key={link.name}
             to={link.path}
             onClick={scrollToTop}
              className="  hover:text-red-500">
              {link.name}
            </Link>

              )) 
            }
          </nav>
        </div>

        <div className=" mt-10">
          <p className="font-semibold mb-5 text-red-500">Contact</p>
          <div>
            {footerContact.map((con, index) => (
              <div key={index} className=" flex mt-3  gap-2">
                <h1 className=" relative top-1 text-xl"> {con.icon}</h1>
                <p> {con.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className=" mt-10">
          <p className="font-semibold  mb-5 text-red-500">Keep in Touch</p>
          <div className="grid grid-cols-2 gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel=""
                className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-gray-800 hover:bg-red-500 hover:text-white transition-colors text-xl"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

        {/* Bottom content: Horizontal line & copyright */}
  <div className=" mt-6 ">
    <hr className="border-gray-500 w-full mb-3" />
    <p className="text-sm text-center mb-9">
      &#169; {new Date().getFullYear()} All rights reserved | This website is made with ❤️ by Laxmi Dhakal
    </p>
  </div>

      </div>

    </footer> 
    
    
  );
};

export default Footer;

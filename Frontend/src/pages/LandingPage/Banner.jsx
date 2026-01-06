import { useEffect, useState } from "react";
import img1 from "../../assets/Img1.png";
import img2 from "../../assets/Img2.jpg";
import img3 from "../../assets/Img3.jpg";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const button = [
    {
      label: "Explore Course",
      bg: "bg-red-500",
      border: "", // no border
      hover: "hover:shadow-[0_0_5px_red]",
    },

    {
      label: "Contact Us",
      bg: " bg-transparent",
      border: "border border-gray-400",
      hover: "hover:shadow-[0_0_5px_gray]",
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden font-serif bg-black">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[5000ms] filter blur-xs
            ${index === current ? "opacity-100" : "opacity-0"}`}
          alt="resort"
        />
      ))}

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-white h-full px-4 text-center max-w-4xl mx-auto ">
        <h1 className="text-6xl text-shadow-2xs  text-shadow-primary font-semibold ">
          DOS Learning Hub{" "}
        </h1>

        <p className=" text-primary m-4 font-semibold">
          {" "}
          Where Skills Turn Into Opportunities
        </p>

        <p className="text-xl mt-2  text-white text-shadow-2xs  ">
          Professional training in Korean language, finance, creative design,
          and modern frontend, backend, and full-stack development to prepare
          you for real-world careers and global opportunities.
        </p>

        <div className=" flex gap-5 top-10 relative">
          {button.map((btn, index) => (
            <button
              key={index}
              className={`${btn.bg} ${btn.border} ${btn.hover} 
         text-white h-14 w-44   font-semibold rounded-full transform transition-transform duration-500 ease-in-out hover:scale-110 `}
              onClick={
                btn.label === "Contact Us"
                  ? () => navigate("/contact")
                  : () => navigate("/course")
              }
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

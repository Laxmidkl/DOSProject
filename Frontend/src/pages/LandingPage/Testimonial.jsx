import { motion } from "framer-motion";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";



const Testimonial = () => {
  const card = [
    {
      name: "Laxmi Dhakal",
      role: "FullStack Developer",
      description: "The classes were very easy to understand. I had zero coding background, but the instructor explained every concept clearly. Now I can build real websites using HTML, CSS, and JavaScript!",
      image: "https://static.independent.co.uk/2025/08/27/16/02/Best-laptops-Indybest-review.png",
      rating: 5,
    },
    {
      name: "Sanjit Sharma",
      role: "Cloud Computing",
      description: "I loved the cloud computing training. The examples were practical, and I learned how applications actually run on AWS. The trainer was very experienced.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Uo88OKO7RU04UAb2Ta28Uj8FoS7DEp3D1A&s",
      rating: 4,
    },
    {
      name: "Manisha Sharma",
      role: "Digital Marketing",
      description: "The course was very practical. I learned SEO, Facebook ads, and content writing. I even started handling small clients!",
      image: "https://st3.depositphotos.com/2572561/16360/i/450/depositphotos_163607278-stock-photo-over-the-shoulder-footage-of.jpg",
      rating: 4,
    },
    {
      name: "Bibek Gupta",
      role: "Mobile App Development",
      description: "Great course! I built my first Android app within 3 weeks. The instructor made complex topics easy to understand.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThymiQGPK05PvyQ07-60D8VevwLlYsflLamg&s",
      rating: 2,
    },
    {
      name: "Pooja Karki",
      role: "UI/UX Design",
      description: "This course helped me understand real UI/UX principles and tools like Figma. The instructor was very supportive, and I improved my design thinking a lot.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFIlSMpTpwe3JcXmzAPgPctpI_TE09RWWF1w&s",
      rating: 5,
    },
    {
      name: "Anisha Gaudel",
      role: "Data Science",
      description: "The course content was perfectly structured. I learned Python, data analysis, and machine learning with practical examples. I can now build my own ML projects!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1GO5GLfo4xw6jdlO5zCv7NBXL-NDVAPqKPffWbBfd9LKlp3IpYxGrTzUH8nQc5Cfm50&usqp=CAU",
      rating: 3,
    },
  ];

  const loopCards = [...card, ...card];

  return (
    <div className="w-full py-12 bg-red-50/80 overflow-hidden">
      <h2 className="text-sm font-bold text-center text-primary uppercase">Testimonials</h2>
      <h5 className="text-3xl font-bold text-center mb-10">What Students Say</h5>

      <motion.div
        className="flex gap-6 "
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      >
        {loopCards.map((c, index) => (
          <div
          key={index}
          className="min-w-95 min-h-87.5 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >

          <div className=" h-10 w-10 bg-red-600 rounded text-white  items-center justify-center flex absolute -top-6 "><FaQuoteLeft /></div>

            <img
              src={c.image}
              className="w-24 h-24 rounded-full object-cover mx-auto"
              alt={c.name}
            />

            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold">{c.name}</h3>
              <p className="text-gray-500 text-sm">{c.role}</p>

              {/* Rating */}
              <div className="flex justify-center mt-2">
                {Array.from({ length: 5 }, (_, i) =>
                  i < c.rating ? (
                    <AiFillStar key={i} className="text-yellow-400" />
                  ) : (
                    <AiOutlineStar key={i} className="text-gray-300" />
                  )
                )}
              </div>
            </div>

            <p className="mt-4 text-center w-full bg-gray-100 rounded-xl italic text-gray-500 font-thin line-clamp-3">
              {c.description}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonial;

import {
  Smartphone,
  BookOpen,
  Users,
  Award,
  MessageCircle,
  Shield,
  CheckCircle,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import CountUp, { useCountUp } from 'react-countup';
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";




const About = () => {
     const navigate = useNavigate();
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });


  const leadershipTeam = [
    {
      name: " Rita Sharma",
      role: "Senior Korean Language Instructor",
      image:
        "https://plus.unsplash.com/premium_photo-1661779063350-f9639650ca48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fElUJTIwaW5zdHJ1Y3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      bio: "Specialist in Korean linguistics with a focus on practical speaking and cultural learning.",
    },
    {
      name: "Prof. Sameer Khadka",
      role: "IT & Software Development Trainer",
      image:
        "https://plus.unsplash.com/premium_photo-1661439871999-366c0acbca0e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Experienced IT trainer skilled in web development, programming, and hands-on project guidance.",
    },
    {
      name: "Sarita Thapa",
      role: "Korean Culture & Communication Lecturer",
      image:
        "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fElUJTIwaW5zdHJ1Y3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      bio: "Focuses on Korean communication skills, cultural understanding, and beginner-to-advanced level training.",
    },

     {
      name: " Harish Gautam",
      role: "Senior Korean Language Instructor",
      image:
        "https://images.pexels.com/photos/4960396/pexels-photo-4960396.jpeg",
      bio: "Specialist in Korean linguistics with a focus on practical speaking and cultural learning.",
    },

     {
      name: " ram Sharma",
      role: "Senior Korean Language Instructor",
      image:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      bio: "Specialist in Korean linguistics with a focus on practical speaking and cultural learning.",
    },

     {
      name: " Manisha Gautam",
      role: "Senior Korean Language Instructor",
      image:
        "https://images.pexels.com/photos/9304669/pexels-photo-9304669.jpeg",
      bio: "Specialist in Korean linguistics with a focus on practical speaking and cultural learning.",
    },
  ];

  const stats = [
    { value: "1000", suffix: "+", label: "Students Trained", icon: <Users /> },
    { value: "95", suffix: "%", label: "Success Rate", icon: <Award /> },
    { value: "24", suffix: "/7", label: "App Access", icon: <Smartphone /> },
    { value: "10", suffix: "+", label: "Years of Experience", icon: <BookOpen /> },
  ];

  const achievements = [
    { achievement: "Top Rated Institute in Butwal" },
    { achievement: "Highest EPS Success Rate" },
    { achievement: "Most Advanced Mobile App" },
    { achievement: "Best Student Support System" },
  ];

  const services = [
    { name: "EPS-TOPIK Exam Preparation (UBT & CBT)" },
    { name: "Complete Korean Language Training" },
    { name: "Student Visa Documentation Support" },
    { name: "Free Study Materials & Question Papers" },
    { name: "DOS Mobile App Free Access" },
    { name: "Personalized Doubt Clearing Sessions" },
    { name: "Regular Mock Tests & Assessments" },
    { name: "Korean Cultural Orientation" },
    { name: "Interview Preparation" },
    { name: "Career Guidance for South Korea" },
  ];

  const missionVisionData = [
    {
      title: "Our Mission",
      content:
        "DOS is committed to providing high-quality education in Korean language and IT, offering practical and industry-oriented training, fostering a culture of continuous learning, and preparing students to succeed in a global environment.",
      image:
        "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg",
    },
    {
      title: "Our Vision",
      content:
        "To become a leading center of excellence in Korean language and IT education, empowering students to achieve their personal and professional goals, and bridging the gap between academic learning and industry-ready skills.",
      image:
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-[#003478] to-[#e57f90] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000')] opacity-10 bg-cover"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl ml-2">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5" />
              <span className="text-sm font-semibold">
                Top Institute in Butwal
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Gateway to <span className="text-red-600">South Korea</span>
            </h1>

            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              DOS Korean Language Center specializes in EPS exam preparation and
              student visa counseling. As the premier institute in Butwal, we
              provide comprehensive training for South Korea aspirants through
              both physical and online classes.
            </p>

           
          </div>
        </div>

        <div className="font-medium  relative left-9 bottom-3 flex gap-1 items-center text-white  cursor-pointer">
        <div className=" hover:text-red-500"><FaArrowLeftLong /></div>
          <button
          className="hover:text-red-500"
          onClick={() =>{
            navigate("/")
          }}
          > Home 
          </button> /
          <span className=" underline"> About</span>
        </div>
      </section>



      {/* Stats Section */}
      <section ref={ref} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-white/10 rounded-xl mb-4">
                  <div className="text-red-500">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold mb-2 text-gray-700">
                {
                  inView ? (

                    <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                    />
                  ) :(

                    0
                  )
                }
                </div>
                <div className="text-gray-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Dos */}
      <section>
        <div className=" py-20 bg-linear-to-br from-red-50 to-white px-11">
          <div className=" grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About <span className="text-red-600">DOS Korean</span> Language
                Center
              </h2>

              <div className=" space-y-4 mb-8">
                <p className="text-gray-700 text-lg ">
                  Located at the heart of Butwal in Milan Chowk,{" "}
                  <span className="font-semibold text-red-600">
                    DOS Multi Services
                  </span>
                  has established itself as the leading authority in Korean
                  language education and EPS exam preparation.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  We provide a{" "}
                  <span className="font-semibold">
                    calm and supportive environment
                  </span>{" "}
                  where every student receives personalized attention to help
                  achieve their dreams of studying and working in South Korea.
                </p>

                <div className=" bg-red-50 mt-6 p-6 rounded-r-l border-l-2 border-red-500 ">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-red-700 text-lg mb-2">
                        ✨ Exclusive Offer for All Students
                      </h4>
                      <p className="text-gray-700">
                        Every enrolled student gets{" "}
                        <span className="font-bold text-red-600">
                          FREE access to all question papers
                        </span>
                        via the DOS Mobile App along with complete study
                        materials at no additional cost.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement */}
              <div className=" mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {" "}
                  Our Achievement
                </h3>

                <div className=" grid grid-cols-2 gap-3">
                  {achievements.map((ach, index) => (
                    <div key={index} className=" flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-red-500" />
                      <p className="text-gray-700">{ach.achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className=" relative">
              <div className=" bg-white rounded-2xl shadow-2xl overflow-hidden border border-red-200">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
                    alt="DOS Korean Language Class"
                    className="w-full h-full object-cover "
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-red-900/60 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      Expert-Led Classes
                    </h3>
                    <p className="text-red-100">
                      Learn from certified Korean language experts
                    </p>
                  </div>
                </div>

                <div className=" p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Complete Services
                  </h3>

                  <div className="space-y-4 mb-6">
                    {services.slice(0, 5).map((ser, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="shrink-0 w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">{ser.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-red-600">
                      <MapPin className="w-5 h-5" />
                      <span className="font-semibold">Milan Chowk, Butwal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and vision  */}
      <section className=" py-16 px-8 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Drives Us
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Our core principles and aspirations that guide our educational
            journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 px-3 w-11/12 mx-auto  ">
          {missionVisionData.map((item, index) => (
            <div
              key={index}
              className=" p-4 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-red-200 transition duration-300 cursor-pointer flex flex-col  text-center "
            >
              <div className=" w-full h-64 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover mb-6 rounded-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary mt-5">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed  italic">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>


   {/* Leadership Team */}
      <section className="py-10 ">
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="text-center mb-12 ">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-gray-600">Experienced educators guiding our journey</p>
          </div>
         
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8  m-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="group cursor-pointer rounded-2xl h-80 shadow-sm hover:shadow-slate-300 hover:shadow-2xl transition-transform  duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full m-auto object-cover mt-3"
                  />
                  {/* <div className="h-44 w-40  m-auto rounded-full absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center">{member.name}</h3>
                <p className="text-red-600 font-semibold mb-2 text-center text-sm">{member.role}</p>
                <p className="text-gray-600 ml-3 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


     
    </div>
  );
};

export default About;

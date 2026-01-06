
import { AiOutlineGlobal } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi";
import { IoMdCloudOutline } from "react-icons/io";
import { IoAirplaneOutline } from "react-icons/io5";
import { SiGooglemarketingplatform } from "react-icons/si";
import { TbAlphabetKorean } from "react-icons/tb";


const Program = () => {

const course =[
  {
    name: 'Digital Marketing',
    description: 'Learn how to market online, SEO, social media, and more.',
    icon: <SiGooglemarketingplatform />

  },
  {
    name: 'Web Development',
    description: 'Learn HTML, CSS, JavaScript, React, and build real projects.',
    icon:  <AiOutlineGlobal />
  },
  {
    name: 'Cloud Computing Training',
    description: 'Master cloud platforms, deployment, and cloud infrastructure management.',
    icon: <IoMdCloudOutline />


  },
  {
    name: 'Korean Language Training',
    description: 'Learn Korean language for personal growth, study abroad, or career opportunities.',
    icon: <TbAlphabetKorean />

  },
  {
    name: 'Consulting to Go Abroad',
    description: 'Get expert guidance for studying or working abroad, including visa and documentation support.',
    icon: <IoAirplaneOutline />

  },
  {
    name: 'IT Infrastructure Consultancy',
    description: 'End-to-end IT solutions and maintenance for your company.',
    icon: <HiOutlineHome />

  },
]



  return (
    <div className=' bg-red-50/80 w-full py-16 '>
     <h2 className=" text-sm font-bold text-center text-primary uppercase "> Our Program </h2>
     <h5 className=" text-3xl font-bold text-center "> What we Offer </h5>

    
     
     <div className=' justify-center grid grid-cols-3 gap-3  ml-14  mr-6'>
        {
            course.map((c, index) => (
                <div
                key={index}
                className=' bg-white p-6 rounded-lg shadow-2xl mt-10  border border-transparent    hover:border-red-400 hover:shadow-red-200 transition-all duration-300'
                >
                  <div className="">
                <div className=" text-2xl text-primary mt-0.5 mb-2">{c.icon}</div>
                <h3 className='text-xl font-semibold mb-2 '>{c.name}</h3>

                  </div>
                <p className='text-gray-500 '>{c.description}</p>

                </div>
            ))
        }

     </div>





    </div>
  )
}

export default Program
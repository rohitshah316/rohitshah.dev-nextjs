"use client"
import { FaGoogleScholar } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";
import { FaYoutube, FaMoon, FaMusic } from "react-icons/fa6";
import { GiCoffeeBeans, GiCoffeeCup } from "react-icons/gi";
import { useTheme } from "@/context/ThemeContext";


const About = () => {

  const {theme}=useTheme();

  return (

    <section className={`m-10 ${theme === 'dark' ? "text-white" : "text-black"} max-w-4xl mx-auto px-6 pt-12 pb-20`}>
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="mb-4 text-lg leading-relaxed">
        Hi, I'm Rohit Shah, a <span className='text-gradient font-semibold'>Frontend Engineer</span> specializing in building fast,
        responsive, and production-ready web applications.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        I focus on <span className="font-semibold text-gradient">React, Next.js, and modern JavaScript</span> to develop
        scalable, maintainable applications with clean architecture and strong
        user experience. I've built multiple real-world projects that involve
        dynamic data handling, API integration, and responsive UI design, all
        deployed and optimized for performance.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        I'm comfortable working with component-based architecture, managing
        state efficiently, and writing clean, readable code that can scale in
        real-world environments. Beyond just development, I pay close attention
        to <span className="font-semibold text-gradient">UI/UX, performance, and overall product quality</span>.
      </p>



      <div className="mb-6">
        <h3 className="text-xl font-semibold my-2">What I Can Do:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Build modern web applications using React and Next.js</li>
          <li>Create responsive and user-friendly UI with clean design</li>
          <li>Integrate APIs and handle real-time data</li>
          <li>Write maintainable, scalable, and performance-focused code</li>
          <li>Quickly understand project requirements and deliver solutions</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold my-2">What You Can Expect:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Clear communication</li>
          <li>On-time delivery</li>
          <li>Clean and professional code</li>
          <li>A strong focus on quality and user experience</li>
        </ul>
      </div>

      <p className="text-lg leading-relaxed">
        I'm currently open to <span className="font-semibold text-gradient">remote opportunities and freelance projects</span>,
        and I'm ready to contribute to real-world products from day one.
      </p>




      <h2 className="text-3xl font-bold mb-6 mt-10 flex gap-2 items-center">Education <FaGoogleScholar className='text-gray-400' /></h2>
      <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-slate-200 text-black'} rounded-2xl p-10 transform hover:-translate-y-2 ring ring-cyan-600`}>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 mb-10'>
          <div>
            <h3 className='text-xl font-semibold'>Tribhuvan University</h3>
            <p>Bachelor in Computer Application &#40;BCA&#41;</p>
          </div>
          <span className='bg-cyan-700 font-bold px-3 py-2 rounded-xl text-white'>2024-Current</span>
        </div>
        <hr className='border-gray-700'/>
        <div className='flex flex-col gap-6 md:flex-row justify-between items-center mt-10'>
          <div className=''>
            <h3 className='text-xl font-semibold'>NEB +2</h3>
            <p>Management</p>
          </div>
          <span className='bg-gray-900 font-bold px-3 py-2 rounded-xl text-white'>2022-2024</span>
        </div>

      </div>

      <h2 className="text-3xl font-bold mb-6 mt-10 flex gap-2 items-center">Personal Details <IoMdPerson className='text-gray-400' /></h2>

      <div className={`${theme==='dark'?'bg-gray-800':'bg-gray-50'} px-10 pt-10 pb-4  rounded-2xl transform hover:-translate-y-2 ring ring-cyan-600`}>
        <div className='flex justify-between my-2 md:flex-row flex-col '>
          <span className=''>Full Name</span>
          <h3 className='italic'>Rohit Shah</h3>
        </div>
       <hr className='border-gray-700'/>
        <div className='flex justify-between my-2 md:flex-row flex-col'>
          <span>Role</span>
          <h3 className='italic'>Frontend Developer (React & Next.js)</h3>
        </div>
        <hr className='border-gray-700'/>
        <div className='flex justify-between my-2 md:flex-row flex-col'>
          <span>Location</span>
          <h3 className='italic'>Lalitpur, Nepal</h3>
        </div>
       <hr className='border-gray-700'/>
        <div className='flex justify-between my-2 md:flex-row flex-col'>
          <span>Primary Stack</span>
          <h3 className='italic'>React, Next.js, JS, Tailwind CSS</h3>
        </div>
       <hr className='border-gray-700'/>

        <div className='flex justify-between my-2 md:flex-row flex-col'>
          <span>Experience Level</span>
          <h3 className='italic'>Project-Based Experience</h3>
        </div>
       <hr className='border-gray-700'/>

        <div className='flex justify-between my-2 md:flex-row flex-col'>
          <span>Email</span>
          <h3 type='email' className='italic'><a href="mailto:contact.rohitshah.dev@gmail.com">contact.rohitshah.dev@gmail.com</a></h3>
        </div>
        <hr className='border-gray-700'/>

        <div className='flex justify-between my-2 md:flex-row flex-col'>
          <span className='text-green-500'>Availability</span>
          <h3 className='italic text-green-400 font-semibold'>Open to Remote & Freelance Opportunities</h3>
        </div>
        <hr className='border-gray-700'/>

        <div className='flex justify-between my-2 md:flex-row flex-col'>
          <span>Languages</span>
          <h3 className='italic'>English, Nepali</h3>
        </div>
      
      </div>

      {/* Fun Fact Section */}
      <h2 className="text-3xl font-bold mb-6 mt-10 flex gap-2 items-center">
        Fun Fact <FaLightbulb className='text-yellow-400' />
      </h2>

      <div className={`${theme==='dark'?'bg-gray-800':'bg-slate-100'} px-10 py-6 rounded-2xl transform hover:-translate-y-2 ring ring-cyan-600 `}>
  
  <p className="text-lg leading-relaxed  md:flex items-center gap-2 mb-4">
    <GiCoffeeCup className={`${theme==='dark'?'text-red-600':'text-red-950'}`} /> Fan of both Tea and Coffee. But <span className="font-semibold text-gradient">Tea over Coffee, always.</span> 
  </p>
  <hr className="border-gray-700 mb-4" />
  <p className="text-lg leading-relaxed md:flex items-center gap-2 mb-4">
    <FaMoon className="text-indigo-400" /> I do my best coding <span className="font-semibold text-gradient">after midnight.</span>
  </p>
  <hr className="border-gray-700 mb-4" />
  <p className="text-lg leading-relaxed md:flex items-center gap-2 mb-4">
    <FaMusic className="text-pink-400" /> I love <span className="font-semibold text-gradient">playing guitar</span> in my leisure time.
  </p>
    <hr className="border-gray-700 mb-4" />
  <p className="text-lg leading-relaxed md:flex items-center gap-2">
    <FaGoogleScholar className="text-cyan-600" /> My classmate name is<span className="font-semibold text-gradient"> Alex</span> and <span className="font-semibold text-gradient">Alex</span> is <span className='text-gradient font-semibold'>smart!</span>
  </p>

</div>

    </section>
  )
}

export default About
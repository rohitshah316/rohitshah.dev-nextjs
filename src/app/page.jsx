"use client"
import { FaReact } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md"
import { RiNextjsFill } from "react-icons/ri";
import Button from '../components/common/Button'
import TextType from '../components/common/TextType';
import TiltedCard from '../components/common/TiltedCard'

const Home = () => {

  return (
    <section className={`flex md:flex-row flex-col justify-around items-center w-full my-15 text-black font-mono`}>
      <div className='flex w-[50%] gap-3 items-center justify-center'>
        <div>

        <h2 className='font-bold text-4xl hover:scale-110 font-mono'>I'm Rohit Shah</h2>
       
      

<TextType
  text={[
    "Frontend Engineer",
    "React & Next.js",
    "Web App Builder"
  ]}
  typingSpeed={45}
  deletingSpeed={45}
  pauseDuration={1000}
  showCursor
  cursorCharacter="|"
  cursorBlinkDuration={0.5}
  className="font-bold text-3xl text-blue-400 hover:scale-110 font-mono text-wrap w-87.5"
/>
        

      <div className='flex gap-2'>

        <Button text={<>Resume <TbFileCv className='text-2xl'/></>} href='/resume/rohit-shah-resume.pdf' className='-ml-1 mt-2 bg-blue-500 hover:bg-blue-600 text-white hover:-translate-y-0.5 active:translate-y-0 w-35 ring-cyan-300 font-sans' target="_blank"/>
        <Button text='Contact Me' className='hover:-translate-y-0.5 active:translate-y-0 mt-2 w-35 ring-red-400 font-sans bg-red-500 hover:bg-red-600 text-white' target="_blank" href="mailto:contact.rohitshah.dev@gmail.com?subject=Opportunity&body=Hi Rohit,"/>
      </div>
      {/* <div className='text-4xl flex gap-2 mt-3 ml-10'>
              <a href="https://github.com/rohitshah316" target='_blank' className='hover:text-gray-400 hover:scale-110'><FaGithub/></a>
              <a href="https://linkedin.com/in/rohitshah316" target='_blank' className='hover:text-gray-400 hover:scale-110'><FaLinkedin/></a>
              <a href="mailto:contact.rohitshah.dev@gmail.com" target='_blank' className='hover:text-gray-400 hover:scale-110'><MdEmail/></a>
            </div> */}
        </div>



      </div>


      <div className='w-[50%] mt-10 flex flex-col items-center'>
        {/* <img src="/profile/profile.jpeg" alt="" className='rounded-[50%] w-100 h-100 ring-5 ring-red-700 shadow-lg hover:shadow-cyan-800 hover:scale-110'/> */}
       
         <TiltedCard
  imageSrc="/profile/profile.jpeg"
  altText="Rohit Shah - Frontend Engineer"
  captionText="Frontend Engineer"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={6}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip

/>

        <h2 className='text-gradient font-bold text-4xl py-5'>Rohit Shah</h2>
      </div>


        {/* Pinned Projects  */}
      <div>

      </div>
    </section>
  )
}

export default Home
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
import GithubContributions from "@/components/GithubContributions/GithubContributions";

import {useTheme} from '@/context/ThemeContext'

const Home = () => {

  const {theme}=useTheme();
  return (
    <section>
      <div className={`flex md:flex-row flex-col justify-around items-center w-full my-15 ${theme==='dark'?'text-white':'text-black'} font-mono`}>
        <div className='flex w-[50%] gap-3 items-center justify-center'>
          <div className="text-center">

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


            <div className='md:flex gap-2 hidden ml-8'>

              <Button text={<>Resume <TbFileCv className='text-2xl' /></>} href='/resume/rohit-shah-resume.pdf' className='-ml-1 mt-2 bg-blue-500 hover:bg-blue-600 text-white hover:-translate-y-0.5 active:translate-y-0 w-35 ring-cyan-300 font-sans' target="_blank" />
              <Button text='Contact Me' className='hover:-translate-y-0.5 active:translate-y-0 mt-2 w-35 ring-red-400 font-sans bg-red-500 hover:bg-red-600 text-white' target="_blank" href="mailto:contact.rohitshah.dev@gmail.com?subject=Opportunity&body=Hi Rohit," />
            </div>
            {/* <div className='text-4xl flex gap-2 mt-3 ml-10'>
              <a href="https://github.com/rohitshah316" target='_blank' className='hover:text-gray-400 hover:scale-110'><FaGithub/></a>
              <a href="https://linkedin.com/in/rohitshah316" target='_blank' className='hover:text-gray-400 hover:scale-110'><FaLinkedin/></a>
              <a href="mailto:contact.rohitshah.dev@gmail.com" target='_blank' className='hover:text-gray-400 hover:scale-110'><MdEmail/></a>
            </div> */}
          </div>



        </div>


        <div className='w-[50%] mt-10 flex flex-col items-center'>
        

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

          <h2 className='text-gradient font-bold text-3xl md:text-4xl py-5'>Rohit Shah</h2>
        </div>
      </div>
<div className='md:hidden gap-2 flex flex-col mx-10 -mt-10 mb-10'>

              <Button text={<>Resume <TbFileCv className='text-2xl' /></>} href='/resume/rohit-shah-resume.pdf' className='w-full   bg-blue-500 hover:bg-blue-600 text-white hover:-translate-y-0.5 active:translate-y-0 ring-cyan-300 font-sans' target="_blank" />
              <Button text='Contact Me' className='hover:-translate-y-0.5 active:translate-y-0 mt-2 w-full  ring-red-400 font-sans bg-red-500 hover:bg-red-600 text-white' target="_blank" href="mailto:contact.rohitshah.dev@gmail.com?subject=Opportunity&body=Hi Rohit," />
            </div>

      <div className="max-w-4xl mx-auto" >
        <h2 className={`text-3xl font-bold mx-5 mb-5 ${theme==='dark'?'text-white':'text-black'}`}>GitHub Contributions</h2>
        <GithubContributions />


        <Button text={<>Visit Github <FaGithub className="text-2xl ml-2 "/></>} className="ring-cyan-600 mx-auto w-[60%] mt-10 bg-blue-700 text-white hover:-translate-y-0.5 hover:bg-blue-800" href='https://www.github.com/rohitshah316' target="_blank"/>
      </div>
      {/* Pinned Projects  */}
      <div>

      </div>
    </section>
  )
}

export default Home
import { FaReact } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md"
import { RiNextjsFill } from "react-icons/ri";

const Home = () => {

  return (
    <section className={`flex md:flex-row flex-col justify-around items-center w-full my-15 text-black font-mono`}>
      <div className='flex gap-3 items-center'>
        <div>

        <h2 className='font-bold text-4xl hover:scale-110 font-mono'>I'm Rohit Shah</h2>
        <p className='font-bold text-3xl text-red-700 hover:scale-110 font-mono'>Frontend Engineer</p>

      <div className='flex gap-2'>

        {/* <Button text={<>Resume <TbFileCv className='text-2xl'/></>} href='/rohit-shah-resume.pdf' className='mt-2 bg-red-500 hover:bg-red-600 text-white hover:scale-110 active:scale-100' target="_blank"/>
        <Button text='Contact Me' className='hover:scale-110 active:scale-100 mt-2 bg-blue-500 hover:bg-blue-600 text-white' target="_blank" href="mailto:contact.rohitshah.dev@gmail.com?subject=Opportunity&body=Hi Rohit,"/> */}
      </div>
      <div className='text-4xl flex gap-2 mt-3 ml-10'>
              <a href="https://github.com/rohitshah316" target='_blank' className='hover:text-gray-400 hover:scale-110'><FaGithub/></a>
              <a href="https://linkedin.com/in/rohitshah316" target='_blank' className='hover:text-gray-400 hover:scale-110'><FaLinkedin/></a>
              <a href="mailto:contact.rohitshah.dev@gmail.com" target='_blank' className='hover:text-gray-400 hover:scale-110'><MdEmail/></a>
            </div>
        </div>

<FaReact className=' text-6xl md:text-8xl text-cyan-400 animate-spin hover:scale-120' style={{animationDuration:'5s'}}/>
<RiNextjsFill  className="text-black text-6xl md:text-8xl hover:scale-120"/>

      </div>


      <div className='w-80 mt-10 flex flex-col items-center'>
        <img src="https://avatars.githubusercontent.com/u/213147181?v=4" alt="" className='rounded-[50%] ring-5 ring-red-700 shadow-lg hover:shadow-cyan-800 hover:scale-110'/>
        <h2 className='text-gradient font-bold text-4xl py-5'>Rohit Shah</h2>
      </div>
    </section>
  )
}

export default Home
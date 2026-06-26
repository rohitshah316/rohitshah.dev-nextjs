import { projects } from '../../data/projects'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export const metadata={
  title:"Projects"
};

const Projects = () => {

   const theme='light'
  return (
    <section className={`${theme==='dark'?'text-white':'text-black'} mt-10 mx-auto max-w-4xl pt-12 pb-20 px-6`}>
            <h2 className='text-3xl font-bold mb-6'>Projects</h2>

            <div className='grid grid-cols-1 md:grid-cols-2  gap-6'>
                    {projects.map(project=>(
                        <div key={project.id}
                        className={`${theme==='dark'?'bg-gray-800':'bg-blue-100'} p-6 rounded-2xl ring ring-cyan-600 flex flex-col gap-2 transform hover:-translate-y-2`}
                        >
                        <img src={project.thumbnail} alt={project.title} className='rounded-xl transform hover:scale-150 ring ring-cyan-300'/>
                        <h3 className='font-bold'>{project.title}</h3>
                        <p className='text-sm'>{project.description}</p>
                        <ul className='space-y-2'>
                            {project.tech.map((stack,i)=>(
                                <li key={i} className='text-white bg-gray-500 inline-block p-1 m-1 rounded text-sm cursor-pointer hover:bg-gray-600'>{stack}</li>
                            ))}
                        </ul>

                        <div className='flex justify-between'>
                            <a href={project.github} target='_blank' className='text-red-500 font-semibold transform hover:translate-x-2'>Source Code</a>
                            <a href={project.demo} target='_blank' className='text-green-400 transform hover:translate-x-2 font-semibold flex justify-center '>
                                <span>Live Demo</span>
                                <FaRegArrowAltCircleRight className='relative top-1.5 right-0 transform hover:translate-x-2'/>
                                </a>
                        </div>
                        </div>
                    ))}
            </div>
    </section>
  )
}

export default Projects
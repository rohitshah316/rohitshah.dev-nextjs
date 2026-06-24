import React, { useContext } from 'react'
import { skills } from '../../data/skills'

const Skills = () => {


    
  return (
        <section className={`text-black mt-10 max-w-4xl mx-auto px-6 pt-12 pb-20`}>
            <h2 className='text-3xl font-bold mb-6'>Skills and Tech Stack</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                {skills.map((category)=>(
                    <div key={category.id} 
                    className={` bg-blue-100 text-black rounded-xl p-5 ring ring-cyan-600 transform hover:-translate-y-2`}
                    >
                        <h3 className={`text-xl font-semibold mb-3`}>{category.title}</h3>
                        <ul className={`space-y-2`}>
                            {category.skills.map(skill=>(
                                <li key={skill} className={`bg-gray-500 px-3 py-1 inline-block m-1 rounded hover:bg-gray-600 cursor-pointer text-white`}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
  );
};

export default Skills;

"use client"

import { useTheme } from '@/context/ThemeContext';
import dynamic from 'next/dynamic';


const GitHubCalendar=dynamic(()=>import("react-github-calendar").then((mod)=>mod.GitHubCalendar),{ssr:false});

const GithubContributions = () => {

  const {theme}=useTheme();
  return (
    <div className={`m-5 md:m-0 flex flex-col justify-center items-center gap-8 px-4  ${theme==='dark'?'bg-slate-600':'bg-slate-200'} p-10 rounded-2xl ring ring-cyan-400 hover:-translate-y-2`}>
        
       <div className="w-full overflow-x-auto flex-justify-center">
        <div className="min-w-[320px] sm:min-w-150">
             <div className={` ${theme==='dark'?'bg-slate-400':'bg-slate-300'} p-2 rounded`}>
              <GitHubCalendar 
        username="rohitshah316"
        colorScheme={theme}
        />
             </div>
        </div>
       </div>

<div className='flex flex-col sm:flex-row flex-wrap max-w-4xl gap-2'>
            <img
  src="https://github-readme-stats.vercel.app/api?username=rohitshah316&show_icons=true"
  alt="GitHub Stats"
  width={350}
 
/>

<img
  src="https://github-readme-streak-stats.herokuapp.com/?user=rohitshah316&"
  alt="GitHub Streak"
  width={370}
 
/>
</div>
    </div>
  )
}

export default GithubContributions
"use client"

import dynamic from 'next/dynamic';


const GitHubCalendar=dynamic(()=>import("react-github-calendar").then((mod)=>mod.GitHubCalendar),{ssr:false});

const GithubContributions = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 px-4 w-full'>
        
       <div className="w-full overflow-x-auto flex-justify-center">
        <div className="min-w-[320px] sm:min-w-150">
             <GitHubCalendar
        username="rohitshah316"
        colorScheme="light"
        />
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
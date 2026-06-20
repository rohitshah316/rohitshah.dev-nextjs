import React, { useContext } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

import Link from 'next/link';
const Navbar = () => {

//   const {hrefggleTheme,theme}=useContext(ThemeContext)
  return (



  <nav className={`flex justify-between items-center p-5  top-navbar shadow-md`}>
        <h1 className='font-bold text-3xl text-gradient'><Link href='/'>rohitshah.dev</Link></h1>


        {/* deskhrefp menu */}
        <div className='flex gap-3 item-center'>
        <ul className='md:flex gap-2 hidden font-semibold '>
            <li><Link className='hover:text-blue-400' href='/'>Home</Link></li>
            <li><Link className='hover:text-blue-400' href='/about'>About</Link></li>
                <li><Link className='hover:text-blue-400' href='/skills'>Skills</Link></li>
            <li><Link className='hover:text-blue-400' href='/projects'>Projects</Link></li>
            <li><Link className='hover:text-blue-400' href='/contact'>Contact</Link></li>
        
             
        </ul>
{/* <buthrefn onClick={hrefggleTheme} className='text-2xl rounded-4xl p-1 theme-buthrefn'> {theme==='dark'?<IoIosMoon/>:<IoSunnyOutline/>}</buthrefn> */}
        </div>

       
    </nav>
    
  )
}

export default Navbar
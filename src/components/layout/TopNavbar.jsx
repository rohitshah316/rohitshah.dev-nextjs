"use client"
import React, { useContext } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { BsFillSunFill } from 'react-icons/bs';
const Navbar = () => {

  const {toggleTheme,theme}=useTheme();
  return (



  <nav className={`flex justify-between items-center p-5  top-navbar ${theme==='dark'?'text-white':'text-black'} shadow-md`}>
        <h1 className='font-bold text-3xl text-gradient'><Link href='/'>rohitshah.dev</Link></h1>


        {/* desktop menu */}
        <div className='flex gap-3 item-center'>
        <ul className='md:flex gap-2 hidden font-semibold '>
            <li><Link className='hover:text-blue-400' href='/'>Home</Link></li>
            <li><Link className='hover:text-blue-400' href='/about'>About</Link></li>
                <li><Link className='hover:text-blue-400' href='/skills'>Skills</Link></li>
            <li><Link className='hover:text-blue-400' href='/projects'>Projects</Link></li>
            <li><Link className='hover:text-blue-400' href='/contact'>Contact</Link></li>
        
             
        </ul>
<button onClick={toggleTheme} className='text-2xl rounded-4xl bg-slate-600  p-1'> {theme==='dark'?<BsFillSunFill className='text-amber-400 font-bold'/>:<IoIosMoon className='text-white'/>}</button>
        </div>

       
    </nav>
    
  )
}

export default Navbar
"use client"
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { IoIosRocket } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import Link from 'next/link'
import { useTheme } from "@/context/ThemeContext";
import {usePathname} from 'next/navigation'



const BottomNavbar = () => {

  const {theme}=useTheme();
  const pathname=usePathname();

  return (
    
    <nav className='fixed left-1/2 -translate-x-1/2 bottom-4 bottom-navbar'>
        <ul className={`flex gap-6   ring ring-blue-500 rounded-4xl justify-center items-center m-5 text-2xl p-5 shadow-lg ${theme==='dark'?'bg-gray-950 text-white shadow-cyan-400/50 ':'bg-gray-300 shadow-cyan-800/50 text-black'} `}>
                    <li className={`${pathname==='/'?'active':'opacity-40'}`}><Link href='/'><FaHome /></Link></li>
                    <li className={`${pathname==='/about'?'active':'opacity-40'}`}><Link  href='/about'><IoMdPerson/></Link></li>
                    <li className={`${pathname==='/skills'?'active':'opacity-40'}`}><Link href='/skills'><IoIosRocket /></Link></li>
                    <li className={`${pathname==='/projects'?'active':'opacity-40'}`}><Link href='/projects'><GrProjects /></Link></li>
                    
                    <li className={`${pathname==='/contact'?'active':'opacity-40'}`}><Link href='/contact'><FaPhone /></Link></li>
                </ul>
    </nav>
  )
}

export default BottomNavbar
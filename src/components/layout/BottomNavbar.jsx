import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { IoIosRocket } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import Link from 'next/link'

const BottomNavbar = () => {

  return (
    
    <nav className='fixed left-1/2 -translate-x-1/2 bottom-4 bottom-navbar'>
        <ul className={`flex gap-6 rounded-4xl justify-center items-center m-5 text-2xl p-5 shadow-lg bg-gray-300 shadow-cyan-800/50 text-black  `}>
                    <li><Link href='/'><FaHome /></Link></li>
                    <li><Link  href='/about'><IoMdPerson/></Link></li>
                    <li><Link href='/skills'><IoIosRocket /></Link></li>
                    <li><Link href='/projects'><GrProjects /></Link></li>
                    
                    <li><Link href='/contact'><FaPhone /></Link></li>
                </ul>
    </nav>
  )
}

export default BottomNavbar
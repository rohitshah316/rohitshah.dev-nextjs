import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <footer className='text-white h-50 bg-gray-700 mt-25 flex flex-col md:justify-center p-5'>
      <p>&copy; All Right Reserved By <Link href="https://rohitshah.dev" className='text-blue-400'>rohitshah.dev</Link></p>
      <div className='text-2xl flex gap-2 mt-2'>
        <Link href="https://github.com/rohitshah316" target='_blank' className='hover:text-gray-400'><FaGithub/></Link>
        <Link href="https://linkedin.com/in/rohitshah316" target='_blank' className='hover:text-gray-400'><FaLinkedin/></Link>
        <Link href="mailto:contact.rohitshah.dev@gmail.com" target='_blank' className='hover:text-gray-400'><MdEmail/></Link>
      </div>
    </footer>
  )
}

export default Footer
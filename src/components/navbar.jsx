import React from 'react'
import { Link } from 'react-scroll'


const Navbar = () => {
  return (
    <nav className="bg-white  shadow-md w-full h-14 place-content-center">
    <div className="flex justify-between">
      <div className="flex ml-12">
        <h1 className="text-xl font-semibold">Portfolio</h1>
        <p className="text-xl font-[1000] text-green-700">.</p>
      </div>

      <div className="flex space-x-6 mr-8">
        <Link to="home"
         smooth={true}
         duration={500}
        className="hover:text-blue-400 cursor-pointer">
         Home
        </Link>
        <Link to="about"
         smooth={true}
         duration={600}
        className="hover:text-blue-400 cursor-pointer">
          About
        </Link>

        <Link to="skills"
         smooth={true}
         duration={700}
        className="hover:text-blue-400 cursor-pointer">
         Skills
        </Link>
        <Link to="projects"
         smooth={true}
         duration={500}
        className="hover:text-blue-400 cursor-pointer">
          Projects
        </Link>
        <Link to="experience"
         smooth={true}
         duration={500}
        className="hover:text-blue-400 cursor-pointer">
          Experience
        </Link>
        
      </div>
    </div>
  </nav>
  )
}

export default Navbar
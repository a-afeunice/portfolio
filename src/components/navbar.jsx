import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react'; // You can use an icon library

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full h-14 fixed z-10">
      <div className="flex justify-between items-center px-4 lg:px-12 h-full">
        
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">Portfolio</h1>
          <p className="text-xl font-bold text-green-700">.</p>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-6 mr-8">
          <Link to="home" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth={true} duration={600} className="hover:text-blue-400 cursor-pointer">
            About
          </Link>
          <Link to="skills" smooth={true} duration={700} className="hover:text-blue-400 cursor-pointer">
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={800} className="hover:text-blue-400 cursor-pointer">
            Projects
          </Link>
          <Link to="experience" smooth={true} duration={800} className="hover:text-blue-400 cursor-pointer">
            Experience
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleNav} className="focus:outline-none">
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="lg:hidden bg-white shadow-md w-full absolute top-14 left-0 z-10">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={toggleNav}
                className="hover:text-blue-400 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={600}
                onClick={toggleNav}
                className="hover:text-blue-400 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={700}
                onClick={toggleNav}
                className="hover:text-blue-400 cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={800}
                onClick={toggleNav}
                className="hover:text-blue-400 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={800}
                onClick={toggleNav}
                className="hover:text-blue-400 cursor-pointer"
              >
                Experience
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

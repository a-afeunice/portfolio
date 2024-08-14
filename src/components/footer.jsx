import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-6'>
      <div className='max-w-6xl mx-auto flex flex-col items-center'>
        <div className='flex space-x-6 mb-4'>
          <a href='https://github.com/a-afeunice' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>
            <FaGithub size={24} />
          </a>
          <a href='https://www.linkedin.com/in/euniceafrifa' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>
            <FaLinkedin size={24} />
          </a>
          <a href='https://twitter.com/lady_afrifa' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>
            <FaTwitter size={24} />
          </a>
          <a href='https://www.instagram.com/eunice_afrifa' target='_blank' rel='noopener noreferrer' className='hover:text-gray-400'>
            <FaInstagram size={24} />
          </a>
        </div>
        <p className='text-sm'>&copy; {new Date().getFullYear()} Eunice Afrifa. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

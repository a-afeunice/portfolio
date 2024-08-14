import React from 'react'
import { about } from '../../../assets'

const About = () => {
  return (
    <div id='about' className='border-b border-neutral-900 pb-4  '>
      <h1 className='my-20 text-center text-4xl'>
        About
        <span className='text-neutral-500'> Me</span>
      </h1>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img className='rounded-md w-[500px]' src={about} alt="" />
          </div> 
        </div>
        <div className='w-full lg:w-1/2'>
        <div className='flex justify center lg:justify-start'>
          <p className='my-2 max-w-xl py-6'> I'm a frontend developer with a unique background in accounting, combining a keen eye for detail with a passion for crafting intuitive and visually appealing web experiences. My journey from numbers to code has equipped me with a strong analytical mindset and problem-solving skills, essential for creating seamless user interfaces and dynamic web applications. Currently immersed in modern web technologies like React and Tailwind CSS, I'm dedicated to leveraging my diverse skills to build innovative solutions that meet both user needs and business objectives.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
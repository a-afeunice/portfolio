import React from 'react'
import { beauty, event, interior, not, restaurant } from '../../../assets'

const projectsData = [
  {
    title: 'Vees Palace',
    image: restaurant, 
    description: 'The first website I created after a  week in the program was a restaurant website.',
    technologies: [ 'HTML', 'CSS'],
  },
  {
    title: 'Jarev Beauty Studio',
    image: beauty, 
    description: 'A personal website built on any area of interest.',
    technologies: ['HTML', 'CSS', ],
  },
  {
    title: 'Elegance',
    image: interior, 
    description: 'An interior decor website.',
    technologies: ['React', 'Tailwind CSS', ],
  },
  {
    title: 'Event',
    image: event, 
    description: 'An event management website built in groups .',
    technologies: ['React', 'Tailwind CSS', ],
  },
  {
    title: 'Not Found',
    image: not, 
    description: 'Contributed to the Not Found page on a team website',
    technologies: ['React', 'Tailwind CSS'],
  },
]

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>Projects</h1>

      <div>
      {projectsData.map((projectsData, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
           <div className='w-full lg:w-1/4'>
           <img 
           src={projectsData.image} width={250} height={250} 
           alt={projectsData.title} className='mb-6 rounded' />
           </div>
           <div className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold'>{projectsData.title}</h6>
            <p className='mb-4 text-neutral-400'>{projectsData.description}</p>
            {projectsData.technologies.map((tech, index) =>(
              <span key={index}
              className='mr-2 rounded bg-purple-200 px-2 py-1 text-sm font medium '>
                {tech}
              </span>
            ))}
           </div>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Projects
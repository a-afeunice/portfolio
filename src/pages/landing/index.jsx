import React from 'react'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Experience from './components/experience'
import Contact from './components/contact'

const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <About />
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
        
    </div>
  )
}

export default LandingPage
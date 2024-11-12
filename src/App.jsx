import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './index.css'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (

    
    
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-blue-300 selection:text-cyan-900'>

      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-black"></div>
      </div>
      <div className='container mx-auto py-4'>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App

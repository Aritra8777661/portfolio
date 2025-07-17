import { useState } from 'react'
import './App.css'
import PortfolioNavbar from './components/Navbar/Navbar'
import Hero from './components/Hero'
import About from './components/About/About'
import Projects from './components/Project/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <PortfolioNavbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App

import React from 'react'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Contacts  from "./Components/Contacts"
import Skills  from "./Components/Skills"
import About from "./Components/About"


const App = () => {
  return (
    <div className='bg-[#0e0c1e]'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contacts />
      

    </div>
  )
}

export default App
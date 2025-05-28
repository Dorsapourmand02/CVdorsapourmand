import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Header from './Component/Header/Header'
import Skills from './Component/Skills/Skills'
import Education from './Component/Education/Education'
import Experience from './Component/Experience/Experience'
import Projects from './Component/Projects/Projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <Skills />
      <Education />
      <Experience />
      <Projects />
    </>
  )
}

export default App

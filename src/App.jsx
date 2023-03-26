import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Hero from './components/Hero'
import Fqs from './components/Fqs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Carousel />
      <Hero />
      <Fqs />
      </div>
      
    </div>
  )
}

export default App

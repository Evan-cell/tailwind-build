import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Carousel />
      </div>
      
    </div>
  )
}

export default App

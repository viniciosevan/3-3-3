import { useState } from 'react'
import './App.css'

// PAGES

import Navbar from './components/Navbar';
import Presentation from './components/Presetantion';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Grid from './components/Grid';



function App() {
  const [count, setCount] = useState(0)

  return (

    
    <>
    <Navbar/>
    <Presentation/>
    <Grid/>
    <Timeline/>
    <Footer/>
   
    
      
    </>
  )
}

export default App

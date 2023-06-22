import React from 'react'
import '../src/css_files/grid.css'

import AboutComponent from '../components/AboutComponent'
import Skills from '../components/Skills'
import Weather from '../components/Weather'

const Home: React.FC = (): JSX.Element => {
  return (
    <>
        <div className = "main-grid">
          <AboutComponent/>   
          <Skills/> 
          <Weather/> 
        </div>
    </>
  )
}

export default Home
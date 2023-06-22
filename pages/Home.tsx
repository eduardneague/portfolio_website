import React from 'react'
import '../src/css_files/grid.css'

import AboutComponent from '../components/AboutComponent'
import Skills from '../components/Skills'

const Home: React.FC = (): JSX.Element => {
  return (
    <>
        <div className = "main-grid">
          <AboutComponent/>   
          <Skills/> 
          
        </div>
    </>
  )
}

export default Home
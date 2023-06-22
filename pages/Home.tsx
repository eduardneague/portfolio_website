import React from 'react'
import '../src/css_files/grid.css'

import AboutComponent from '../components/AboutComponent'

const Home: React.FC = (): JSX.Element => {
  return (
    <>
        <div className = "main-grid">
          <AboutComponent/>   
          
        </div>
    </>
  )
}

export default Home
import React from 'react'
import '../src/css_files/grid.css'

import AboutComponent from '../components/AboutComponent'
import Skills from '../components/Skills'
import Weather from '../components/Weather'
import GitHubCard from '../components/GitHubCard'
import LinkedInCard from '../components/LinkedInCard'
import JapaneseStats from '../components/JapaneseStats'
import SpotifyCard from '../components/SpotifyCard'

const Home: React.FC = (): JSX.Element => {
  return (
    <>
        <div className = "main-grid">
          <AboutComponent/>   
          <Skills/> 
          <Weather/> 
          <JapaneseStats/> 
          <SpotifyCard/> 
          <GitHubCard/> 
          <LinkedInCard/> 
        </div>
    </>
  )
}

export default Home
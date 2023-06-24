import React from 'react'
import CustomButton from '../components/CustomButton'
import {Link} from 'react-router-dom'

import '../src/css_files/cardLogoAnimation.css'

const GitHubCard: React.FC = (): JSX.Element => {
  return (
    <Link 
        to = 'https://github.com/eduardneague' 
        target = "_blank"
        className = "github-card shadow-lg bg-black w-[22rem] h-[15rem] rounded-3xl flex justify-center items-center relative cursor-pointer"
    >
        <img src="github_logo.png" alt="GitHub Image" className = "animated-logo aspect-square object-fit w-24"/>
        <CustomButton 
            colors = {['black', 'gray-500']} 
            text = 'GitHub' 
            link = 'https://github.com/eduardneague' 
            absolute = {[true, 78, 0, 0, 63]}
            newPage = {true}
            />
    </Link>
  )
}

export default GitHubCard
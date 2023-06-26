import React from 'react'
import CustomButton from '../components/CustomButton'
import {Link} from 'react-router-dom'

import '../src/css_files/cardLogoAnimation.css'
import '../src/css_files/grid.css'

const LinkedInCard: React.FC = (): JSX.Element => {
  return (
    <Link 
        to = 'https://www.linkedin.com/in/eduardneague/' 
        target = "_blank"
        className = "linkedin-card shadow-lg bg-linkedin-blue w-full h-full min-h-[15rem] rounded-3xl flex justify-center items-center relative cursor-pointer"
    >
        <img src="linkedin_logo.png" alt="LinkedIn Logo" className = "animated-logo aspect-square object-fit w-24"/>
        <CustomButton 
            colors = {['linkedin-blue', 'linkedin-light-blue']} 
            text = 'LinkedIn' 
            link = 'https://www.linkedin.com/in/eduardneague/' 
            absolute = {[true, 0, 0, 0, 0]}
            newPage = {true}
            />
    </Link>
  )
}

export default LinkedInCard
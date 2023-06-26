import React from 'react'
import {Link} from 'react-router-dom'

import '../src/css_files/cardLogoAnimation.css'
import '../src/css_files/grid.css'

const LinkedInCard: React.FC = (): JSX.Element => {
  return (
    <Link 
        to = 'https://www.linkedin.com/in/eduardneague/' 
        target = "_blank"
        className = "linkedin-card shadow-lg bg-linkedin-blue w-full h-full min-h-[15rem] md:min-h-[0rem] rounded-3xl flex justify-center items-center relative cursor-pointer"
    >
        <img src="linkedin_logo.png" alt="LinkedIn Logo" draggable = "false" className = "animated-logo aspect-square object-fit w-24"/>
    </Link>
  )
}

export default LinkedInCard
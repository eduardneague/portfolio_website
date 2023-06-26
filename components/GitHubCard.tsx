import React from 'react'
import {Link} from 'react-router-dom'

import '../src/css_files/grid.css'


import '../src/css_files/cardLogoAnimation.css'

const GitHubCard: React.FC = (): JSX.Element => {
  return (
    <Link 
        to = 'https://github.com/eduardneague' 
        target = "_blank"
        className = "github-card shadow-lg bg-black w-full h-full min-h-[15rem] md:min-h-[0rem] rounded-3xl flex justify-center items-center relative cursor-pointer"
    >
        <img src="github_logo.png" alt="GitHub Image" draggable = "false" className = "animated-logo aspect-square object-fit w-24"/>
    </Link>
  )
}

export default GitHubCard
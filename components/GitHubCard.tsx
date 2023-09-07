import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

import '../src/css_files/grid.css'
import '../src/css_files/cardLogoAnimation.css'

const GitHubCard: React.FC = (): JSX.Element => {
  return (
    <motion.div 
    initial = {{opacity: 0, y: '300px'}}
    animate = {{opacity: 1, y: 0}}
    transition ={{delay: .35, duration: .5, ease: 'easeOut'}}
    className = "h-full min-h-[15rem] md:min-h-[0rem] github-card w-full">
      <Link 
          to = 'https://github.com/eduardneague' 
          target = "_blank"
          className = "shadow-lg bg-black w-full h-full min-h-[15rem] md:min-h-[0rem] rounded-3xl flex justify-center items-center relative cursor-pointer"
      >
          <img src="/github_logo.png" alt="GitHub Image" draggable = "false" className = "animated-logo aspect-square object-fit w-24"/>
      </Link>
    </motion.div>
  )
}

export default GitHubCard
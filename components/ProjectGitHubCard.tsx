import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

import '../src/css_files/projects-grid.css'
import '../src/css_files/cardLogoAnimation.css'

const ProjectGitHubCard: React.FC = (): JSX.Element => {
  return (
    <motion.div 
    initial = {{opacity: 0, y: '300px'}}
    animate = {{opacity: 1, y: 0}}
    transition ={{delay: .35, duration: .5, ease: 'easeOut'}}
    className = "h-full project-github-card w-full">
      <Link 
          to = 'https://github.com/eduardneague' 
          target = "_blank"
          className = "shadow-lg bg-black w-full h-full rounded-3xl flex justify-center gap-4 items-center relative cursor-pointer"
      >
        <img src="/github_logo.png" alt="GitHub Image" draggable = "false" className = "project-github-card-image animated-logo aspect-square object-fit w-16"/>
        <h1 className = "project-github-card-text text-white font-[Poppins] font-bold text-xl max-w-[13rem] sm:max-w-[14rem]">In case you missed it, here's my GitHub!</h1>
      </Link>
    </motion.div>
  )
}

export default ProjectGitHubCard
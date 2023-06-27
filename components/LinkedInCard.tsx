import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

import '../src/css_files/cardLogoAnimation.css'
import '../src/css_files/grid.css'

const LinkedInCard: React.FC = (): JSX.Element => {
  return (
    <motion.div 
    initial = {{opacity: 0, y: '300px'}}
    animate = {{opacity: 1, y: 0}}
    transition ={{delay: .25, duration: .5, ease: 'easeOut'}}
    className = "h-full min-h-[15rem] md:min-h-[0rem] linkedin-card w-full">
      <Link 
          to = 'https://www.linkedin.com/in/eduardneague/' 
          target = "_blank"
          className = "shadow-lg bg-linkedin-blue w-full h-full min-h-[15rem] md:min-h-[0rem] rounded-3xl flex justify-center items-center relative cursor-pointer"
          >
          <img src="linkedin_logo.png" alt="LinkedIn Logo" draggable = "false" className = "animated-logo aspect-square object-fit w-[4.5rem] "/>
        </Link>
    </motion.div>
  )
}

export default LinkedInCard
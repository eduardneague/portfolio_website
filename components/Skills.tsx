import React from 'react'
import {motion} from 'framer-motion'

import SkillSquare from '../components/SkillSquare'
import '../src/css_files/grid.css'


const Skills: React.FC = (): JSX.Element => {
    return (
        <motion.div 
        initial = {{opacity: 0, y: '-300px'}}
        animate = {{opacity: 1, y: 0}}
        transition ={{delay: .25, duration: .5, ease: 'easeOut'}}
        className = "skills-card flex justify-center items-center rounded-3xl bg-very-light-gray shadow-lg font-[Poppins] h-full w-full">
            <div className = "skill-grid p-5">
                <SkillSquare name = "HTML5" image = "/html_logo.png" size = {'4rem'}/>
                <SkillSquare name = "CSS3" image = "/css_logo.svg" size = {'3rem'}/>
                <SkillSquare name = "Java Script" image = "/javascript_logo.png" size = {'4rem'}/>
                <SkillSquare name = "Type Script" image = "/typescript_logo.png" size = {'4rem'}/>
                <SkillSquare name = "React" image = "/react_logo.png" size = {'2.8rem'}/>
                <SkillSquare name = "Git" image = "/git_logo.png" size = {'2.8rem'}/>
                <SkillSquare name = "Tailwind CSS" image = "/tailwind_logo.png" size = {'2.8rem'}/>
                <SkillSquare name = "Redux" image = "/redux_logo.png" size = {'2.8rem'}/>
                <SkillSquare name = "Figma" image = "/figma_logo.png" size = {'4rem'}/>
                <SkillSquare name = "Adobe Xd" image = "/xd_logo.png" size = {'4rem'}/>
                <SkillSquare name = "Adobe Ps" image = "/ps_logo.png" size = {'4rem'}/>
                <SkillSquare name = "Adobe Ai" image = "/illustrator_logo.png" size = {'4rem'}/>
            </div>
        </motion.div>
    )
}

export default Skills
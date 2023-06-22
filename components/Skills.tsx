import React from 'react'
import SkillSquare from '../components/SkillSquare'

const Skills: React.FC = (): JSX.Element => {
    return (
        <>
            <div className = "skill-grid rounded-2xl bg-very-light-gray h-[28rem] w-[22rem] shadow-lg font-[Poppins] p-5">
                <SkillSquare name = "HTML5" image = "html_logo.png" size = {'4rem'}/>
                <SkillSquare name = "CSS3" image = "css_logo.svg" size = {'3rem'}/>
                <SkillSquare name = "Java Script" image = "javascript_logo.png" size = {'4rem'}/>
                <SkillSquare name = "Type Script" image = "typescript_logo.png" size = {'4rem'}/>
                <SkillSquare name = "React" image = "react_logo.png" size = {'2.8rem'}/>
                <SkillSquare name = "Git" image = "git_logo.png" size = {'2.8rem'}/>
                <SkillSquare name = "Tailwind CSS" image = "tailwind_logo.png" size = {'2.8rem'}/>
                <SkillSquare name = "Redux" image = "redux_logo.png" size = {'2.8rem'}/>
                <SkillSquare name = "Figma" image = "figma_logo.png" size = {'4rem'}/>
                <SkillSquare name = "Adobe Xd" image = "xd_logo.png" size = {'4rem'}/>
                <SkillSquare name = "Adobe Ps" image = "ps_logo.png" size = {'4rem'}/>
                <SkillSquare name = "Adobe Ai" image = "illustrator_logo.png" size = {'4rem'}/>
            </div>
        </>
    )
}

export default Skills
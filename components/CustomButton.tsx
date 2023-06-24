import React from 'react'
import {Link} from 'react-router-dom'

import '../src/css_files/buttons.css'

interface Props {
    colors: [string, string],
    text: string,
    link: string,
    absolute: [boolean, number, number, number, number],
    newPage: boolean
}

const CustomButton: React.FC<Props> = ({colors, text, link, absolute, newPage}): JSX.Element => {
    const absoluteStyles = {
        top: `${absolute[1]}%`,
        right: `${absolute[2]}%`,
        bottom: `${absolute[3]}%`,
        left: `${absolute[4]}%`,
    }

    return (
        <div className = {absolute[0] === true ? `absolute parent-hover` : 'parent-hover'} style = {absoluteStyles}>
            <div className = "absolute opacity-0 from-black to-gray-500"></div>
            <div className = "absolute opacity-0 from-linkedin-blue to-linkedin-light-blue"></div>
            <Link 
                to = {link}
                target = {newPage ? '_blank' : ''}
                className = {`button-custom from-${colors[0]} to-${colors[1]} relative w-[7.5rem] text-white font-[Poppins] font-bold text-[14px] h-10 bg-gradient-to-r rounded-full flex justify-center items-center`}>
                    <h1 className = "button-custom-text">{text}</h1>
                    <div className = "button-custom-arrow rounded-full bg-white aspect-square w-[1.8rem] justify-center items-center bg-opacity-30 flex opacity-0 absolute">
                        <img src="button_arrow.png" alt="button_arrow" className = "object-cover aspect-square w-[.6rem] bg-op"/>
                    </div>
            </Link>
        </div>
    )
}

export default CustomButton
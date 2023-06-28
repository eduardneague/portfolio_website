import React from 'react'
import {Link} from 'react-router-dom'

import '../src/css_files/buttons.css'

interface Props {
    colors: [string, string],
    text: string,
    link: string,
    absolute: [boolean, number, number, number, number],
    newPage: boolean,
    size: string[],
    arrowSize: string[]
}

const CustomButton: React.FC<Props> = ({colors, text, link, absolute, newPage, size, arrowSize}): JSX.Element => {
    const absoluteStyles = {
        top: `${absolute[1]}%`,
        right: `${absolute[2]}%`,
        bottom: `${absolute[3]}%`,
        left: `${absolute[4]}%`,
    }

    const buttonWidth = {
        width: `${size[0]}`,
        height: `${size[1]}`,
    }

    const arrowWidth = {
        width: `${arrowSize[0]}`,
        marginRight: `${arrowSize[1]}` 
    }

    return (
        <div className = {absolute[0] === true ? `absolute parent-hover` : 'parent-hover'} style = {absoluteStyles}>
            
            <div className = "absolute opacity-0 from-black to-gray-500"></div>
            <div className = "absolute opacity-0 from-scrimba-dark-purple to-scrimba-light-purple"></div>
            <div className = "absolute opacity-0 from-codecademy-dark-blue to-codecademy-light-blue"></div>
            <div className = "absolute opacity-0 from-google-red to-google-blue"></div>
            <div className = "absolute opacity-0 from-linkedin-blue to-linkedin-light-blue"></div>

            <div style = {buttonWidth}>
                <Link 
                    to = {link}
                    target = {newPage ? '_blank' : ''}
                    className = {`button-custom from-${colors[0]} to-${colors[1]} relative w-full h-full text-white font-[Poppins] font-bold text-sm bg-gradient-to-r rounded-full flex justify-center items-center`}>
                        <h1 className = "button-custom-text text-sm">{text}</h1>
                        <div 
                            style = {arrowWidth}
                            className = "button-custom-arrow rounded-full bg-white aspect-square w-full justify-center items-center bg-opacity-30 flex opacity-0 absolute">
                            <img src="button_arrow.png" alt="button_arrow" className = "object-cover aspect-square w-[.6rem]"/>
                        </div>
                </Link>
            </div>

        </div>
    )
}

export default CustomButton
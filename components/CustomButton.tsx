import React from 'react'
import {Link} from 'react-router-dom'

import '../src/css_files/buttons.css'

interface Props {
    colors: [string, string],
    text: string,
    link: string,
}

const CustomButton: React.FC<Props> = ({colors, text, link}): JSX.Element => {
    return (
        <div>
            <Link 
                to = {link}
                className = {`button-custom relative w-[7.5rem] text-white font-[Poppins] font-bold text-[14px] h-10 bg-gradient-to-r from-${colors[0]} to-${colors[1]} rounded-full flex justify-center items-center`}>
                    <h1 className = "button-custom-text">{text}</h1>
                    <div className = "button-custom-arrow rounded-full bg-white aspect-square w-[1.8rem] justify-center items-center bg-opacity-30 flex opacity-0 absolute">
                        <img src="button_arrow.png" alt="button_arrow" className = "object-cover aspect-square w-[.6rem] bg-op"/>
                    </div>
            </Link>
        </div>
    )
}

export default CustomButton
import React from 'react'
import {Link} from 'react-router-dom'

interface Props {
    colors: [string, string],
    text: string
}

const CustomButton: React.FC<Props> = ({colors, text}): JSX.Element => {
    return (
        <div>
            <Link 
                to = "contact"
                className = {`w-[7.5rem] text-white font-[Poppins] font-bold text-[14px] h-10 bg-gradient-to-r from-${colors[0]} to-${colors[1]} rounded-full flex justify-around items-center`}>
                {text}
                <div>caca</div>
            </Link>
        </div>
    )
}

export default CustomButton
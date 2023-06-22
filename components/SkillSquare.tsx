import React from 'react'
import '../src/css_files/skills.css'

interface Props {
    name: string,
    image: string,
    size: string
}


const SkillSquare: React.FC<Props> = ({name, image, size}): JSX.Element => {

    const imageStyle = {
        width: size,
    }

    return (
        <>
            <div className = {`select-none skill-square cursor-pointer relative flex justify-center items-center aspect-square w-16 rounded-md shadow-md`}>
                <img src={image} alt="" className = {`skill-square-image aspect-square object-contain rounded-lg`} style = {imageStyle}/>
                <h1 className = "skill-square-name font-bold absolute opacity-0 text-center">{name}</h1>
            </div>
        </>

    )
}

export default SkillSquare
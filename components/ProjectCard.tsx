import React from 'react'
import CustomButton from './CustomButton'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

type techType = {
    image: string,
    name: string,
    size: string
}

interface Props {
    title: string,
    description: string,
    buttonText: string,
    tech: Array<techType>,
    link: string,
    projectNumber: string
}

const ProjectCard: React.FC<Props> = ({title, description, buttonText, tech, link, projectNumber}): JSX.Element => {

    const techDisplay = tech.map((element) => {
        const sizeStyle = {
            width: element.size,
            height: element.size
        }
        return (
            <div className = "tech-element aspect-square cursor-pointer relative" style = {sizeStyle}>
                <img 
                    src = {element.image}
                    alt = {element.name} 
                    className = " w-full h-full object-contain select-none"
                    draggable = "false"
                />
                <div className = "hidden tech-element-text-container p-2 absolute top-[-150%] z-[1000] bg-white shadow-lg opacity-0 justify-center items-center rounded-lg">
                    <h1 className = "tech-element-text">
                        {element.name}
                    </h1>
                </div>
            </div>
        )
    })

    return (
        <>
            <motion.div 

                initial = {{opacity: 0, x: '300px'}}
                animate = {{opacity: 1, x: 0}}
                transition ={{delay: Math.random() * .30, duration: .5, ease: 'easeOut'}}
                
                className = {`project-card project-card-${projectNumber} flex flex-col justify-center w-full rounded-3xl shadow-lg font-[Poppins] gap-3 p-6`}>
                    <Link to = {link} className = "w-full flex flex-col gap-2">
                    
                    <h1 className = "project-title text-white font-bold text-xl">{title}</h1>
                    <p className = "project-description text-white text-sm max-w-[35rem] ">
                        {description}
                    </p>

                    <div className = "project-bottom-flex-div flex justify-between items-center">

                        <div className = "project-bottom-left-side flex gap-[.6rem]">
                            {techDisplay}
                        </div>

                        <CustomButton
                            colors = {['black', 'gray-500']}
                            text = {buttonText}
                            link = {link}
                            absolute = {[false, 0, 0, 0, 0]}
                            newPage = {true}
                            size = {['7.5rem', '2.5rem']}
                            arrowSize = {['1.8rem', '0']}
                        />
                    </div>
                </Link>
            </motion.div>
        </>
    )
}

export default ProjectCard
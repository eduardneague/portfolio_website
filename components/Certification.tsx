import React from 'react'
import {motion} from 'framer-motion'
import CustomButton from '../components/CustomButton'

interface Props {
    title: string,
    image: string,
    issueDate: string,
    issueCorp: string,
    buttonColors: string[],
    link: string
}

const Certification: React.FC<Props> = ({title, image, issueDate, buttonColors, link, issueCorp}): JSX.Element => {
  return (
    <motion.div 
        initial = {{opacity: 0, x: '-300px'}}
        animate = {{opacity: 1, x: 0}}
        transition ={{delay: Math.random() * .30, duration: .5, ease: 'easeOut'}}
        className = "w-full h-full max-w-[17rem] flex flex-col">
        <div className = "top-certification-container flex w-full">
            <div className = "max-w-[6rem] flex justify-center items-center overflow-hidden">
                 <img 
                    src = {image} 
                    alt = {issueCorp}
                    className = "rounded-3xl object-contain w-full shadow-lg select-none" 
                    draggable = "false"
                />
            </div>
            <div className = "w-full flex flex-col gap-1 ml-4 mt-[1rem]">
                <h1 className = "text-sm font-bold w-[9rem] max-w-[9rem]">{title}</h1>
                    <div className = "mb-[1.1rem]">
                        <p className = "text-sm font-normal text-gray-700">{issueCorp}</p>
                        <p className = "text-sm font-normal text-gray-700">Issued {issueDate}</p>
                    </div>
            </div>
        </div>

        <div>
        <CustomButton
            colors = {[buttonColors[0], buttonColors[1]]}
            text = {'Show credential'}
            link = {link}
            absolute = {[false, 0, 0, 0, 0]}
            newPage = {true}
            size = {['100%', '2.5rem']}
            arrowSize = {['1.8rem', '-2.4rem']}
        />
        </div>
    </motion.div>
  )
}

export default Certification
import React from 'react'
import {motion} from 'framer-motion'

import '../src/css_files/App.css'
import '../src/css_files/grid.css'

import CustomButton from '../components/CustomButton'
import SmileyFace from '../components/SmileyFace'

const AboutComponent: React.FC = (): JSX.Element => {
    return (
        <>
            <motion.div 

                initial = {{opacity: 0, x: '-300px'}}
                animate = {{opacity: 1, x: 0}}
                transition ={{delay: .35, duration: .5, ease: 'easeOut'}}

                className = "about-card justify-center rounded-3xl bg-very-light-gray min-h-[21rem] h-full w-full shadow-lg flex flex-col font-[Poppins]">
                    <h1 className = "text-xl font-bold ml-5 mt-5">Hello! I am</h1>
                    <h1
                        className="eduard-text ml-5 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-black to-custom-pink"
                    >
                    Eduard Neague
                    </h1>
                    <p className = "text-sm leading-6 ml-5 mt-3 max-w-[90%]">I am a 
                        <span className="h-[2.6rem] font-extrabold text-transparent text-sm bg-clip-text bg-gradient-to-r from-black to-custom-pink"> Frontend Developer </span> 
                        and <span className="h-[2.6rem] font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-black to-custom-pink"> UX Designer </span>
                        based in Bucharest, <span className="h-[2.6rem] font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-blue-700 via-yellow-500 to-red-700"> Romania! </span>
                        <br/><br/>
                        <span> 
                            I love building apps for the web and
                            creating awesome looking and memorable 
                            user experiences! Have a look around.
                        </span>
                    </p>
                    <div className = "w-full pl-5 h-20 flex justify-between items-center">
                        <CustomButton 
                            colors = {['black', 'custom-pink']} 
                            text = {'Contact'} 
                            link = {'contact'} 
                            absolute = {[false, 0, 0, 0, 0]}
                            newPage = {false}
                            />
                        <SmileyFace/>
                    </div>
            </motion.div>
        </>
    )
}

export default AboutComponent
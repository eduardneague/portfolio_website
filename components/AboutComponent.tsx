import React from 'react'

import CustomButton from '../components/CustomButton'

const AboutComponent: React.FC = (): JSX.Element => {
  return (
    <>
        <div className = "rounded-2xl bg-very-light-gray h-[22rem] w-[22rem] shadow-lg flex flex-col font-[Poppins]">
            <h1 className = "text-xl font-bold ml-5 mt-5">Hello! I am</h1>    
            <h1
                className="h-[2.8rem] ml-5 font-extrabold text-transparent text-[40px] bg-clip-text bg-gradient-to-r from-black to-custom-pink"
            >
            Eduard Neague
            </h1>
            <p className = "text-[14px] leading-6 ml-5 mt-3">I am a 
                <span className="h-[2.6rem] font-extrabold text-transparent text-[14px] bg-clip-text bg-gradient-to-r from-black to-custom-pink"> Frontend Developer </span> 
                 and <span className="h-[2.6rem] font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-black to-custom-pink"> UX Designer </span>
                 based in Bucharest, Romania. <img src="romanian_flag.png" className = "h-4 inline" alt="" />
                <br/><br/>
                <span> 
                    I love building apps for the web and
                    creating awesome looking and memorable 
                    user experiences! Have a look around.
                </span>
            </p>
            <div className = "w-full pl-5 h-20 flex justify-between items-center">
                <CustomButton colors = {['black', 'custom-pink']} text = {'Contact'}/>
                <div>caca</div>
            </div>
        </div>
    </>
  )
}

export default AboutComponent
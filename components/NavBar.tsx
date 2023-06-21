import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

const NavBar: React.FC = (): JSX.Element => {
    
    const [animated, setAnimated] = useState<'home' | 'projects' | 'contact'>('home')

    return (
        <div>
            <div className = "NAVBAR select-none relative gap-5 h-12 w-80 my-10 text-black bg-very-light-gray shadow-md rounded-full flex justify-between font-[Poppins] items-center">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "z-[10] ml-2 rounded-full text-lg w-1/3 h-4/5 flex justify-center items-center" : "z-[10] rounded-full text-lg w-1/3 h-4/5 flex justify-center items-center ml-2 text-gray-600"
                    }
                    onClick = {() => setAnimated('home')}
                    >
                    Home
                </NavLink>
                <NavLink
                    to="projects"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "z-[10] rounded-full text-lg w-1/3 h-4/5 flex justify-center items-center" : "z-[10] rounded-full text-lg w-1/3 h-4/5 flex justify-center items-center text-gray-600"
                    }
                    onClick = {() => setAnimated('projects')}
                    >
                    Projects
                </NavLink>
                <NavLink
                    to="contact"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "z-[10] mr-2 rounded-full text-lg w-1/3 h-4/5 flex justify-center items-center" : "z-[10] rounded-full text-lg w-1/3 h-4/5 flex justify-center items-center mr-2 text-gray-600"
                    }
                    onClick = {() => setAnimated('contact')}
                    >
                    Contact
                </NavLink>
                {animated === 'home' ? (
                        <div className = "buton-home"></div>
                    ) : animated === 'projects' ? (
                        <div className = 'buton-projects'></div>
                    ) : animated === 'contact' ? (
                        <div className = 'buton-contact'></div>
                    ) : ''
                }
            </div>
        </div>
    )
}

export default NavBar
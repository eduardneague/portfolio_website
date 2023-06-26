import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'

const NavBar: React.FC = (): JSX.Element => {
    
    const location = useLocation()

    return (
        <div>
            <div className = "NAVBAR select-none relative gap-5 h-10 w-80 my-10 text-black bg-very-light-gray shadow-md rounded-full flex justify-between font-[Poppins] items-center">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "z-[10] ml-2 rounded-full text-sm w-1/3 h-4/5 flex justify-center items-center" : isActive ? "z-[10] ml-2 rounded-full text-sm w-1/3 h-4/5 flex justify-center items-center" : "z-[10] rounded-full text-sm w-1/3 h-4/5 flex justify-center items-center ml-2 text-gray-600"
                    }
                    >
                    Home
                </NavLink>
                <NavLink
                    to="projects"
                    className={({ isActive, isPending }) =>
                        isPending ? "z-[10] ml-2 rounded-full text-sm w-1/3 h-4/5 flex justify-center items-center" : isActive ? "z-[10] rounded-full text-sm w-1/3 h-4/5 flex justify-center items-center" : "z-[10] rounded-full text-sm w-1/3 h-4/5 flex justify-center items-center text-gray-600"
                    }
                    >
                    Projects
                </NavLink>
                <NavLink
                    to="contact"
                    className={({ isActive, isPending }) =>
                        isPending ? "z-[10] ml-2 rounded-full text-sm w-1/3 h-4/5 flex justify-center items-center" : isActive ? "z-[10] mr-2 rounded-full text-sm w-1/3 h-4/5 flex justify-center items-center" : "z-[10] rounded-full text-sm w-1/3 h-4/5 flex justify-center items-center mr-2 text-gray-600"
                    }
                    >
                    Contact
                </NavLink>
                {location.pathname === '/' ? (
                        <div className = "buton-home"></div>
                    ) : location.pathname === '/projects' ? (
                        <div className = 'buton-projects'></div>
                    ) : location.pathname === '/contact' ? (
                        <div className = 'buton-contact'></div>
                    ) : ''
                }
            </div>
        </div>
    )
}

export default NavBar
import React from 'react'
import {Link} from 'react-router-dom'

const ContactFail: React.FC = (): JSX.Element => {
    return (
      <div className = "font-[Poppins] flex flex-col text-center gap-5 justify-center items-center">
        <h1 className = "text-5xl font-bold text-center">Oops!</h1>
        <p className = "text-lg text-center">The message wasn't sent for some reason...</p>
        <div>
        <Link 
            to = "/contact"
            className = {`w-[7.5rem] from-black to-custom-pink relative h-[2.2rem] text-white font-[Poppins] font-bold text-sm bg-gradient-to-r rounded-full flex justify-center items-center`}>
            <h1 className = "button-custom-text text-sm">Try Again!</h1>
            </Link>
        </div>
      </div>
    )
}

export default ContactFail
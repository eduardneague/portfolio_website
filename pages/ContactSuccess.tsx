import React from 'react'
import CustomButton from '../components/CustomButton'

const ContactSuccess: React.FC = (): JSX.Element => {
    return (
        <div className = "font-[Poppins] flex flex-col text-center gap-5 justify-center items-center">
            <h1 className = "text-5xl font-bold">Thank you!</h1>
            <p className = "text-lg">I will get back to you as soon as I can!</p>
            <div>
                <CustomButton 
                    colors = {['black', 'custom-pink']} 
                    text = {'Go Back!'} 
                    link = {'/'} 
                    absolute = {[false, 0, 0, 0, 0]}
                    newPage = {false}
                    size = {['7.5rem', '2.5rem']}
                    arrowSize = {['1.8rem', '0']}
                />
            </div>
        </div>
    )
}

export default ContactSuccess
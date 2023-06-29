import React, {useState, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import CustomButton from '../components/CustomButton'
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'

const ContactForm: React.FC = (): JSX.Element => {

    type FormData = {
        name_input: string,
        email_input: string,
        phoneNumber_input: string,
        message_input: string
    }

    const navigate = useNavigate()
    const form: any = useRef()

    const [formData, setFormData] = useState<FormData>(
        {
            name_input: '',
            email_input: '',
            phoneNumber_input: '',
            message_input: ''
        }
    )
    const [formError, setFormError] = useState<string | null>('')

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e?.target.id]: e.target.value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()

        // Form Validation 

        if(formData.name_input.length === 0) {
            setFormError("The name field must be filled!")
        }
        else if(formData.email_input.length < 10) {
            setFormError("You must input your email!")
        }
        else if(formData.message_input.length < 20) {
            setFormError("Message must be longer than 20 characters!")
        }
        else (
            emailjs.sendForm('service_d9uwalz', 'template_b2z4u0r', form.current, 'bzzUDJQo6ZDoQvssk')
                .then((result) => {
                    console.log(result.text + ' Message Sent');
                    navigate('/contact/success')
                }, (error) => {
                    console.log(error.text + ' Message Failed to send');
                    navigate('/contact/fail')
            })
        )  
    } 

    return (
        <>
            <motion.div 
                initial = {{opacity: 0, x: '300px'}}
                animate = {{opacity: 1, x: 0}}
                transition ={{delay: Math.random() * .30, duration: .5, ease: 'easeOut'}}
                className = "font-[Poppins] contact-flex-container flex flex-col min-w-[22rem] max-w-[30rem] bg-white justify-center items-center shadow-lg rounded-3xl">
                <h1 className = "text-3xl font-bold mt-7 mb-4">Hit me up!</h1>
                <div className = "flex flex-col w-[80%] h-5/6 items-center">
                    <form 
                        action = "POST" 
                        className = "w-full h-full flex flex-col gap-3"
                        onSubmit = {handleSubmit}
                        ref = {form}
                    >

                            <div className = "flex flex-col gap-2">
                                <label htmlFor = "name_input" className = "text-sm font-bold">Name 
                                    <span className = "text-contact-pink text-sm"> *</span>
                                </label>
                                <input 
                                    type="text"
                                    className = "outline outline-[#B0B0B0] outline-[0.01rem] rounded-[1rem] text-sm p-2 pl-6 focus:outline-contact-pink focus:outline-[.2rem] duration-100 transition-all ease-in-out"
                                    id = "name_input"
                                    name = "name_input"
                                    placeholder = "Name"
                                    onChange = {handleChange}
                                />
                            </div>

                            <div className = "flex flex-col gap-2">
                                <label htmlFor = "email_input" className = "text-sm font-bold">E-Mail 
                                    <span className = "text-contact-pink text-sm"> *</span>
                                </label>
                                <input 
                                    type="email"
                                    className = "outline outline-[#B0B0B0] outline-[0.01rem] rounded-[1rem] text-sm p-2 pl-6 focus:outline-contact-pink focus:outline-[.2rem] duration-100 transition-all ease-in-out"
                                    id = "email_input"
                                    name = "email_input"
                                    placeholder = "E-Mail"
                                    onChange = {handleChange}
                                />
                            </div>

                            <div className = "flex flex-col gap-2">
                                <label htmlFor = "phoneNumber_input" className = "text-sm font-bold flex justify-between">Phone Number
                                    <span className = "text-[#B0B0B0] text-sm font-normal"> Optional</span>
                                </label>
                                <input 
                                    type="number"
                                    className = "outline outline-[#B0B0B0] outline-[0.01rem] rounded-[1rem] text-sm p-2 pl-6 focus:outline-contact-pink focus:outline-[.2rem] duration-100 transition-all ease-in-out"
                                    id = "phoneNumber_input"
                                    name = "phoneNumber_input"
                                    placeholder = "Phone Number"
                                    onChange = {handleChange}
                                />
                            </div>

                            <div className = "flex flex-col gap-2">
                                <label htmlFor = "message_input" className = "text-sm font-bold">Message
                                    <span className = "text-contact-pink text-sm"> *</span>
                                </label>
                                <textarea
                                    className = "resize-none outline outline-[#B0B0B0] outline-[0.01rem] rounded-[1rem] text-sm p-2 pl-6 focus:outline-contact-pink focus:outline-[.2rem] duration-100 transition-all ease-in-out h-[10rem]"
                                    id = "message_input"
                                    name = "message_input"
                                    placeholder = "Message"
                                    onChange = {handleChange}
                                />
                            </div>

                            <button 
                                className = {`button-custom from-black to-contact-pink relative w-full h-[2.5rem] mt-2 text-white font-[Poppins] font-bold text-sm bg-gradient-to-r rounded-full flex justify-center items-center`}>
                                    <h1 className = "button-custom-text text-sm">Send it!</h1>
                                    <div className = "button-custom-arrow rounded-full bg-white aspect-square w-[2rem] mr-[-3rem] justify-center items-center bg-opacity-30 flex opacity-0 absolute">
                                        <img src="button_arrow.png" alt="button_arrow" className = "object-cover aspect-square w-[.6rem]"/>
                                    </div>
                            </button>
                    </form>
                    {formError ? 
                    <div className = "mt-5 font-bold text-contact-pink leading-6 text-center">
                        {formError}
                    </div> 
                    : ''}
                    
                    <p className = "mt-5 mb-5 text-sm text-center">Or you can just message me on LinkedIn</p>
                    <div className = "mb-8">
                    <CustomButton
                        colors = {['linkedin-blue', 'linkedin-light-blue']}
                        text = "LinkedIn"
                        link = "https://www.linkedin.com/in/eduardneague/"
                        absolute = {[false, 0, 0, 0, 0]}
                        newPage = {true}
                        size = {['7.5rem', '2.5rem']}
                        arrowSize = {['1.8rem', '0']}
                    />
                    </div>
                    
                </div>
            </motion.div>
        </>
    )
}

export default ContactForm
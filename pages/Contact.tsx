import React from 'react'
import '../src/css_files/contact.css'
import ContactForm from '../components/ContactForm'

const Contact: React.FC = (): JSX.Element => {
    return (
      <>
        <div className = "contact-wrapper mb-3">
            <ContactForm/>
        </div>
      </>
    )
}

export default Contact
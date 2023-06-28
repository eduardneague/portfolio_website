import React from 'react'
import {motion} from 'framer-motion'
import '../src/css_files/projects-grid.css'

import Certification from '../components/Certification'

const LicencesComponent: React.FC = (): JSX.Element => {
    return (
        <>
            <motion.div 
                initial = {{opacity: 0, x: '-300px'}}
                animate = {{opacity: 1, x: 0}}
                transition ={{delay: .25, duration: .5, ease: 'easeOut'}}
                className = "licences-card font-[Poppins] shadow-lg min-h-[45rem] md:min-h-[0rem] font-bold flex flex-col items-center justify-center bg-white rounded-3xl">
                
                <h1 className = "text-3xl w-[13.1rem] my-8 licences-text">Certifications</h1>

                <div className = "certifications-grid">
                    <Certification
                        title = "Front End Developer Carrer Path"
                        image = "scrimba_logo.png"
                        issueDate = "Feb 2023"
                        issueCorp = "Scrimba"
                        link = "https://scrimba.com/certificate/uE4MdRty/gfrontend"
                        buttonColors = {['scrimba-dark-purple', 'scrimba-light-purple']}
                    />

                    <Certification
                        title = "Front End Engineer Carrer Path"
                        image = "codecademy_logo.PNG"
                        issueDate = "May 2023"
                        issueCorp = "Codecademy"
                        link = "https://www.codecademy.com/profiles/edu4rdcode/certificates/2682884a0719474f96407efe432fdd87"
                        buttonColors = {['codecademy-dark-blue', 'codecademy-light-blue']}
                    />

                    <div className = "mb-6">
                        <Certification
                                title = "Google UX Design Certificate"
                                image = "google_logo.jpg"
                                issueDate = "Jul 2022"
                                issueCorp = "Google"
                                link = "https://www.coursera.org/account/accomplishments/professional-cert/5V4GMPN8DS2L"
                                buttonColors = {['google-red', 'google-blue']}
                            />
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default LicencesComponent
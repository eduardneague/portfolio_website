import React from 'react'
import { useParams } from 'react-router-dom'
import '../src/css_files/projectPage.css'
import { TechType, Persona, EmpathyMap } from '../utils/types'

import ProjectComponent from '../components/ProjectComponent'

const ProjectPage: React.FC = (): JSX.Element => {
    const { projectId }: any = useParams()
    const title = projectId.toString();

    let titleColor: string = ''
    let shortDescription: string = ''
    let buttonColors: Array<string> = []
    let mainBackground: string = ''
    let siteLink: string = ''
    let description: string = ''
    let role: Array<string> = []
    let duration: Array<string> = []
    let problems: string = ''
    let goal: string = ''
    let tech: Array<TechType> = []
    let persona: Persona = {
        name: '',
        profession: '',
        details: [''],
        goals: [''],
        bio: '',
        frustrations: '',
        image: ''
    }
    let empathyMap: EmpathyMap[] = [
        {
            title: '',
            details: ['']
        }
    ]
    let userflowImage: string = ''

    // Amber Project

    if(projectId == 'amber') {
        titleColor = "text-orange-500"
        shortDescription = "A one stop place for all movies and all people."
        buttonColors = ['orange-500', 'orange-800']
        mainBackground = "/amber/amber_background.png"
        siteLink = "https://amber-movie-project.web.app/"
        description = "An app that helps you quickly access and auction art pieces anywhere you want. It has a qr code scanner that allows users scan artwork while being near it in the art gallery."
        role = ['Front End Developer', 'Back End Developer', 'UX/UI Designer', 'Researcher']
        duration = ['1 Month', 'March 2023 - April 2023']
        problems = "Similar art auction apps are too cluttered and waste users' time. Information about art and the artist is lacking."
        goal = "Make art auctioning accesible and a more enjoyable experience for users."
        tech = [
            {name: 'React', image: '/react_logo.png', size: '2rem'},
            {name: 'Tailwind', image: '/tailwind_logo.png', size: '2rem'},
            {name: 'Redux', image: '/redux_logo.png', size: '2rem'},
            {name: 'Figma', image: '/figma_logo.png', size: '2rem'},
            {name: 'TypeScript', image: '/typescript_logo.png', size: '2rem'}, 
        ]
        persona = {
            name: 'Bilu Adrian',
            profession: 'Data Scientist',
            details: ['Age 36', 'Male', 'Philadelphia', 'Tech Savy', 'Single'],
            goals: ['Obtain brilliant artwork for his home decor.', 'Obtain brilliant artwork for him home decor.'],
            bio: 'Kevin is a data scientist working at a big corporation. He is a busy working man that generally works every day even on weekends.',
            frustrations: 'Kevin is a data scientist working at a big corporation. He is a busy working man that generally works every day even on weekends. He wants to spend more of his time on his personal life and hobbies.',
            image: '/amber/amber_persona.png'
        }
        empathyMap = [
            {
                title: 'says',
                details: [
                    'Wants easy navigation', 
                    'Looks for a more enjoyable experience',
                    'Passionate about art culture',
                    'Uses the phone a lot'
                ]
            },
            {
                title: 'thinks',
                details: [
                    'Will waste time looking for artwork', 
                    'This could save money',
                    'How long will this take?',
                    'Should I get more?'
                ]
            },
            {
                title: 'does',
                details: [
                    'Checks phone everyday for something new', 
                    'Looks for similar art on other platforms',
                    'Explore artists',
                ]
            },
            {
                title: 'feels',
                details: [
                    'Excited for something new', 
                    'A bit impatient',
                    'Scared to lose the bid',
                ]
            }
        ]
        userflowImage = "/amber/amber_userflow.png"
    } 

    return (
        <>
            <div className = "font-[Poppins]">
                <ProjectComponent
                    title = {title}
                    shortDescription = {shortDescription}
                    titleColor = {titleColor}
                    buttonColors = {buttonColors}
                    mainBackground = {mainBackground}
                    siteLink = {siteLink}
                    description = {description}
                    role = {role}
                    duration = {duration}
                    problems = {problems}
                    goal = {goal}
                    tech = {tech}
                    persona = {persona}
                    empathyMap = {empathyMap}
                    userflowImage = {userflowImage}
                />
            </div>
        </>
    )
}

export default ProjectPage
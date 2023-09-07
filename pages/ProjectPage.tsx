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
    let visualDesign: {
        name: string;
        image: string;
    }[] = []
    let functionality: {
        title: string;
        image: string;
    }[] = []
    let linkBackground: string = ''
    let githubLink: string = ''

    // Amber Project

    if(projectId == 'amber') {
        titleColor = "text-orange-500"
        shortDescription = "A one stop place for all movies and all people."
        buttonColors = ['orange-500', 'orange-800']
        mainBackground = "/amber/amber_background.png"
        siteLink = "https://amber-movie-project.web.app/"
        description = "An app that helps you find any movie at absolutely any time, fast, cheap and efficient. Perfect for anyone looking for a premium service at a low cost."
        role = ['Front End Developer', 'UX/UI Designer', 'Researcher']
        duration = ['1 Month', 'March 2023 - April 2023']
        problems = "Similar movie finding and streaming service applications are not accessible."
        goal = "Create a movie platform that gives users a very premium service at a very low cost."
        tech = [
            {name: 'React', image: '/react_logo.png', size: '2rem'},
            {name: 'Tailwind', image: '/tailwind_logo.png', size: '2rem'},
            {name: 'Redux', image: '/redux_logo.png', size: '2rem'},
            {name: 'Figma', image: '/figma_logo.png', size: '2rem'},
            {name: 'TypeScript', image: '/typescript_logo.png', size: '2rem'}, 
            {name: 'Firebase', image: '/firebase_logo.png', size: '2rem'}, 
            {name: 'React Router', image: '/reactrouter_logo.png', size: '2rem'}, 
            {name: 'Stripe', image: '/stripe_logo.png', size: '2rem'}, 
        ]
        persona = {
            name: 'Bilu Adrian',
            profession: 'APP DEVELOPER',
            details: ['Age 25', 'Male', 'Bucharest', 'Tech Savy', 'Married'],
            goals: ['Find movies fast and easy.', 'Wants a premium service that is not too expensive.'],
            bio: 'Adrian is an application developer working for a very big tech company. He loves watching movies and dramas with his family.',
            frustrations: 'He wishes premium movie streaming services would not be so expensive for what they can offer.',
            image: '/amber/amber_persona.png'
        }
        empathyMap = [
            {
                title: 'says',
                details: [
                    'Wants easy navigation.', 
                    'Looks for a more enjoyable experience.',
                    'Passionate about movie culture.',
                    'Uses the phone a lot.'
                ]
            },
            {
                title: 'thinks',
                details: [
                    'This could save money.',
                    'How long am I going to use it for?',
                    'Should I get a subscription?'
                ]
            },
            {
                title: 'does',
                details: [
                    'Checks phone everyday for something new.', 
                    'Looks for similar prices on other platforms.',
                    'Explores movies.',
                ]
            },
            {
                title: 'feels',
                details: [
                    'Excited for something new.', 
                    'Very impatient.',
                    'Scared to buy something that he may not like.',
                ]
            }
        ]
        userflowImage = "/amber/amber_userflow.png"
        visualDesign = [
            {
                name: 'amber_design_1',
                image: '/amber/amber_design_1.png'
            },
            {
                name: 'amber_design_2',
                image: '/amber/amber_design_2.png'
            },
            {
                name: 'amber_design_3',
                image: '/amber/amber_design_3.png'
            },
            {
                name: 'amber_design_4',
                image: '/amber/amber_design_4.png'
            },
        ]
        functionality = [
            {
                title: 'Full user authentification with Firebase 9',
                image: '/amber/amber_functionality_1.png'
            },
            {
                title: 'User profile and working subscription service',
                image: '/amber/amber_functionality_2.png'
            },
            {
                title: 'Subscription checkout service with Stripe',
                image: '/amber/amber_functionality_3.png'
            },
            {
                title: 'TMDB API used for constantly fetching latest movies',
                image: '/amber/amber_functionality_4.png'
            },
            {
                title: 'Playable trailer functionality',
                image: '/amber/amber_functionality_5.png'
            },
            {
                title: 'Fully functional search bar',
                image: '/amber/amber_functionality_6.png'
            },
        ]
        linkBackground = 'bg-orange-500'
        githubLink = "https://github.com/eduardneague/amber"
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
                    visualDesign = {visualDesign}
                    functionality = {functionality}
                    linkBackground= {linkBackground}
                    githubLink = {githubLink}
                />
            </div>
        </>
    )
}

export default ProjectPage
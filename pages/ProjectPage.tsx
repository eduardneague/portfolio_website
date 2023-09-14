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
    }[] | undefined = []
    let functionality: {
        title: string;
        image?: string;
    }[] = []
    let linkBackground: string = ''
    let githubLink: string = ''
    let video: undefined | string = undefined

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
        video = undefined
    } 

    // Runwild Project

    if(projectId == 'runwild') {
        titleColor = "text-purple-500"
        shortDescription = "On the fly AI generated images and suggestions"
        buttonColors = ['purple-500', 'purple-800']
        mainBackground = "/runwild/runwild_mainbackground.png"
        siteLink = "https://runwildai.netlify.app/"
        description = "A web application built for the sole puropse of generating beautiful AI images within the shortest of time."
        role = ['Front End Developer', 'Back End Developer', 'UX/UI Designer', 'Researcher']
        duration = ['2 Weeks', 'April 10th 2023 - April 24th 2023']
        problems = "Other AI image generation websites take a while to generate images."
        goal = "Create a very fast AI image generation application."
        tech = [
            {name: 'React', image: '/react_logo.png', size: '2rem'},
            {name: 'Tailwind', image: '/tailwind_logo.png', size: '2rem'},
            {name: 'Figma', image: '/figma_logo.png', size: '2rem'},
            {name: 'TypeScript', image: '/typescript_logo.png', size: '2rem'}, 
            {name: 'Microsoft Azure', image: '/azure_logo.png', size: '2rem'}, 
            {name: 'NextJS', image: '/nextjs_logo.png', size: '2rem'}, 
            {name: 'OpenAI', image: '/chatgpt_logo.png', size: '2rem'}, 
        ]
        persona = {
            name: 'Voinea Andrei',
            profession: 'CUSTOMER SUPPORT',
            details: ['Age 23', 'Male', 'Bucharest', 'Creative', 'Married'],
            goals: ['Generate AI images for a blog he is writing.', 'Would be great if they can be generated for free.'],
            bio: "Voinea is a very creative, free spirit. He's quite busy with work, but whenever he gets the chance he loves writing his blog.",
            frustrations: 'He wishes he could create wonderful looking AI images for free, quickly and easily.',
            image: '/runwild/runwild_persona.png'
        }
        empathyMap = [
            {
                title: 'says',
                details: [
                    'Wants fast results.', 
                    'Looks for high quality images.',
                    'Wants images for his blog.',
                ]
            },
            {
                title: 'thinks',
                details: [
                    "I don't want to spend too much.",
                    'How long am I going to use it for?'
                ]
            },
            {
                title: 'does',
                details: [
                    'Checks phone everyday for new apps', 
                    'Creates AI images to showcase on his blog.'
                ]
            },
            {
                title: 'feels',
                details: [
                    'Excited for the endless posibilities of AI.', 
                    'Quite scared of trying something new.',
                ]
            }
        ]
        userflowImage = "/runwild/runwild_userflow.png"
        visualDesign = [
            {
                name: 'runwild_design_1',
                image: '/runwild/runwild_design_1.png'
            },
            {
                name: 'runwild_design_2',
                image: '/runwild/runwild_design_2.png'
            },
        ]
        functionality = [
            {
                title: 'Custom API endpoints hosted with Microsoft Azure',
                image: '/runwild/runwild_functionality_1.png'
            },
            {
                title: 'Microsoft Azure Storage Blobs',
                image: '/runwild/runwild_functionality_2.png'

            },
            {
                title: 'ChatGPT and DALL-E 2.0 Integration',
                image: '/runwild/runwild_functionality_3.png'

            },
            {
                title: 'Modern NextJs Server-side Rendering',
                image: '/runwild/runwild_functionality_4.png'
            },

        ]
        linkBackground = 'bg-purple-500'
        githubLink = "https://github.com/eduardneague/ai-ionutz"
        video = "https://www.youtube.com/embed/3-I1zuL-MpY?controls=1"
    } 

    // Diskus Project

    if(projectId == 'diskus') {
        titleColor = "text-diskus-pink"
        shortDescription = "A place for all diskussions."
        buttonColors = ['diskus-pink', 'purple-400']
        mainBackground = "/diskus/diskus_background.png"
        siteLink = "https://diskusapp.vercel.app/"
        description = "A web application built for creating any type of diskussions and sharing your experiences with the world."
        role = ['Front End Developer', 'Back End Developer', 'UX/UI Designer', 'Researcher']
        duration = ['1 Month', 'May 2023 - June 2023']
        problems = "Starting diskussions on the web can be challanging and overwhelming."
        goal = "Very quickly create diskussions about things the user would want to share with the world."
        tech = [
            {name: 'React', image: '/react_logo.png', size: '2rem'},
            {name: 'Tailwind', image: '/tailwind_logo.png', size: '2rem'},
            {name: 'Figma', image: '/figma_logo.png', size: '2rem'},
            {name: 'TypeScript', image: '/typescript_logo.png', size: '2rem'}, 
            {name: 'MongoDB', image: '/mongodb_logo.png', size: '2rem'}, 
            {name: 'NextJS', image: '/nextjs_logo.png', size: '2rem'}, 
            {name: 'Clerk', image: '/clerk_logo.png', size: '2rem'}, 
        ]
        persona = {
            name: 'Iordache Robert',
            profession: 'GAME DEVELOPER',
            details: ['Age 30', 'Male', 'Bucharest', 'Gamer', 'Married'],
            goals: ['Wants to share his opinions about his favorite video games with people.', 'Wants to be able to create as many threads whenever he wants.'],
            bio: "Iordache Robert is a very passionate man about video games and has been playing them ever since he was young. He loves talking about them with people who have similar interests.",
            frustrations: 'He wishes he could have a platform where he could talk about the games he loves.',
            image: '/diskus/diskus_persona.png'
        }
        empathyMap = [
            {
                title: 'says',
                details: [
                    "I'd love to talk about updates in my favorite games.", 
                    "I love reading what others think about these games."
                ]
            },
            {
                title: 'thinks',
                details: [
                    "How could would it be to make friends like this?",
                    'Sharing my interests with others makes me excited.'
                ]
            },
            {
                title: 'does',
                details: [
                    'Checks phone for new game updates everyday.', 
                    'Notes things he likes and dislikes in his diary.'
                ]
            },
            {
                title: 'feels',
                details: [
                    'Excited to share his notes with people.', 
                    'Quite scared of trying something new.',
                ]
            }
        ]
        userflowImage = "/diskus/diskus_userflow.png"
        visualDesign = undefined
        functionality = [
            {
                title: 'Full User Authentification with Clerk and MongoDB',
                image: '/diskus/diskus_functionality_1.png'
            },
            {
                title: 'Onboarding Profile Complition Page',
                image: '/diskus/diskus_functionality_2.png'

            },
            {
                title: 'Dynamic Server Side Rendering using NextJS',
                image: '/diskus/diskus_functionality_3.png'
            },
            {
                title: 'Activity Page',
                image: '/diskus/diskus_functionality_4.png'
            },
            {
                title: 'Create Thread Functionality',
                image: '/diskus/diskus_functionality_5.png'
            },
            {
                title: 'See Profile',
                image: '/diskus/diskus_functionality_6.png'
            },
            {
                title: 'Comment on Threads',
                image: '/diskus/diskus_functionality_7.png'
            },
        ]
        linkBackground = 'bg-diskus-pink'
        githubLink = "https://github.com/eduardneague/diskus"
        video = undefined
    } 

    // ShowCar Project

    if(projectId == 'showcar') {
        titleColor = "text-showcar-light"
        shortDescription = "A place for all diskussions."
        buttonColors = ['showcar-light', 'showcar-dark']
        mainBackground = "/showcar/showcar_background.png"
        siteLink = "https://showcar-ebon.vercel.app/"
        description = "Web application that utilizes multiple APIs to create a wonderful and seemless car finding experience."
        role = ['Front End Developer', 'UX/UI Designer', 'Researcher']
        duration = ['2 Weeks', 'July 10th 2023 - July 24th 2023']
        problems = "Finding cars to rent or purchase can be quite time consuming."
        goal = "Very quickly be able to find a car to rent or purchase from a trusted dealer."
        tech = [
            {name: 'React', image: '/react_logo.png', size: '2rem'},
            {name: 'Tailwind', image: '/tailwind_logo.png', size: '2rem'},
            {name: 'Figma', image: '/figma_logo.png', size: '2rem'},
            {name: 'TypeScript', image: '/typescript_logo.png', size: '2rem'}, 
            {name: 'NextJS', image: '/nextjs_logo.png', size: '2rem'}, 
            {name: 'Headless UI', image: '/headlessui_logo.png', size: '2rem'}, 
        ]
        persona = {
            name: 'Grecu Damian',
            profession: 'Fitness Trainer',
            details: ['Age 28', 'Male', 'Bucharest', 'Loves Fitness', 'Married'],
            goals: ['Wants to be able to rent cars so that he can go from and to work.', 'Considers buying a car in the long run, but is not sure which one to pick.'],
            bio: "Grecu Damian is a Fitness Trainer and Nutritionist. He has always loved helping other people and so, by combining his passions with his aspirations, he has chosen this path.",
            frustrations: 'Public transport is unreliable for him, as though he rarely makes it on time despite trying his best.',
            image: '/showcar/showcar_persona.png'
        }
        empathyMap = [
            {
                title: 'says',
                details: [
                    "How I wish I had a car right now...", 
                    "I hope I won't have my clients wait too long."
                ]
            },
            {
                title: 'thinks',
                details: [
                    "How could I make sure that I always make it on time?",
                    'Is there any way for me to rent a car for cheap?'
                ]
            },
            {
                title: 'does',
                details: [
                    'Checks car rental services everyday.', 
                    'Tries to get in touch with people selling cars.'
                ]
            },
            {
                title: 'feels',
                details: [
                    'Scared that buying a car may not be worth it in the long run.', 
                    'Uncertain as to how a rental service works.',
                ]
            }
        ]
        userflowImage = "/showcar/showcar_userflow.png"
        visualDesign = undefined
        functionality = [
            {
                title: 'Car model fetching with Cars by API-Ninjas',
                image: '/showcar/showcar_functionality_1.png'
            },
            {
                title: 'Fully responsive mobile design',
                image: '/showcar/showcar_functionality_2.png'
            },
            {
                title: 'Filters built with Headless UI',
                image: '/showcar/showcar_functionality_3.png'
            },
            {
                title: 'Dynamic Detail Pop-up',
                image: '/showcar/showcar_functionality_4.png'
            },
            {
                title: 'Different angles car photos with IMAGINStudio',
                image: '/showcar/showcar_functionality_5.png'
            },
        ]
        linkBackground = 'bg-showcar-light'
        githubLink = "https://github.com/eduardneague/car_showcase"
        video = undefined
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
                    video = {video}
                />
            </div>
        </>
    )
}

export default ProjectPage
import { motion } from 'framer-motion'
import CustomButton from './CustomButton';
import { TechType, Persona, EmpathyMap } from '../utils/types'
import { Link } from 'react-router-dom';

import '../src/css_files/cardLogoAnimation.css'

interface Props {
    title: string;
    shortDescription: string;
    titleColor: string;
    buttonColors: Array<string>;
    mainBackground: string;
    siteLink: string;
    description: string;
    role: Array<string>;
    duration: Array<string>;
    problems: string;
    goal: string;
    tech: Array<TechType>;
    persona: Persona;
    empathyMap: EmpathyMap[];
    userflowImage: string;
    visualDesign: {
        name: string;
        image: string;
    }[];
    functionality: {
        title: string;
        image: string;
    }[];
    linkBackground: string;
    githubLink: string;
}

const ProjectComponent = ({ 
    title, 
    shortDescription,
    titleColor, 
    buttonColors, 
    mainBackground, 
    siteLink,
    description, 
    role, 
    duration, 
    problems, 
    goal, 
    tech,
    persona,
    empathyMap,
    userflowImage,
    visualDesign,
    functionality,
    linkBackground,
    githubLink
}: Props): JSX.Element => {
    const projectTitle = title?.charAt(0).toUpperCase() + title.slice(1)

    const animationDuration = .5

    const techDisplay = tech.map((element) => {
        const sizeStyle = {
            width: element.size,
            height: element.size
        }
        return (
            <div className = "tech-element aspect-square cursor-pointer relative" style = {sizeStyle}>
                <img 
                    src = {element.image}
                    alt = {element.name} 
                    className = " w-full h-full object-contain select-none"
                    draggable = "false"
                />
                <div className = "hidden tech-element-text-container p-2 absolute top-[-150%] z-[1000] bg-white shadow-lg opacity-0 justify-center items-center rounded-lg">
                    <h1 className = "tech-element-text">
                        {element.name}
                    </h1>
                </div>
            </div>
        )
    })

    return (
        <>
            <motion.div 
                initial = {{opacity: 0, x: '300px'}}
                viewport = {{once: true}}
                animate = {{opacity: 1, x: 0}}
                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                className = "project-container rounded-3xl shadow-lg bg-white overflow-y-scroll overflow-x-hidden"
            >
                {/* Banner */}

                <section className = "image-wrapper relative first-letter:selection:w-full md:h-[38rem] h-[30rem] bg-white">
                    <div className = "w-full h-[10rem] absolute bottom-0 bg-gradient-to-t from-black"/>
                    <div className = "w-full h-[10rem] absolute top-0 bg-gradient-to-b from-black"/>
                    <img 
                        src = {mainBackground} 
                        alt = {`${title}-background`} 
                        className = "select-none w-full h-full object-cover" 
                        draggable = {false} 
                    />
                    <div className = "absolute top-5 left-5 md:left-10 md:top-10">
                        <CustomButton
                            colors = {[buttonColors[0], buttonColors[1]]}
                            text = {'Back'}
                            link = {'/projects'}
                            absolute = {[true, 3, 0, 0, 3]}
                            newPage = {false}
                            size = {['6.5rem', '2.5rem']}
                            arrowSize = {['1.8rem', '5px']}
                        />
                    </div>
                    <div className = "flex justify-between items-center w-full h-[7rem] absolute bottom-0">
                        <div className = "flex flex-col">
                            <h1 className = {`md:pl-12 pl-5 text-3xl font-extrabold ${titleColor}`}>{projectTitle}</h1>
                            <p className = "pl-12 pt-1 md:text-lg text-white font-medium text-sm hidden md:block"> 
                                {shortDescription}
                            </p>
                        </div>
                        <div className = "flex gap-6 md:pr-12 pr-5 items-center">
                            <CustomButton
                                colors = {[buttonColors[0], buttonColors[1]]}
                                text = {'Visit'}
                                link = {siteLink}
                                absolute = {[false, 0, 0, 0, 0]}
                                newPage = {true}
                                size = {['6.5rem', '2.5rem']}
                                arrowSize = {['1.8rem', '5px']}
                            />
                            <div className = "md:block hidden mouse-scroll"/>
                        </div>
                    </div>
                </section>
                <hr className = "w-[91%] mx-auto mt-8"/>

                {/* Project Overview */}

                <section className = "w-full px-12 pt-8">
                    <motion.h1
                        initial = {{opacity: 0, x: '300px'}}
                        viewport = {{once: true}}
                        whileInView = {{opacity: 1, x: '0px'}} 
                        transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                        className = {`md:text-3xl text-2xl font-bold pb-8 ${titleColor}`}
                    >
                        Project Overview
                    </motion.h1>
                    <hr className = "w-[100%] mx-auto mb-8"/>

                    <div className = "grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-[2rem]">
                        {/* Description */}

                        <div className = "description-box flex flex-col gap-2">
                            <motion.p 
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                className = "description-title md:text-2xl text-xl font-bold"
                            >
                                Description
                            </motion.p>
                            <motion.p 
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                className = "description-content text-sm md:text-base text-gray-500 font-normal max-w-[20rem]"
                            >
                                {description}
                            </motion.p>
                        </div>

                        {/* Role */}

                        <div className = "role-box flex flex-col gap-2">
                            <motion.p 
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                className = "role-title md:text-2xl text-xl font-bold"
                            >
                                My Role
                            </motion.p>
                            <div className = "flex flex-col gap-0 max-w-[20rem]">
                                {role.map((role, index) => {
                                    return (
                                        <motion.p 
                                            initial = {{opacity: 0, x: '300px'}}
                                            viewport = {{once: true}}
                                            whileInView = {{opacity: 1, x: '0px'}} 
                                            transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                            key = {index} 
                                            className = "role-content text-sm md:text-base text-gray-500 font-normal"
                                        >
                                            {role}
                                        </motion.p>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Duration */}

                        <div className = "duration-box flex flex-col gap-2">
                            <motion.p 
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                className = "duration-title md:text-2xl text-xl font-bold"
                            >
                                Duration
                            </motion.p>
                            <motion.p 
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                className = "duration-content text-sm md:text-base text-gray-500 font-normal max-w-[20rem]"
                            >
                                {duration[0]} <br/>
                                {duration[1]}
                            </motion.p>
                        </div>

                        {/* Problems */}

                        <div className = "problems-box flex flex-col gap-2">
                            <motion.p 
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                className = "problems-title md:text-2xl text-xl font-bold"
                            >
                                Problems
                            </motion.p>
                            <motion.p 
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                className = "problems-content text-sm md:text-base text-gray-500 font-normal max-w-[20rem]"
                            >
                                {problems}
                            </motion.p>
                        </div>

                        {/* Goal */}

                        <div className = "goal-box flex flex-col gap-2">
                            <motion.p 
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                className = "goal-title md:text-2xl text-xl font-bold"
                            
                            >
                                Goal
                            </motion.p>
                            <motion.p 
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                className = "goal-content text-sm md:text-base text-gray-500 font-normal max-w-[20rem]"
                            >
                                {goal}
                            </motion.p>
                        </div>

                        {/* Tech */}

                        <div className = "description-box flex flex-col gap-2">
                            <motion.p 
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                className = "description-title md:text-2xl text-xl font-bold"
                            >
                                Tehnologies Used
                            </motion.p>
                            <motion.p 
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                className = "description-content text-base text-gray-500 font-normal max-w-[15rem] flex gap-2 flex-wrap"
                            >
                                {techDisplay}
                            </motion.p>
                        </div>
                    </div>
                </section>
                <hr className = "w-[91%] mx-auto mt-3"/>

                {/* User Research */}

                <section className = "w-full px-12 pt-8 pb-6">
                    <motion.h1 
                        initial = {{opacity: 0, x: '300px'}}
                        viewport = {{once: true}}
                        whileInView = {{opacity: 1, x: '0px'}} 
                        transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                        className = {`md:text-3xl text-2xl font-bold pb-4 ${titleColor}`}
                    >
                        User Research
                    </motion.h1>
                    <motion.p 
                        initial = {{opacity: 0, x: '300px'}}
                        viewport = {{once: true}}
                        whileInView = {{opacity: 1, x: '0px'}} 
                        transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                        className = "text-gray-500 text-sm md:text-base"
                    >
                        For user research, I did some surverys and user personas, after that I conducted competitive audits to
                        understand the art auctioning app market and learn from them, their mistakes and their effective designs
                        lead to creating a better user experience.
                    </motion.p>
                    <hr className = "w-[100%] mx-auto my-8"/>

                    <div className = "user-persona w-full grid md:grid-cols-3 grid-cols-1">
                        <div className = "persona-first-column">
                            <motion.h2 
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                className = "text-base"
                            > 
                                USER PERSONA 
                            </motion.h2>
                            <motion.h1 
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                className = "text-3xl font-bold"
                            > 
                                {persona.name} 
                            </motion.h1>
                            <motion.h1 
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                className = "text-base text-gray-500 font-normal uppercase tracking-[.3rem]"
                            >
                                {persona.profession}
                            </motion.h1>

                            {/* Persona Details */}

                            <div className = "flex flex-wrap max-w-[20rem] gap-2 mt-3">
                                {persona.details.map((detail) => {
                                    return (
                                        <motion.div
                                            initial = {{opacity: 0, x: '300px'}}
                                            viewport = {{once: true}}
                                            whileInView = {{opacity: 1, x: '0px'}} 
                                            transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                            className = "px-2 py-1 rounded-xl flex justify-center items-center text-base bg-black shadow text-white"
                                        >
                                            {detail}
                                        </motion.div>
                                    )
                                })}
                            </div>

                            {/* Persona Goals */}

                            <motion.div
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                className = "flex flex-col max-w-[20rem]"
                            >
                                <h1 className = "text-lg font-bold mt-5 mb-2">Goals</h1>
                                <hr/>
                                <ul className = "flex flex-col gap-2 mt-2 list-disc pl-5">
                                    {persona.goals.map((goal) => {
                                        return (
                                            <li className = "text-base text-gray-500">{goal}</li>
                                        )
                                    })}
                                </ul>
                            </motion.div>

                        </div>

                       <div className = "persona-second-column">
                            {/* Persona Bio */}
                            <motion.div 
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                className = "flex flex-col max-w-[30rem]"
                            >
                                <h1 className = "text-lg font-bold mt-5 mb-2">Bio</h1>
                                <hr/>
                                <p className = "text-base text-gray-500 mt-2">
                                    {persona.bio}
                                </p>
                            </motion.div>

                            {/* Persona Frustrations */}
                            <motion.div 
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                className = "flex flex-col max-w-[30rem] mt-[.45rem] "
                            >
                                <h1 className = "text-lg font-bold mt-5 mb-2">Frustrations</h1>
                                <hr/>
                                <p className = "text-base text-gray-500 mt-2">
                                    {persona.frustrations}
                                </p>
                            </motion.div>
                        </div>

                        <motion.div 
                            initial = {{opacity: 0, x: '300px'}}
                            viewport = {{once: true}}
                            whileInView = {{opacity: 1, x: '0px'}} 
                            transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                            className = "persona-third-column h-[23rem]"
                        >
                            <img 
                                src = {persona.image}
                                alt = {`${title}-persona`} 
                                draggable = {false}
                                className = "object-contain w-full h-full select-none"
                            />
                        </motion.div>
                    </div>
                </section>
                <hr className = "w-[91%] mx-auto mt-1"/>

                {/* Empathy Map */}

                <section className = "w-full px-12 pt-8 pb-6">
                <motion.h1
                    initial = {{opacity: 0, x: '300px'}}
                    viewport = {{once: true}}
                    whileInView = {{opacity: 1, x: '0px'}} 
                    transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                    className = {`md:text-3xl text-2xl font-bold pb-4 ${titleColor}`}
                >
                    Empathy Map
                </motion.h1>
                    <motion.p 
                        initial = {{opacity: 0, x: '300px'}}
                        viewport = {{once: true}}
                        whileInView = {{opacity: 1, x: '0px'}} 
                        transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                        className = "text-gray-500 text-sm md:text-base"
                    >
                        The goal of this empathy map is to achieve a deeper level of understaing of the persona.
                    </motion.p>
                <hr className = "w-[100%] mx-auto my-8"/>

                <div className = "w-full grid md:grid-cols-2 grid-cols-1 grid-rows-2 gap-[2rem] mt-5">
                    {empathyMap.map((map, index) => {
                        return (
                        <motion.div 
                            initial = {{opacity: 0, x: '300px'}}
                            viewport = {{once: true}}
                            whileInView = {{opacity: 1, x: '0px'}} 
                            transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                            key = {index} className = "thing bg-black flex flex-col empathy-box w-full h-[14rem] rounded-3xl p-5 justify-center items-center"
                        >
                            <h1 className = "text-white md:text-xl text-base uppercase font-bold self-start mb-2">{map.title}</h1>

                            <ul className = "flex flex-col gap-1 mt-2 list-disc pl-5 self-start">
                                {map.details.map((detail, index) => {
                                    return (
                                        <li key = {index} className = "md:text-base text-sm text-white">{detail}</li>
                                    )
                                })}
                            </ul>
                        </motion.div>
                        )
                    })}
                </div>

                </section>
                <hr className = "w-[91%] mx-auto mt-1"/>

                {/* User Flow */}

                <section className = "w-full px-12 pt-8 pb-6">
                    <motion.h1 
                        initial = {{opacity: 0, x: '300px'}}
                        viewport = {{once: true}}
                        whileInView = {{opacity: 1, x: '0px'}} 
                        transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                        className = {`text-2xl md:text-3xl font-bold pb-4 ${titleColor}`}
                    >
                        User Flow
                    </motion.h1>
                        <motion.p 
                            initial = {{opacity: 0, x: '300px'}}
                            viewport = {{once: true}}
                            whileInView = {{opacity: 1, x: '0px'}} 
                            transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                            className = "text-gray-500 text-sm md:text-base"
                        >
                            The user flow lays out the user's movement through the product, mapping out each and every step the user takes.
                        </motion.p>
                    <hr className = "w-[100%] mx-auto my-8"/>

                    <motion.div 
                        initial = {{opacity: 0, x: '300px'}}
                        viewport = {{once: true}}
                        whileInView = {{opacity: 1, x: '0px'}} 
                        transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                        className = "w-full gap-[2rem] mt-5"
                    >
                        <img 
                            src = {userflowImage}
                            alt = {`${title}-userflow-map`}
                            draggable = {false}
                            className = "select-none object-contain" 
                        />
                    </motion.div>
                </section>
                <hr className = "w-[91%] mx-auto mt-1"/>

                {/* Visual Design */}

                <section className = "w-full px-12 pt-8 pb-6">
                    <motion.h1 
                        initial = {{opacity: 0, x: '300px'}}
                        viewport = {{once: true}}
                        whileInView = {{opacity: 1, x: '0px'}} 
                        transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                        className = {`text-2xl md:text-3xl font-bold pb-4 ${titleColor}`}
                    >
                        Visual Design
                    </motion.h1>
                        <motion.p 
                            initial = {{opacity: 0, x: '300px'}}
                            viewport = {{once: true}}
                            whileInView = {{opacity: 1, x: '0px'}} 
                            transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                            className = "text-gray-500 text-base"
                        >
                            Fully responsive, mobile-first approach was taken when the application was built.
                        </motion.p>
                    <hr className = "w-[100%] mx-auto my-8"/>

                    {visualDesign.map((tab) => {
                        return (
                            <motion.div 
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                key = {tab.name} className = "w-full gap-[2rem] mt-5"
                            >
                                <img 
                                    src = {tab.image}
                                    alt = {`${tab.name}-design`}
                                    draggable = {false}
                                    className = "select-none object-contain" 
                                />
                            </motion.div>
                        )
                    })}

                </section>
                <hr className = "w-[91%] mx-auto mt-1"/>

                {/* Functionality */}

                <section className = "w-full px-12 pt-8 pb-6">
                    <motion.h1 
                        initial = {{opacity: 0, x: '300px'}}
                        viewport = {{once: true}}
                        whileInView = {{opacity: 1, x: '0px'}} 
                        transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                        className = {`text-2xl md:text-3xl font-bold pb-4 ${titleColor}`}
                    >
                        Funcionality
                    </motion.h1>

                    <motion.p 
                        initial = {{opacity: 0, x: '300px'}}
                        viewport = {{once: true}}
                        whileInView = {{opacity: 1, x: '0px'}} 
                        transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                        className = "text-gray-500 text-sm md:text-base"
                    >
                        A quick showcase of the capabilities of the application.
                    </motion.p>

                    <hr className = "w-[100%] mx-auto my-8"/>

                    {functionality.map((tab) => {
                        return (
                            <motion.div 
                                initial = {{opacity: 0, x: '300px'}}
                                viewport = {{once: true}}
                                whileInView = {{opacity: 1, x: '0px'}} 
                                transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                                key = {tab.title} className = "w-full gap-[2rem] mt-5"
                            >
                                <p className = "md:text-2xl text-xl text-center font-bold">{tab.title}</p>
                                <img 
                                    src = {tab.image}
                                    alt = {`${tab.title}-functionality`}
                                    draggable = {false}
                                    className = "select-none object-contain" 
                                />
                            </motion.div>
                        )
                    })}

                    
                </section>
                <hr className = "w-[91%] mx-auto mt-1"/>

                {/* Finish */}

                <section className = "w-full px-12 pt-8 pb-6">
                    <motion.p 
                        initial = {{opacity: 0, x: '300px'}}
                        viewport = {{once: true}}
                        whileInView = {{opacity: 1, x: '0px'}} 
                        transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                        className = "text-3xl my-10 text-center font-bold"
                    > 
                        Thank you for your time! 
                    </motion.p>

                    <motion.div 
                        initial = {{opacity: 0, x: '300px'}}
                        viewport = {{once: true}}
                        whileInView = {{opacity: 1, x: '0px'}} 
                        transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                        className = "h-full w-full">
                        <Link 
                            to = {siteLink} 
                            target = "_blank"
                            className = {`h-[88px] hover:bg-black ${linkBackground} transition-all duration-200 shadow-lg w-full rounded-3xl flex justify-center gap-4 items-center relative cursor-pointer p-3`}
                        >
                            <h1 className = " text-white font-[Poppins] font-bold text-xl max-w-[13rem] sm:max-w-[17rem]">
                                Visit the website!
                            </h1>
                        </Link>
                    </motion.div>

                    <motion.div 
                        initial = {{opacity: 0, x: '300px'}}
                        viewport = {{once: true}}
                        whileInView = {{opacity: 1, x: '0px'}} 
                        transition = {{delay: Math.random() * .30, duration: animationDuration, ease: 'easeOut'}}
                        className = "h-full animation-card mb-0 w-full mt-5">
                        <Link 
                            to = {githubLink}
                            target = "_blank"
                            className = "shadow-lg bg-black w-full h-full rounded-3xl flex justify-center gap-4 items-center relative cursor-pointer p-3"
                        >
                            <img src="/github_logo.png" alt="GitHub Image" draggable = "false" className = "animated-logo aspect-square object-fit w-16"/>
                            <h1 className = " text-white font-[Poppins] font-bold text-xl max-w-[13rem] sm:max-w-[17rem]">
                                {projectTitle} GitHub Repository
                            </h1>
                        </Link>
                    </motion.div>
                </section>

            </motion.div>
        </>
    )
}

export default ProjectComponent
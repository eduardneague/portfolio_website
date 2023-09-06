import { motion } from 'framer-motion'
import CustomButton from './CustomButton';
import {TechType, Persona, EmpathyMap} from '../utils/types'

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
}: Props): JSX.Element => {
    const projectTitle = title?.charAt(0).toUpperCase() + title.slice(1)

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
                animate = {{opacity: 1, x: 0}}
                transition = {{delay: Math.random() * .30, duration: .5, ease: 'easeOut'}}
                className = "project-container rounded-3xl shadow-lg bg-white overflow-y-scroll"
            >

                {/* Banner */}

                <section className = "image-wrapper relative first-letter:selection:w-full h-[38rem] bg-white">
                    <div className = "w-full h-[10rem] absolute bottom-0 bg-gradient-to-t from-black"/>
                    <div className = "w-full h-[10rem] absolute top-0 bg-gradient-to-b from-black"/>
                    <img 
                        src = {mainBackground} 
                        alt = {`${title}-background`} 
                        className = "select-none w-full h-full object-cover" 
                        draggable = {false} 
                    />
                    <CustomButton
                        colors = {[buttonColors[0], buttonColors[1]]}
                        text = {'Back'}
                        link = {'/projects'}
                        absolute = {[true, 3, 0, 0, 3]}
                        newPage = {false}
                        size = {['6.5rem', '2.5rem']}
                        arrowSize = {['1.8rem', '5px']}
                    />
                    <div className = "flex justify-between items-center w-full h-[7rem] absolute bottom-0">
                        <div className = "flex flex-col">
                            <h1 className = {`pl-12 text-3xl font-extrabold ${titleColor}`}>{projectTitle}</h1>
                            <p className = "pl-12 pt-1 text-white font-medium text-lg"> 
                                {shortDescription}
                            </p>
                        </div>
                        <div className = "flex gap-6 pr-12 items-center">
                            <CustomButton
                                colors = {[buttonColors[0], buttonColors[1]]}
                                text = {'Visit'}
                                link = {siteLink}
                                absolute = {[false, 0, 0, 0, 0]}
                                newPage = {true}
                                size = {['6.5rem', '2.5rem']}
                                arrowSize = {['1.8rem', '5px']}
                            />
                            <div className = "mouse-scroll"/>
                        </div>
                    </div>
                </section>
                <hr className = "w-[91%] mx-auto mt-8"/>

                {/* Project Overview */}

                <section className = "w-full px-12 pt-8">
                    <h1 className = {`text-3xl font-bold pb-8 ${titleColor}`}>Project Overview</h1>
                    <hr className = "w-[100%] mx-auto mb-8"/>

                    <div className = "grid grid-cols-3 grid-rows-2 gap-[2rem]">
                        {/* Description */}

                        <div className = "description-box flex flex-col gap-2">
                            <p className = "description-title text-2xl font-bold">
                                Description
                            </p>
                            <p className = "description-content text-base text-gray-500 font-normal max-w-[20rem]">
                                {description}
                            </p>
                        </div>

                        {/* Role */}

                        <div className = "role-box flex flex-col gap-2">
                            <p className = "role-title text-2xl font-bold">
                                My Role
                            </p>
                            <div className = "flex flex-col gap-0 max-w-[20rem]">
                                {role.map((role, index) => {
                                    return (
                                        <p key = {index} className = "role-content text-base text-gray-500 font-normal">
                                            {role}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Duration */}

                        <div className = "duration-box flex flex-col gap-2">
                            <p className = "duration-title text-2xl font-bold">
                                Duration
                            </p>
                            <p className = "duration-content text-base text-gray-500 font-normal max-w-[20rem]">
                                {duration[0]} <br/>
                                {duration[1]}
                            </p>
                        </div>

                        {/* Problems */}

                        <div className = "problems-box flex flex-col gap-2">
                            <p className = "problems-title text-2xl font-bold">
                                Problems
                            </p>
                            <p className = "problems-content text-base text-gray-500 font-normal max-w-[20rem]">
                                {problems}
                            </p>
                        </div>

                        {/* Goal */}

                        <div className = "goal-box flex flex-col gap-2">
                            <p className = "goal-title text-2xl font-bold">
                                Goal
                            </p>
                            <p className = "goal-content text-base text-gray-500 font-normal max-w-[20rem]">
                                {goal}
                            </p>
                        </div>

                        {/* Tech */}

                        <div className = "description-box flex flex-col gap-2">
                            <p className = "description-title text-2xl font-bold">
                                Tehnologies Used
                            </p>
                            <p className = "description-content text-base text-gray-500 font-normal max-w-[20rem] flex gap-2 flex-wrap">
                                {techDisplay}
                            </p>
                        </div>
                    </div>
                </section>
                <hr className = "w-[91%] mx-auto mt-3"/>

                {/* User Research */}

                <section className = "w-full px-12 pt-8 pb-6">
                    <h1 className = {`text-3xl font-bold pb-4 ${titleColor}`}>User Research</h1>
                    <p className = "text-gray-500 text-base">
                        For user research, I did some surverys and user personas, after that I conducted competitive audits to
                        understand the art auctioning app market and learn from them, their mistakes and their effective designs
                        lead to creating a better user experience.
                    </p>
                    <hr className = "w-[100%] mx-auto my-8"/>

                    <div className = "user-persona w-full grid grid-cols-3">
                        <div className = "persona-first-column">
                            <h2 className = "text-base"> USER PERSONA </h2>
                            <h1 className = "text-3xl font-bold"> {persona.name} </h1>
                            <h1 className = "text-base text-gray-500 font-normal uppercase tracking-[.3rem]">{persona.profession}</h1>

                            {/* Persona Details */}

                            <div className = "flex flex-wrap max-w-[20rem] gap-2 mt-3">
                                {persona.details.map((detail) => {
                                    return (
                                        <div className = "px-2 py-1 rounded-xl flex justify-center items-center text-base bg-black shadow text-white">
                                            {detail}
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Persona Goals */}

                            <div className = "flex flex-col max-w-[20rem]">
                                <h1 className = "text-lg font-bold mt-5 mb-2">Goals</h1>
                                <hr/>
                                <ul className = "flex flex-col gap-2 mt-2 list-disc pl-5">
                                    {persona.goals.map((goal) => {
                                        return (
                                            <li className = "text-base text-gray-500">{goal}</li>
                                        )
                                    })}
                                </ul>
                            </div>

                        </div>

                       <div className = "persona-second-column">
                            {/* Persona Bio */}
                            <div className = "flex flex-col max-w-[30rem]">
                                <h1 className = "text-lg font-bold mt-5 mb-2">Bio</h1>
                                <hr/>
                                <p className = "text-base text-gray-500 mt-2">
                                    {persona.bio}
                                </p>
                            </div>

                            {/* Persona Frustrations */}
                            <div className = "flex flex-col max-w-[30rem] mt-[.45rem] ">
                                <h1 className = "text-lg font-bold mt-5 mb-2">Frustrations</h1>
                                <hr/>
                                <p className = "text-base text-gray-500 mt-2">
                                    {persona.frustrations}
                                </p>
                            </div>
                        </div>

                        <div className = "persona-third-column h-[23rem]">
                            <img 
                                src = {persona.image}
                                alt = {`${title}-persona`} 
                                draggable = {false}
                                className = "object-contain w-full h-full select-none"
                            />
                        </div>
                    </div>
                </section>
                <hr className = "w-[91%] mx-auto mt-1"/>

                {/* Empathy Map */}

                <section className = "w-full px-12 pt-8 pb-6">
                <h1 className = {`text-3xl font-bold pb-4 ${titleColor}`}>Empathy Map</h1>
                    <p className = "text-gray-500 text-base">
                        The goal of this empathy map is to achieve a deeper level of understaing of the persona.
                    </p>
                <hr className = "w-[100%] mx-auto my-8"/>

                <div className = "w-full grid grid-cols-2 grid-rows-2 gap-[2rem] mt-5">
                    {empathyMap.map((map, index) => {
                        return (
                        <div key = {index} className = "thing bg-black flex flex-col empathy-box w-full h-[14rem] rounded-3xl p-5 justify-center items-center">
                            <h1 className = "text-white text-xl uppercase font-bold self-start mb-2">{map.title}</h1>

                            <ul className = "flex flex-col gap-1 mt-2 list-disc pl-5 self-start">
                                {map.details.map((detail, index) => {
                                    return (
                                        <li key = {index} className = "text-base text-white">{detail}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        )
                    })}
                </div>

                </section>
                <hr className = "w-[91%] mx-auto mt-1"/>

                {/* User Flow */}

                <section className = "w-full px-12 pt-8 pb-6">
                    <h1 className = {`text-3xl font-bold pb-4 ${titleColor}`}>User Flow</h1>
                        <p className = "text-gray-500 text-base">
                            The user flow lays out the user's movement through the product, mapping out each and every step the user takes.
                        </p>
                    <hr className = "w-[100%] mx-auto my-8"/>

                    <div className = "w-full gap-[2rem] mt-5">
                        <img 
                            src = {userflowImage}
                            alt = {`${title}-userflow-map`}
                            draggable = {false}
                            className = "select-none object-contain" 
                        />
                    </div>
                </section>
                <hr className = "w-[91%] mx-auto mt-1"/>

            </motion.div>
        </>
    )
}

export default ProjectComponent
import React from 'react'
import ProjectCard from '../components/ProjectCard'
import '../src/css_files/projects-grid.css'

const ProjectsGrid: React.FC = (): JSX.Element => {
  return (
    <>
        <ProjectCard
            title = 'Amber'
            background = '/amber/amber_background.png'
            projectNumber = '1'
            description = {
              `A full-blown, movie/drama website with a lot of functionality. Supports
              Stripe checkout, fully responsive design, functional searchbar, authentification
              and much more.
            `}
            link = 'amber'
            buttonText = 'Amber'
            tech = {[
              {name: 'React', image: '/react_logo.png', size: '1.6rem'},
              {name: 'Tailwind', image: '/tailwind_logo.png', size: '1.6rem'},
              {name: 'Redux', image: '/redux_logo.png', size: '1.6rem'},
              {name: 'Firebase', image: '/firebase_logo.png', size: '1.6rem'},
              {name: 'TypeScript', image: '/typescript_logo.png', size: '1.6rem'}, 
            ]}
        />
        <ProjectCard
            title = 'Runwild'
            background = '/runwild/runwild_mainbackground.png'
            projectNumber = '2'
            description = {
              `A web application built for the sole puropse of generating beautiful AI images within the shortest of time.
            `}
            link = 'runwild'
            buttonText = 'Runwild'
            tech = {[
              {name: 'React', image: '/react_logo.png', size: '1.6rem'},
              {name: 'Tailwind', image: '/tailwind_logo.png', size: '1.6rem'},
              {name: 'Microsoft Azure', image: '/azure_logo.png', size: '1.6rem'},
              {name: 'NextJS', image: '/nextjs_logo.png', size: '1.6rem'},
              {name: 'TypeScript', image: '/typescript_logo.png', size: '1.6rem'}, 
            ]}
        />
        <ProjectCard
            title = 'Diskus'
            background = '/diskus/diskus_background.png'
            projectNumber = '3'
            description = {
              `A web application built for creating any type of discussion and sharing your experiences with the world.
            `}
            link = 'diskus'
            buttonText = 'Diskus'
            tech = {[
              {name: 'React', image: '/react_logo.png', size: '1.6rem'},
              {name: 'MongoDB', image: '/mongodb_logo.png', size: '1.6rem'},
              {name: 'NextJs', image: '/nextjs_logo.png', size: '1.6rem'},
              {name: 'Clerk', image: '/clerk_logo.png', size: '1.6rem'},
              {name: 'TypeScript', image: '/typescript_logo.png', size: '1.6rem'}, 
            ]}
        />
        <ProjectCard
            title = 'Showcar'
            background = '/showcar/showcar_background.png'
            projectNumber = '4'
            description = {
              `Here is the description of the project itself.
              bla bla bla bla bla Lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem 
              (this description is only on hover)
            `}
            link = 'showcar'
            buttonText = 'Showcar'
            tech = {[
              {name: 'React', image: '/react_logo.png', size: '1.6rem'},
              {name: 'Tailwind', image: '/tailwind_logo.png', size: '1.6rem'},
              {name: 'NextJS', image: '/nextjs_logo.png', size: '1.6rem'},
              {name: 'Figma', image: '/figma_logo.png', size: '1.6rem'},
              {name: 'TypeScript', image: '/typescript_logo.png', size: '1.6rem'}, 
            ]}
        />
    </>
  )
}

export default ProjectsGrid
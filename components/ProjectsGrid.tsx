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
            title = 'Project 2'
            background = '/amber/amber_background.png'
            projectNumber = '2'
            description = {
              `Here is the description of the project itself.
              bla bla bla bla bla Lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem 
              (this description is only on hover)
            `}
            link = 'runwild'
            buttonText = 'Project 2'
            tech = {[
              {name: 'React', image: '/react_logo.png', size: '1.6rem'},
              {name: 'Tailwind', image: '/tailwind_logo.png', size: '1.6rem'},
              {name: 'Redux', image: '/redux_logo.png', size: '1.6rem'},
              {name: 'Figma', image: '/figma_logo.png', size: '1.6rem'},
              {name: 'TypeScript', image: '/typescript_logo.png', size: '1.6rem'}, 
            ]}
        />
        <ProjectCard
            title = 'Project 3'
            background = '/amber/amber_background.png'
            projectNumber = '3'
            description = {
              `Here is the description of the project itself.
              bla bla bla bla bla Lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem 
              (this description is only on hover)
            `}
            link = 'diskus'
            buttonText = 'Project 3'
            tech = {[
              {name: 'React', image: '/react_logo.png', size: '1.6rem'},
              {name: 'Tailwind', image: '/tailwind_logo.png', size: '1.6rem'},
              {name: 'Redux', image: '/redux_logo.png', size: '1.6rem'},
              {name: 'Figma', image: '/figma_logo.png', size: '1.6rem'},
              {name: 'TypeScript', image: '/typescript_logo.png', size: '1.6rem'}, 
            ]}
        />
        <ProjectCard
            title = 'Project 4'
            background = '/amber/amber_background.png'
            projectNumber = '4'
            description = {
              `Here is the description of the project itself.
              bla bla bla bla bla Lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem 
              (this description is only on hover)
            `}
            link = 'showcar'
            buttonText = 'Project 4'
            tech = {[
              {name: 'React', image: '/react_logo.png', size: '1.6rem'},
              {name: 'Tailwind', image: '/tailwind_logo.png', size: '1.6rem'},
              {name: 'Redux', image: '/redux_logo.png', size: '1.6rem'},
              {name: 'Figma', image: '/figma_logo.png', size: '1.6rem'},
              {name: 'TypeScript', image: '/typescript_logo.png', size: '1.6rem'}, 
            ]}
        />
    </>
  )
}

export default ProjectsGrid
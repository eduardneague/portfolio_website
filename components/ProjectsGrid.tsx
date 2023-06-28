import React from 'react'
import ProjectCard from '../components/ProjectCard'
import '../src/css_files/projects-grid.css'

const ProjectsGrid: React.FC = (): JSX.Element => {
  return (
    <>
        <ProjectCard
            title = 'Project 1'
            projectNumber = '1'
            description = {
              `Here is the description of the project itself.
              bla bla bla bla bla Lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem 
              (this description is only on hover)
            `}
            link = 'http://'
            buttonText = 'Project 1'
            tech = {[
              {name: 'React', image: 'react_logo.png', size: '1.6rem'},
              {name: 'Tailwind', image: 'tailwind_logo.png', size: '1.6rem'},
              {name: 'Redux', image: 'redux_logo.png', size: '1.6rem'},
              {name: 'Figma', image: 'figma_logo.png', size: '1.6rem'},
              {name: 'TypeScript', image: 'typescript_logo.png', size: '1.6rem'}, 
            ]}
        />
        <ProjectCard
            title = 'Project 2'
            projectNumber = '2'
            description = {
              `Here is the description of the project itself.
              bla bla bla bla bla Lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem 
              (this description is only on hover)
            `}
            link = 'http://'
            buttonText = 'Project 2'
            tech = {[
              {name: 'React', image: 'react_logo.png', size: '1.6rem'},
              {name: 'Tailwind', image: 'tailwind_logo.png', size: '1.6rem'},
              {name: 'Redux', image: 'redux_logo.png', size: '1.6rem'},
              {name: 'Figma', image: 'figma_logo.png', size: '1.6rem'},
              {name: 'TypeScript', image: 'typescript_logo.png', size: '1.6rem'}, 
            ]}
        />
        <ProjectCard
            title = 'Project 3'
            projectNumber = '3'
            description = {
              `Here is the description of the project itself.
              bla bla bla bla bla Lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem 
              (this description is only on hover)
            `}
            link = 'http://'
            buttonText = 'Project 3'
            tech = {[
              {name: 'React', image: 'react_logo.png', size: '1.6rem'},
              {name: 'Tailwind', image: 'tailwind_logo.png', size: '1.6rem'},
              {name: 'Redux', image: 'redux_logo.png', size: '1.6rem'},
              {name: 'Figma', image: 'figma_logo.png', size: '1.6rem'},
              {name: 'TypeScript', image: 'typescript_logo.png', size: '1.6rem'}, 
            ]}
        />
        <ProjectCard
            title = 'Project 4'
            projectNumber = '4'
            description = {
              `Here is the description of the project itself.
              bla bla bla bla bla Lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem 
              (this description is only on hover)
            `}
            link = 'http://'
            buttonText = 'Project 4'
            tech = {[
              {name: 'React', image: 'react_logo.png', size: '1.6rem'},
              {name: 'Tailwind', image: 'tailwind_logo.png', size: '1.6rem'},
              {name: 'Redux', image: 'redux_logo.png', size: '1.6rem'},
              {name: 'Figma', image: 'figma_logo.png', size: '1.6rem'},
              {name: 'TypeScript', image: 'typescript_logo.png', size: '1.6rem'}, 
            ]}
        />
    </>
  )
}

export default ProjectsGrid
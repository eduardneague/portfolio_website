import React from 'react'
import '../src/css_files/projects-grid.css'

import ProjectsGrid from '../components/ProjectsGrid'
import LicencesCard from '../components/LicencesCard'
import ProjectGitHubCard from '../components/ProjectGitHubCard'

const Projects: React.FC = (): JSX.Element => {

    return (
      <>
        <div className = "projects-grid">
        <ProjectsGrid/>
        <LicencesCard/>
        <ProjectGitHubCard/>
        </div>
      </>
    )
}

export default Projects
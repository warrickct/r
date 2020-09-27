import React from 'react';
import './projects.component.css'
import { Project } from "./project/project.component";

interface ProjectProps {
  title: String,
  description: String,
  skills: String
}

export function Projects() {

  let projectsData = [
    {
      title: 'eDNA Virtual Hub',
      description: "Developed a web application and back end built to visualize eDNA data from samples collected across New Zealand.",
      skills: "NodeJS, Cypress, Git, SQL, Python, Django, Docker, Bash, HTML, CSS, Nectar"
    },
    {
      title: 'Roonka Burial Site Digitization',
      description: "Created Python scripts to programmatically create 3D models suitable for 3D volumetric analysis of artefacts in the Roonka aboriginal burial excavation site.",
      skills: "Blender, Python, GIS, 3D Modelling, Git"
    },
    {
      title: 'Peroxiredoxin Fishtank',
      description: "Developed features and fixed errors for an interactive simulation of free radical accretion in peroxiredoxin-3 enzyme.",
      skills: "C#, Unity, Git, HTC Vive, Oculus, Virtual Reality"
    }
  ]

  const renderProjects = (projectsData: Array<ProjectProps>) => {
    return projectsData.map(project => {
      return <Project {...project} />;
    })
  }

  return (
    <div className="section">
      <div id="projects-title" className="section__title">Projects</div>
      <div className="section-body">
        {renderProjects(projectsData)}
      </div>
    </div>
  )
}

export default Projects;
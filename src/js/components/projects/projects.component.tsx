import React from 'react';
import './projects.component.css'
import { Project } from "./project/project.component";

interface ProjectProps {
  title: String,
  description: String,
  skills: String,
  linkText?: String;
  linkHref?: String;
}

export function Projects() {

  let projectsData = [
    {
      title: 'ResearchHub',
      description: "I am currently in the agile development team for the Univerity of Auckland's ResearchHub. My development work was focused on front-end development as well as migrating on-premises stack components to cloud technology.",
      skills: "NodeJS, AWS, Cloud, APIs, Serverless, Jenkins, Angular, Git, Bash, HTML, CSS, EC2, S3, Lambda, API Gateway",
      linkHref: "https://research-hub.auckland.ac.nz/#/home",
      linkText: "ResearchHub"
    },
    {
      title: '2FAB',
      description: "Created an AWS Lambda function running a chrome webdriver to retrieve OAuth2.0 tokens. This allowed us to automate our workflow create integration tests for the ResearchHub and other applications within the University.",
      skills: "NodeJS, AWS, APIs, Puppeteer, Serverless, ServiceNow, API Gateway",
      linkHref: "https://research-hub.auckland.ac.nz/#/home",
      linkText: "ResearchHub"
    },
    {
      title: 'Serverless Now',
      description: "Created an AWS Lambda function to transform and enrich tickets forwarded to ServiceNow",
      skills: "NodeJS, AWS, APIs, Serverless, ServiceNow, API Gateway"
    },
    {
      title: 'MyTardis',
      description: "I contributed to the front-end development of the Universty of Auckland's Instrument Data platform. I also co-hosted a sprint to create a high fidelity prototype for the front-end design.",
      skills: "NodeJS, Django, React, front-end, sprint"
    },
    {
      title: 'eDNA Virtual Hub',
      description: "I developed a web application and back end built to visualize eDNA data from samples collected across New Zealand.",
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
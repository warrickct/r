import React from 'react';
import styles from './projects.module.scss';
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
      description: "Worked on the agile team for the ResearchHub migrating functionality to a cloud architecture. Made alterations to front end components. Helped to CI/CD pipeline for development operations. Increased unit test coverage from 50% to 80%",
      skills: "NodeJS, AWS, Cloud, Rest APIs, Serverless, Jenkins, Angular, Git, Bash, EC2, S3, GraphQL, Contentful, Lambda, API Gateway",
      linkHref: "https://research-hub.auckland.ac.nz/#/home",
      linkText: "ResearchHub"
    },
    {
      title: '2FAB',
      description: "Created an microservice hosted on AWS Lambda to using Puppeteer retrieve OAuth2.0 tokens. This allowed us to automate our workflows create integration tests for the ResearchHub which were previously done manually making a GET request.",
      skills: "NodeJS, AWS, APIs, Puppeteer, Serverless, ServiceNow, API Gateway",
      linkHref: "https://github.com/UoA-eResearch/oauth-2fa-bypass",
      linkText: "2FAB"
    },
    {
      title: 'Serverless Now',
      description: "Created an AWS Lambda function intercept ServiceNow requests. The service modifies structure and augments with AWS Cognito user pool information before forwarding the ticket.",
      skills: "NodeJS, AWS, APIs, Serverless, ServiceNow, API Gateway",
    },
    {
      title: 'MyTardis',
      description: "I contributed to the front-end development of the Universty of Auckland's Instrument Data platform which is a hybrid Django and React front-end. I also co-hosted a sprint to create a high fidelity prototype for the front-end design.",
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
    return projectsData.map((project, index) => {
      return <Project key={index} {...project} />;
    })
  }

  return (
    <div className={styles.project}>
      <div id="projects-title" className={styles.project_title}>Projects</div>
      <div className={styles.project_body}>
        {renderProjects(projectsData)}
      </div>
    </div>
  )
}

export default Projects;
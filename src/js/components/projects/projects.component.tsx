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
      description: "Worked on the agilr development team for the ResearchHub migrating functionality to a cloud architecture. Made alterations to front-end components. Helped to CI/CD pipeline for development operations. Increased unit test coverage from 50% to 80%.",
      skills: "NodeJS, AWS, Cloud, Rest APIs, Serverless, Jenkins, Angular, Git, Bash, EC2, S3, GraphQL, Contentful, Lambda, API Gateway",
      linkHref: "https://research-hub.auckland.ac.nz/#/home",
      linkText: "ResearchHub link"
    },
    {
      title: '2FAB',
      description: "Created an microservice hosted on AWS Lambda to using Puppeteer retrieve OAuth2.0 tokens. This allowed us to automate our workflows create integration tests for the ResearchHub which were previously done manually making a GET request.",
      skills: "NodeJS, AWS, APIs, Puppeteer, Serverless, ServiceNow, API Gateway",
      linkHref: "https://github.com/UoA-eResearch/oauth-2fa-bypass",
      linkText: "Github link"
    },
    {
      title: 'Serverless Now',
      description: "Created an AWS Lambda function intercept ServiceNow requests. The service modifies structure and augments with AWS Cognito user pool information before forwarding the ticket.",
      skills: "NodeJS, AWS, APIs, Serverless, ServiceNow, API Gateway",
      linkHref: "https://github.com/UoA-eResearch/hub-stack/tree/master/serverless-now",
      linkText: "Github link"
    },
    {
      title: 'MyTardis',
      description: "I contributed to the front-end development of the Universty of Auckland's Instrument Data platform which is a hybrid Django and React front-end. I also co-conducted a sprint to create a high fidelity prototype for the front-end design.",
      skills: "NodeJS, Django, React, front-end, sprint",
      linkHref: "https://github.com/UoA-eResearch/mytardis",
      linkText: "Github link"
    },
    {
      title: 'eDNA Virtual Hub',
      description: "I developed an interactive web application including a complete back-end stack with ingestion pipelines. This project was built to visualize ecological biome metrics and patterns using eDNA collected across New Zealand.",
      skills: "NodeJS, Cypress, Git, SQL, Python, Django, Docker, Bash, HTML, CSS, Nectar",
      linkHref: "uoa-eresearch.github.io/edna/",
      linkText: "eDNA link"
    },
    {
      title: 'Roonka Burial Site Digitization',
      description: "Created Python scripts to programmatically create 3D models without non-manifold geometry to be suitable from 3D volumetric analysis of artefacts in the Roonka aboriginal burial excavation site. Created scripts to calculate points intersecting these volumes in 3D space. Reduced model rigging time from multiple minutes per model to automatically rig hundreds of models in under a second.",
      skills: "Blender, Python, GIS, 3D Modelling, Git",
      linkHref: "https://github.com/UoA-eResearch/roonka_volume_models",
      linkText: "Github link"
    },
    {
      title: 'Peroxiredoxin Fishtank',
      description: "On the development team for an interactive simulation of free radical accretion in peroxiredoxin-3 enzyme. This was VR application was used Jacinda Ardern when visiting our workplace and had a brief installation at Te Papa Museum.",
      skills: "C#, Unity, Git, HTC Vive, Oculus, Virtual Reality",
      linkHref: "https://www.eresearch.auckland.ac.nz/project/visualising-protein-interaction/",
      linkText: "Case study link"
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
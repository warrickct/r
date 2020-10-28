import React from 'react';
import styles from '../app.module.scss';
import { JobPosition } from "./jobPosition/jobRole.component";

interface Position {
  title: String,
  company: String,
  date: String,
  description: Array<String>
};

export function Experience() {

  let positionData = [
    {
      title: 'eResearch Engagement Specialist',
      company: 'The University of Auckland',
      date: '2020 Mar. - present',
      description: [
        "Worked on a team with 3 other software developers in an agile environment.",
        "Developed to an Angular application.",
        "Migrated a large Angular application to serverless architecture.",
        "Develop multiple micro-services hosted within AWS cloud infrastructure.",
        "Set up and optimized CI/CD pipelines.",
        "Programmed contributions to React and Django applications"
        // "Angular front end development.",
        // "Amazon Web Services development and solution architecture.",
        // "API and microservice development.",
        // "Continuous Integration and deployment development.",
        // "Develop React front end development."
      ]
    },
    {
      title: 'Solutions Analyst',
      company: 'The University of Auckland',
      date: '2018 Oct. - Mar. 2020',
      description: [
        "Full Stack development.",
        "3D application and virtual reality development.",
        "Collaborate with researchers to gather technical requirements and provide technical knowledge.",
        "Lead and assist in software development workshops and training.",
        "Showcase and represent technical demonstrations of projects created by the organization.",
        "Provide technical support to virtual machines and large data storage."
      ]
    },
    {
      title: 'eResearch IT Support',
      company: 'The University of Auckland',
      date: 'Aug. 2017 - Oct. 2018',
      description: [
        "Assisted in the software development of various research projects.",
        "Piloted software for researchers requiring assistance.",
        "Provided assistance in teaching and workshops."
      ]
    },
  ]

  const renderPositions = (positionsData: Array<Position>) => {
    return positionsData.map((posData, index) => {
      return (
        <JobPosition key={index} {...posData} />
      )
    })
  }

  return (
    <div className="section">
      <div id="experience-header" className={styles.sectionTitle}>Work Experience</div>
      {renderPositions(positionData)}
    </div>
  )
}

export default Experience;
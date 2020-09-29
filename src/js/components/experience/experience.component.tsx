import React from 'react';
import './experience.component.css'
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
        "Angular front end development.",
        "Amazon Web Services development and solution architecting.",
        "API and microservice development.",
        "Continuous Integration and deployment development.",
        "React front end development."
      ]
    },
    {
      title: 'Solutions Analyst',
      company: 'The University of Auckland',
      date: '2018 Oct. - Mar. 2020',
      description: [
        "Full-stack development.",
        "3D application and virtual reality development.",
        "Collaborate with researchers to gather technical requirements and provide technical knowledge.",
        "Lead and assist in software development workshops and training.",
        "Showcase and represent technical demonstrations of projects created by the organisation.",
        "Provide technical support to virtual machines and large data storage."
      ]
    },
    {
      title: 'eResearch IT Support',
      company: 'The University of Auckland',
      date: 'eResearch IT Support',
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
      <div id="experience-header" className="section__title">Experience</div>
      {renderPositions(positionData)}
    </div>
  )
}

export default Experience;
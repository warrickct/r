import React from 'react';
import './experience.component.css'
import { JobPosition } from "./jobPosition/jobRole.component";

export function Experience() {

  let positions = [
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
    }
  ]

  return (
    <div className="section">
      <div id="experience-header" className="section__title">Experience</div>
      <JobPosition {...positions[0]} />
      <div className="job">
        <div className="job job__title">eResearch IT Support</div>
        <div className="job job__company">Centre for eResearch</div>
        <div className="job job__date">2017 Aug. - 2018 Oct.</div>
        <div className="job job__description">
          <ul>
            <li>
              Assisted in the software development of various research projects.
          </li>
            <li>
              Piloted software for researchers requiring assistance.
          </li>
            <li>
              Provided assistance in teaching and workshops.
          </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience;
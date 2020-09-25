import React from 'react';
import './experience.component.css'

export default function Experience() {

    return (
       <div className="section">
    <div id="experience-header" className="section__title">Experience</div>
    <div className="section-body section-body--hidden">
      <div className="job job__title">Solutions Analyst</div>
      <div className="job job__company">Centre for eResearch</div>
      <div className="job job__date">2018 Oct. - Present</div>
      <div className="job job__description">
        <ul>
          <li>
            Full-stack development.
          </li>
          <li>
            3D Application and Virtual Reality development.
          </li>
          <li>
            Collaborate with researchers to gather technical requirements and provide technical knowledge.
          </li>
          <li>
            Lead and assist in software development workshops and training.
          </li>
          <li>
            Showcase and represent technical demonstrations of projects created by the organisation.
          </li>
          <li>
            Provide technical support to virtual machines and large data storage.
          </li>
        </ul>
      </div>
    </div>
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
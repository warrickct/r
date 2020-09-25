import React from 'react';
import './miscellaneous.component.css'

export function Miscellaneous() {

  return (
    <div className="section">
      <div id="skills-header" className="section__title">Skills && Interests</div>
      <div className="skills">
        <div className="skills__title">Skills</div>
        <ul>
          <li>
            HTML, SASS, CSS, Cypress, NodeJS, Python, C#, Terminal, Unity, Git, Blender, Testing, SQL, Virtualization,
            Bash, Nectar, ServiceNow
        </li>
          <li>
            Public speaking, teaching, dynamic problem solving, multitasking, time management
        </li>
        </ul>
      </div>
      <div className="interests">
        <div className="interests__title">Interests</div>
        <ul>
          <li>
            Photography, fishkeeping, guitar, fitness
        </li>
        </ul>
      </div>
    </div>
  )
}

export default Miscellaneous;
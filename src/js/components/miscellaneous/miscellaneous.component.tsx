import React from 'react';
import styles from './miscellaneous.module.scss'

export function Miscellaneous() {

  return (
    <div className={styles.misc}>
      <div id="skills-header" className={styles.misc_header}>Skills && Interests</div>
      <div className={styles.misc_title}>
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
        <div className={styles.misc_title}>Interests</div>
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
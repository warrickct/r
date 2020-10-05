import React from 'react';
import styles from './miscellaneous.module.scss'
import globalStyles from '../app.module.scss';

export function Miscellaneous() {

  return (
    <div className={styles.misc}>
      <div id="skills-header" className={globalStyles.sectionTitle}>Skills && Interests</div>
      <div>
        <div className={styles.misc_title}>Skills</div>
        <ul>
          <li>
            Javascript, Angular, AWS, GraphQL, Python, C#, CI/CD, CSS, HTML, Bash, Git, React, Unity, SQL, Docker
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
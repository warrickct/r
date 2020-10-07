import React from 'react';
import styles from './education.module.scss'
import globalStyles from '../app.module.scss'

export function Education() {

  return (
    <div className="section">
      <div id="education-header" className={globalStyles.sectionTitle}>Education</div>
      <div className={styles.education_body}>
        <div className={styles.education}>
          <div className={styles.education___left}>
            <div className={styles.education_title}>University of Auckland</div>
            <div>
              B.Sc. Major in Computer Science
          </div>
          </div>
          <div className={styles.education_details}>
            <div className="">Auckland, New Zealand</div>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Education;
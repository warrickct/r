import React from 'react';
import styles from '../app.module.scss';
import { JobPosition } from "./jobPosition/jobRole.component";
import { resumeData } from '../../../resume_data';

interface Position {
  title: String,
  company: String,
  date: String,
  description: Array<String>
};

export function Experience() {
  let { experienceList } = resumeData

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
      {renderPositions(experienceList)}
    </div>
  )
}

export default Experience;
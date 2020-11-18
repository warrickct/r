import React from 'react';
import styles from './projects.module.scss';
import globalStyles from '../app.module.scss';
import { Project } from "./project/project.component";
import { resumeData } from '../../../resume_data';

interface ProjectProps {
  title: String,
  description: String,
  skills: String,
  linkText?: String;
  linkHref?: String;
}

export function Projects() {

  let { projectsList } = resumeData;

  const renderProjects = (projectsData: Array<ProjectProps>) => {
    return projectsData.map((project, index) => {
      return <Project key={index} {...project} />;
    })
  }

  return (
    <div className={styles.project}>
      <div id="projects-title" className={globalStyles.sectionTitle}>Projects</div>
      <div className={styles.project_body}>
        {renderProjects(projectsList)}
      </div>
    </div>
  )
}

export default Projects;
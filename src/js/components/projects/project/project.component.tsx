import React from 'react';
import styles from './project.module.scss';

interface ProjectProps {
  title: String,
  description: String,
  skills: String,
  linkText?: String,
  linkHref?: String
}

const renderLink = (props: ProjectProps) => {
  if (props.linkHref) {
    return (
      <div className={styles.project_link}><a href={ "" + props.linkHref }>{props.linkText}</a></div>
    )
  }
}

export function Project(props: ProjectProps) {
  const { title, description, skills } = props;

  return (
    <div className={styles.project}>
      <div className={styles.project_title}>{title}</div>
      <div className={styles.project_description}>{description}</div>
      <div className={styles.project_skills}>// {skills}</div>
      { renderLink(props )}
    </div>
  )
}

export default Project;
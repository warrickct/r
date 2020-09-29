import React from 'react';
import styles from './project.css';

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
      <div className={styles.project__link}><a href={ "" + props.linkHref }>{props.linkText}</a></div>
    )
  }
}

export function Project(props: ProjectProps) {
  const { title, description, skills } = props;

  return (
    <div className={styles.project}>
      <div className={styles.project__title}>{title}</div>
      <div className={styles.project__description}>{description}</div>
      <div className={styles.project__skills}>// {skills}</div>
      { renderLink(props )}
    </div>
  )
}

export default Project;
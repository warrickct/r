import React from 'react';
import './project.component.css'

interface ProjectProps {
  title: String,
  description: String,
  skills: String
}

export function Project(props: ProjectProps) {
  const { title, description, skills } = props;

  return (
    <div className="project">
      <div className="project__title">{title}</div>
      <div className="project__description">{description}</div>
      <div className="project__skills">// {skills}</div>
    </div>
  )
}

export default Project;
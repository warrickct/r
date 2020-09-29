import React from 'react';
import './project.component.css'

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
      <div className="project__link"><a href={ "" + props.linkHref }>{props.linkText}</a></div>
    )
  }
}

export function Project(props: ProjectProps) {
  const { title, description, skills } = props;

  return (
    <div className="project">
      <div className="project__title">{title}</div>
      <div className="project__description">{description}</div>
      <div className="project__skills">// {skills}</div>
      { renderLink(props )}
    </div>
  )
}

export default Project;
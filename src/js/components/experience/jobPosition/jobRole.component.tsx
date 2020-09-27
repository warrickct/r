import { title } from 'process';
import React from 'react';
import './jobRole.css'

interface Props {
  title: String,
  company: String,
  date: String,
  description: Array<String>
};

export const JobPosition = (props: Props) => {

  const { title, company, date, description } = props;

  const descriptionBullets = (description: Array<String>) => {
    return description.map(string => {
      return (
        <li>
          {string}
        </li>
      )
    })
  }

  return (
    <div className="section-body section-body--hidden">
      <div className="job job__title">{title}</div>
      <div className="job job__company">{company}</div>
      <div className="job job__date">{date}</div>
      <div className="job job__description">
        <ul>
          {descriptionBullets(description)}
        </ul>
      </div>
    </div>
  )
}

export default JobPosition;
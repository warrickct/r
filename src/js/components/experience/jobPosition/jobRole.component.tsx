import { title } from 'process';
import React from 'react';
import styles from './jobRole.module.scss';

interface Props {
  title: String,
  company: String,
  date: String,
  description: Array<String>
};

export const JobPosition = (props: Props) => {

  const { title, company, date, description } = props;

  const descriptionBullets = (description: Array<String>) => {
    return description.map((string, index) => {
      return (
        <li key={index}>
          {string}
        </li>
      )
    })
  }

  return (
    <div className={styles.job}>
      <div className={styles.job_title}>{title}</div>
      <div className={styles.job_company}>{company}</div>
      <div className={styles.job_date}>{date}</div>
      <div className={styles.job_description}>
        <ul>
          {descriptionBullets(description)}
        </ul>
      </div>
    </div>
  )
}

export default JobPosition;
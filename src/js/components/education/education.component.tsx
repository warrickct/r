import React from 'react';
import './education.component.css'

export function Education() {

  return (
    <div className="section">
      <div id="education-header" className="section__title">Education</div>
      <div className="section-body section-body--hidden">
        <div className="education">
          <div className="education--left">
            <div className="education__title">University of Auckland</div>
            <div className="">
              BSc Major in Computer Science
          </div>
          </div>
          <div className="education__details">
            <div className="">Auckland, New Zealand</div>
        </div>
        </div>
      </div>
    </div>
  )
}
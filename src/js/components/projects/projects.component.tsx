import React from 'react';
import './projects.component.css'

export function Projects() {

    return (
      <div className="section">
    <div id="projects-title" className="section__title">Projects</div>
    <div className="section-body">
      <div className="project">
        <div className="project__title">eDNA Virtual Hub</div>
        <div className="project__description">
          Developed a web application and back end built to visualize eDNA data from samples collected across New
          Zealand.
        </div>
        <div className="project__skills">
          // NodeJS, Cypress, Git, SQL, Python, Django, Docker, Bash, HTML, CSS, Nectar
        </div>
      </div>
      <div className="project">
        <div className="project__title">Roonka Burial Site Digitization</div>
        <div className="project__description">
          Created Python scripts to programmatically create 3D models suitable for 3D volumetric analysis of artefacts
          in the Roonka aboriginal burial excavation site.
        </div>
        <div className="project__skills">
          // Blender, Python, GIS, 3D Modelling, Git
        </div>
      </div>
      <div className="project">
        <div className="project__title">Peroxiredoxin Fishtank</div>
        <div className="project__description">
          Developed features and fixed errors for an interactive simulation of free radical accretion in peroxiredoxin 3
          enzyme.
        </div>
        <div className="project__skills">
          // C#, Unity, Git, HTC Vive, Oculus, Virtual Reality
        </div>
      </div>
      <div className="project">
        <div className="project__title">Molpath - Interactive Polypeptides </div>
        <div className="project__description">
          Developed features and fixed errors of a featuring polypeptide creation with virtual reality interactivity.
        </div>
        <div className="project__skills">
          // C#, Unity, Git, HTC Vive, Oculus, Virtual Reality
        </div>
      </div>
    </div>
  </div>
    )
}

export default Projects;
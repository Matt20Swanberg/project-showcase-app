import React, { useState } from "react"

function ProjectCard({title, description}) {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
    </div>
  );
}

export default ProjectCard;
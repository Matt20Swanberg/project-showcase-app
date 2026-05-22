import React, { useState } from "react"

function ProjectCard({ title, description, id, handleDeleteProject }) {
  return (
    <div className="project-card">
      <div className="card-header">
        <h3 className="project-title">{title}</h3>
        <button
          className="delete-project-button"
          onClick={() => handleDeleteProject(id)}
        >
          X
        </button>
      </div>
      <p className="project-description">{description}</p>
    </div>
  );
}

export default ProjectCard;
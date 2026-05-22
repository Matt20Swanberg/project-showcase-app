import React, { useState } from "react"

// ProjectCard displays an individual project and handles deletion
function ProjectCard({ title, description, id, handleDeleteProject }) {
  return (
    <div className="project-card">

      {/* Header section containing project title and delete button */}
      <div className="card-header">
        <h3 className="project-title">{title}</h3>

        {/* Deletes the selected project */}
        <button
          className="delete-project-button"
          onClick={() => handleDeleteProject(id)}>
          X
        </button>
      </div>

      {/* Displays the project description */}
      <p
        className="project-description">
        {description}
      </p>

    </div>
  );
}

export default ProjectCard;
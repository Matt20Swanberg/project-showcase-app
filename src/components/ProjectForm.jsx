// Import React hook for managing local component state
import React, { useState } from "react";

// ProjectForm handles user input for creating new projects
function ProjectForm({ onAddProject }) {

    // Stores the project title input value
    const [title, setTitle] = useState("");

    // Stores the project description input value
    const [description, setDescription] = useState("");

    // Stores validation error messages
    const [error, setError] = useState("");

    // Handles form submission and validation
    function handleSubmit(e) {
        e.preventDefault();

        // Prevent submission if either field is empty
        if (title.trim() === "" || description.trim() === "") {
            setError("Please enter both a project Title and Description.");
            return;
        };

        // Create a new project object
        const newProject = {
            id: Date.now(),
            title: title,
            description: description
        };

        // Pass new project data to App component
        onAddProject(newProject);

        // Clear form fields after successful submission
        setTitle("");
        setDescription("");

        // Clear validation error message
        setError("");
    }

    return (
        <section className="form-card">
            <form onSubmit={handleSubmit}>

                <h2 className="section-title">Add Project</h2>

                {/* Project title input */}
                <input
                    className="form-input"
                    type="text"
                    placeholder="Project Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    className="form-textarea"
                    placeholder="Project Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}>
                </textarea>

                {/* Displays validation error message */}
                {error && <p className="error-message">{error}</p>}

                {/* Submits the project form */}
                <button
                    className="primary-button"
                    type="submit">
                    Add New Project
                </button>
            </form>
        </section>
    );
}

export default ProjectForm;
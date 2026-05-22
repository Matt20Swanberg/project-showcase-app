import React, { useState } from "react";

function ProjectForm({ onAddProject }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const newProject = {
            id: Date.now(),
            title: title,
            description: description
        }

        if (title.trim() === "" || description.trim() === "") {
            setError("Please enter both a project Title and Description.");
            return;
        }

        onAddProject(newProject);
        setTitle("");
        setDescription("");
        setError("");
    }

    return (
        <section className="form-card">
            <form onSubmit={handleSubmit}>

                <h2 className="section-title">Add Project</h2>

                <input className="form-input" type="text" placeholder="Project Title" value={title} onChange={(e) => setTitle(e.target.value)} />

                <textarea className="form-textarea" placeholder="Project Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                {error && <p className="error-message">{error}</p>}

                <button className="primary-button" type="submit">Add New Project</button>
            </form>
        </section>
    );
}

export default ProjectForm;
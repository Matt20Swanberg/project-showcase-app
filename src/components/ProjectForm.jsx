import React, { useState } from "react";

function ProjectForm({ onAddProject }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    function handleSubmit(e) {
        e.preventDefault();

        const newProject = {
            id: Date.now(),
            title: title,
            description: description
        }

        onAddProject(newProject)
        setTitle("")
        setDescription("")
    }

    return (
        <section className="form-card">
            <form onSubmit={handleSubmit}>

                <h2 className="section-title">Add Project</h2>

                <input className="form-input" type="text" placeholder="Project Title" value={title} onChange={(e) => setTitle(e.target.value)} />

                <textarea className="form-textarea" placeholder="Project Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                <button className="primary-button" type="submit">Add New Project</button>
            </form>
        </section>
    );
}

export default ProjectForm;
import ProjectCard from "./ProjectCard";

function ProjectList({ projects, searchTerm, handleDeleteProject }) {

    if (searchTerm.length > 0 && projects.length === 0) {

        return (
            <section className="project-list">
                <h3 className="empty-state">No projects match the searched query</h3>
                <p className="empty-state">Refine your search or add a project above!</p>
            </section>
        );
    }

    else if (projects.length === 0) {
        return (
            <section className="project-list">
                <h3 className="empty-state">No projects added yet</h3>
                <p className="empty-state">Add your first project above!</p>
            </section>
        );
    }

    return (
        <section className="project-list">
            {projects.map(project => (

                <ProjectCard key={project.id} title={project.title} description={project.description} id={project.id} handleDeleteProject={handleDeleteProject} />
            ))}
        </section>
    );
}

export default ProjectList;
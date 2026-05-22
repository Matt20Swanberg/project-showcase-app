import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {

    return (
        <section className="project-list">
            {projects.map(project => (

                <ProjectCard key={project.id} title={project.title} description={project.description} />
            ))}
        </section>
    );
}

export default ProjectList;
// Import React hook for state management
import React, { useState } from "react";

// Import application components
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

// Import application styling
import "./styles/App.css"
import "./styles/index.css"

function App() {

  // Stores all created projects
  const [projects, setProjects] = useState([]);

  // Stores the current search input value
  const [searchTerm, setSearchTerm] = useState("")

  // Adds a new project to the projects array
  function handleCreateProject(project) {
    const mergedProjects = [...projects, project]
    setProjects(mergedProjects)
  }

  // Removes a project based on its unique id
  function handleDeleteProject(id) {
    const updatedProjects = projects.filter(project => id !== project.id)
    setProjects(updatedProjects);
  }

  const filteredProjects = projects.filter((project) =>
    project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()));

  console.log("searchTerm:", searchTerm);
  console.log("filteredProjects:", filteredProjects);

  return (
    <div className="app-container">
      <Header />

      {/* Form for creating new projects */}
      <ProjectForm onAddProject={handleCreateProject} />

      {/* Search input for filtering projects */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Displays filtered project results */}
      <ProjectList projects={filteredProjects} searchTerm={searchTerm} handleDeleteProject={handleDeleteProject} />
    </div>
  );
}

export default App;
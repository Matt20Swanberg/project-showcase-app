import React, { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

import "./styles/App.css"
import "./styles/index.css"

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  function handleCreateProject(project) {
    const mergedProjects = [...projects, project]
    setProjects(mergedProjects)
  }

  const filteredProjects = projects.filter((project) => project.title.toLowerCase().includes(searchTerm.toLowerCase()));

  console.log("searchTerm:", searchTerm);
  console.log("filteredProjects:", filteredProjects);

  return (
    <div className="app-container">
      <Header />
      <ProjectForm onAddProject={handleCreateProject} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
import { useState } from "react";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Project 1", description: "Description of the project" },
    { id: 2, title: "Project 2", description: "Description of the project" },
    { id: 3, title: "Project 3", description: "Description of the project" },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");

  // Add a new project
  const handleAddProject = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newProject = {
      id: Date.now(),
      title,
      description,
    };

    setProjects([newProject, ...projects]);
    setTitle("");
    setDescription("");
  };

  // Delete a project
  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  // Filtered projects for search
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Personal Project Showcase</h1>

      {/* Add Project Form */}
      <ProjectForm
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        handleAddProject={handleAddProject}
      />

      {/* Search Bar */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Project List */}
      <ProjectList
        projects={filteredProjects}
        handleDeleteProject={handleDeleteProject}
      />
    </div>
  );
}

export default App;

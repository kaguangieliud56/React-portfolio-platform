import ProjectItem from "./ProjectItem";

function ProjectList({ projects, handleDeleteProject }) {
  if (projects.length === 0) return <p>No projects found</p>;

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          title={project.title}
          description={project.description}
          onDelete={() => handleDeleteProject(project.id)}
        />
      ))}
    </div>
  );
}

export default ProjectList;

function ProjectItem({ title, description, onDelete }) {
  return (
    <div className="project-item">
      <div className="thumbnail" onClick={onDelete}>
        ✕
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectItem;

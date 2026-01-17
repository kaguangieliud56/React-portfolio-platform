function ProjectForm({ title, description, setTitle, setDescription, handleAddProject }) {
  return (
    <form className="form" onSubmit={handleAddProject}>
      <h2>Add Project</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ProjectForm;

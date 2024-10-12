import React, { useState } from 'react';
import './ProjectManagement.css'; // Import the CSS file

const ProjectManagement = ({ addProject, projects, editProject, deleteProject, setShowProjectManagement }) => { // Accept prop
  const [project, setProject] = useState({ name: '', dueDate: '', status: 'active' });
  const [isEditing, setIsEditing] = useState(false);
  const [editProjectId, setEditProjectId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editProject({ ...project, id: editProjectId });
      setIsEditing(false);
    } else {
      addProject(project);
    }
    setProject({ name: '', dueDate: '', status: 'active' }); // Reset form
    setShowProjectManagement(false); // Close the Project Management component
  };

  const handleEdit = (project) => {
    setIsEditing(true);
    setEditProjectId(project.id);
    setProject({ name: project.name, dueDate: project.dueDate, status: project.status });
  };

  const handleDelete = (id) => {
    deleteProject(id);
  };

  return (
    <div className="project-management">
      <h2>{isEditing ? 'Edit Project' : 'Add New Project'}</h2>
      <form onSubmit={handleSubmit} className="project-form">
        <div className="form-group">
          <label>Project Name</label>
          <input
            type="text"
            placeholder="Enter project name"
            value={project.name}
            onChange={(e) => setProject({ ...project, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Due Date</label>
          <input
            type="date"
            value={project.dueDate}
            onChange={(e) => setProject({ ...project, dueDate: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            value={project.status}
            onChange={(e) => setProject({ ...project, status: e.target.value })}
          >
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          {isEditing ? 'Save Changes' : 'Add Project'}
        </button>
      </form>

      <div className="project-list">
        <h2>Project List</h2>
        <ul>
          {projects.map((proj) => (
            <li key={proj.id}>
              <span>{proj.name} (Due: {proj.dueDate}, Status: {proj.status})</span>
              <button onClick={() => handleEdit(proj)} className="edit-btn">
                Edit
              </button>
              <button onClick={() => handleDelete(proj.id)} className="delete-btn">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectManagement;

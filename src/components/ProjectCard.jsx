import React from 'react';

const ProjectCard = ({ project }) => {
  const { name, dueDate, status } = project;
  return (
    <div className="card">
      <h4>{name}</h4>
      <p>Due Date: {dueDate}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default ProjectCard;

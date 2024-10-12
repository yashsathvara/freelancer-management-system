import React from 'react';
import ProjectCard from './ProjectCard';
import BarChart from './BarChart'; // Mock data chart component
import './Dashboard.css'; // Import the CSS file

const Dashboard = ({ projects, editProject, deleteProject }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Project Dashboard</h2>
      </div>

      <div className="project-cards-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            editProject={editProject}
            deleteProject={deleteProject}
          />
        ))}
      </div>

      <div className="earnings-overview">
        <h3>Earnings Overview</h3>
        <BarChart />
      </div>
    </div>
  );
};

export default Dashboard;

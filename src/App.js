import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import ProjectManagement from './components/ProjectManagement';
import PaymentTracking from './components/PaymentTracking';
import Navbar from './components/Navbar';

const App = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Website Redesign', dueDate: '2024-10-30', status: 'active' },
    // Other mock projects
  ]);

  const [payments, setPayments] = useState([
    { id: 1, amount: 1000, status: 'unpaid' },
    // Other mock payments
  ]);

  const [showProjectManagement, setShowProjectManagement] = useState(false); // State for managing visibility

  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
  };

  const editProject = (updatedProject) => {
    setProjects(projects.map((project) =>
      project.id === updatedProject.id ? updatedProject : project
    ));
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const markAsPaid = (id) => {
    setPayments(
      payments.map((payment) => 
        payment.id === id ? { ...payment, status: 'paid' } : payment
      )
    );
  };

  return (
    <div className="App">
      <Navbar setShowProjectManagement={setShowProjectManagement} /> {/* Pass setter function */}
      {showProjectManagement && (  // Conditionally render ProjectManagement
        <ProjectManagement
          addProject={addProject}
          projects={projects}
          editProject={editProject}
          deleteProject={deleteProject}
          setShowProjectManagement={setShowProjectManagement} // Pass function to close the modal
        />
      )}
      <Dashboard
        projects={projects}
        editProject={editProject}
        deleteProject={deleteProject}
      />
      <PaymentTracking payments={payments} markAsPaid={markAsPaid} />
    </div>
  );
};

export default App;

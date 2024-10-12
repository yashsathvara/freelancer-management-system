import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = ({ setShowProjectManagement }) => { // Accept prop
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/"><h1>Freelancer Management</h1> </a>
        
      </div>
      <ul className="navbar-links">
        <li><a href="#projects" onClick={() => setShowProjectManagement(true)}>Add Project</a></li> {/* Add onClick event */}
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="/">Payments</a></li>
        <li><a href="#profile">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

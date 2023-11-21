import React from 'react';
function TeamProject({ projectName, status, description }) {
    // This component will render the details of a project
    return (
        <div className="team-project">
          <h3>{projectName}</h3>
          <p>Status: {status}</p>
          <p>Description: {description}</p>
          {/* You can add more project-specific details here */}
        </div>
    );
}
export default TeamProject;

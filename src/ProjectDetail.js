import React from 'react';

const ProjectDetail = ({ project }) => {
  if (!project) return <div>Select a project to see details.</div>;

  return (
    <div className="project-detail">
      <h2>{project.name}</h2>
      <p><strong>Status:</strong> {project.status}</p>
      <p><strong>Description:</strong> {project.description}</p>
      <p><strong>Goals:</strong> {project.goals}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default ProjectDetail;

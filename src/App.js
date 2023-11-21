
import React, { useState, useEffect } from 'react';
import TeamMember from './TeamMember';
import MemberDetail from './MemberDetail';
import TeamProject from './TeamProject';
import ProjectDetail from './ProjectDetail';
import TeamMetrics from './TeamMetrics';
import DiscussionForum from './DiscussionForum';
import './App.css';


const App = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [metrics, setMetrics] = useState({
    projectCompletionRate: 75, // Example value
    averageWorkload: 5, // Example value
    // Add more metric fields as necessary
  });


  useEffect(() => {
    // Here you would typically fetch data for team members and projects
    // For now, using hardcoded samples
    setTeamMembers([
      { id: 1, name: 'Alice Smith', role: 'Project Manager', bio: 'Experienced in managing large teams.' },
      { id: 2, name: 'Bob Johnson', role: 'Frontend Developer', bio: 'Passionate about React and modern web technologies.' },
      { id: 3, name: 'Sarah Busch', role: 'Backend Developer', bio: 'Loves to set up servers.' },
      { id: 4, name: 'Alexander Jones', role: 'Intern', bio: 'Does not know what he is doing' },
    ]);
    setProjects([
      { id: 1, name: 'Project Alpha', status: 'In Progress', description: 'This is a project about...', goals: "to complete it"},
      { id: 2, name: 'Project Beta', status: 'Completed', description: 'This project focuses on...', goals: "N/A" },
      { id: 3, name: 'Project Sigma', status: 'Completed', description: 'This project is now...', goals: "N/A"  },
      { id: 4, name: 'Project Omega', status: 'In Progress', description: 'This project is currently...', goals: "to complete it" },
      { id: 5, name: 'Project Charlie', status: 'Completed', description: 'This project is finished...', goals: "N/A"  },
      { id: 6, name: 'Project Delta', status: 'In Progress', description: 'This project needs attention...', goals: "to complete it" },
    ]);
  }, []);


  const handleMemberClick = member => {
    setSelectedMember(member);
  };


  const handleProjectClick = project => {
    setSelectedProject(project);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Dashboard</h1>
      </header>
      <main>
        <div className="team-section">
          <div className="team-list">
            <h2>Team Members</h2>
            {teamMembers.map(member => (
              <div key={member.id} onClick={() => handleMemberClick(member)}>
                <TeamMember {...member} />
              </div>
            ))}
          </div>
          <div className="team-details">
            <MemberDetail member={selectedMember} />
          </div>
        </div>
        <div className="project-section">
          <div className="project-list">
            <h2>Ongoing Projects</h2>
            {projects.map(project => (
              <div key={project.id} onClick={() => handleProjectClick(project)}>
                <TeamProject {...project} />
              </div>
            ))}
          </div>
          <div className="project-details">
            <ProjectDetail project={selectedProject} />
          </div>
        </div>
        <div className="metrics-section">
          <TeamMetrics metrics={metrics} />
        </div>
        <div className="discussion-section">
          <DiscussionForum />
        </div>
      </main>
    </div>
  );
};


export default App;

/*
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
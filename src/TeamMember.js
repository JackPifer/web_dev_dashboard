// code for TeamMember.js
import React from 'react';

function TeamMember({ name, role, bio }) {
  return (
    <div className="team-member">
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{bio}</p>
    </div>
  );
}

export default TeamMember;

import React from 'react';

const MemberDetail = ({ member }) => {
  if (!member) return <div>Select a team member to see details.</div>;

  return (
    <div className="member-detail">
      <h2>{member.name}</h2>
      <p><strong>Role:</strong> {member.role}</p>
      <p><strong>Bio:</strong> {member.bio}</p>
      {/* Include additional information here */}
    </div>
  );
}

export default MemberDetail;

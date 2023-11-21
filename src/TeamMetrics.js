import React from 'react';

const TeamMetrics = ({ metrics }) => {
  return (
    <div className="team-metrics">
      <h2>Team Metrics</h2>
      {/* Example metrics - replace with real data */}
      <p>Project Completion Rate: {metrics.projectCompletionRate}%</p>
      <p>Average Team Member Workload: {metrics.averageWorkload} tasks</p>
      {/* Add more metrics as needed */}
    </div>
  );
}

export default TeamMetrics;

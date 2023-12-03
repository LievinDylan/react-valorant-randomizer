import React from 'react';

import { DataItem } from '../../@types/agent.d';

function AgentInfo({ agent }: { agent: DataItem }) {
  if (agent === undefined) {
    return <div>Agent not found</div>;
  }

  return (
    <div>
      <img
        className="w-2/5 h-auto"
        src={agent.fullPortrait}
        alt={`a full portrait of ${agent.displayName}`}
      />
      <h4>{agent.displayName}</h4>
    </div>
  );
}

export default AgentInfo;

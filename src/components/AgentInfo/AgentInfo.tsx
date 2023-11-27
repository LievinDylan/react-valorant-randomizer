import React from 'react';

import { DataItem } from '../../zustand/agents';

function AgentInfo({ agent }: { agent: DataItem }) {
  if (!agent) {
    return <div>Agent not found</div>;
  }

  return (
    <div>
      <h1>{agent.displayName}</h1>
    </div>
  );
}

export default AgentInfo;

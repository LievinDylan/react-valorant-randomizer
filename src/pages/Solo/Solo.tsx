import React, { useState } from 'react';

import useAgentStore from '../../zustand/agent';

import AgentsList from '../../components/AgentsList/AgentsList';
import AgentInfo from '../../components/AgentInfo/AgentInfo';

function Solo() {
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);
  const { data, fetchData } = useAgentStore();

  const handleRandomSelect = () => {
    const randomIndex = Math.floor(Math.random() * selectedAgents.length);
    fetchData(selectedAgents[randomIndex]);
  };

  return (
    <>
      <AgentsList
        selectedAgents={selectedAgents}
        setSelectedAgents={setSelectedAgents}
      />
      <button type="button" className="btn" onClick={handleRandomSelect}>
        Randomizer
      </button>
      {data && <AgentInfo agent={data} />}
    </>
  );
}

export default Solo;

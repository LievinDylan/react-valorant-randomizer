import React, { useState } from 'react';

import useAgentStore from '../../zustand/agent';

import AgentsList from '../../components/AgentsList/AgentsList';
import AgentInfo from '../../components/AgentInfo/AgentInfo';
import WeaponList from '../../components/WeaponsList/WeaponList';

function Solo() {
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);
  const [isClickedAgent, setIsClickedAgent] = useState<boolean>(false);

  const { data, fetchData } = useAgentStore();

  const handleRandomSelect = () => {
    const randomIndex = Math.floor(Math.random() * selectedAgents.length);
    fetchData(selectedAgents[randomIndex]);
    setIsClickedAgent(true);
  };

  return (
    <div className="flex flex-col">
      <section className="flex flex-col justify-center items-center">
        <AgentsList
          selectedAgents={selectedAgents}
          setSelectedAgents={setSelectedAgents}
        />
      </section>
      <button
        type="button"
        className="btn"
        onClick={handleRandomSelect}
        aria-label="button to display a random agent"
      >
        Randomizer
      </button>
      <section className="flex">
        {data && isClickedAgent && <AgentInfo agent={data} />}
        {data && <WeaponList />}
      </section>
    </div>
  );
}

export default Solo;

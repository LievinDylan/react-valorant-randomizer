import React, { useEffect } from 'react';

import useAgentsStore from '../../zustand/agents';
import AgentsListBtn from '../AgentsListBtn/AgentsListBtn';

function AgentsList({
  setSelectedAgents,
  selectedAgents,
}: {
  setSelectedAgents: React.Dispatch<React.SetStateAction<string[]>>;
  selectedAgents: string[];
}) {
  // import from my zustand store
  const { fetchData, data } = useAgentsStore();

  // call the fetchData function when the component mounts
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // add all agents to the selectedAgents array when the component mounts
  useEffect(() => {
    data.forEach((agent) => {
      setSelectedAgents((prev) => {
        if (!prev.includes(agent.uuid)) {
          return [...prev, agent.uuid];
        }
        return prev;
      });
    });
  }, [data, setSelectedAgents]);

  // add or remove agents from the selectedAgents array when the checkbox is clicked
  const handleCheckboxChange = (uuid: string) => {
    if (selectedAgents.includes(uuid)) {
      setSelectedAgents(selectedAgents.filter((id) => id !== uuid));
    } else {
      setSelectedAgents([...selectedAgents, uuid]);
    }
  };

  // add all agents to the selectedAgents array when the "All" button is clicked
  const handleAllSelect = () => {
    data.forEach((agent) => {
      setSelectedAgents((prev) => {
        if (!prev.includes(agent.uuid)) {
          return [...prev, agent.uuid];
        }
        return prev;
      });
    });
  };

  // add agents to the selectedAgents array when the "Duelists" button is clicked
  const handleDuelistsSelect = () => {
    setSelectedAgents([]);
    data.forEach((agent) => {
      if (agent.role.displayName === 'Duelist') {
        setSelectedAgents((prev) => {
          if (!prev.includes(agent.uuid)) {
            return [...prev, agent.uuid];
          }
          return prev;
        });
      }
    });
  };

  // add agents to the selectedAgents array when the "Initiators" button is clicked
  const handleInitiatorsSelect = () => {
    setSelectedAgents([]);
    data.forEach((agent) => {
      if (agent.role.displayName === 'Initiator') {
        setSelectedAgents((prev) => {
          if (!prev.includes(agent.uuid)) {
            return [...prev, agent.uuid];
          }
          return prev;
        });
      }
    });
  };

  // add agents to the selectedAgents array when the "Sentinels" button is clicked
  const handleSentinelsSelect = () => {
    setSelectedAgents([]);
    data.forEach((agent) => {
      if (agent.role.displayName === 'Sentinel') {
        setSelectedAgents((prev) => {
          if (!prev.includes(agent.uuid)) {
            return [...prev, agent.uuid];
          }
          return prev;
        });
      }
    });
  };

  // add agents to the selectedAgents array when the "Controllers" button is clicked
  const handleControllerSelect = () => {
    setSelectedAgents([]);
    data.forEach((agent) => {
      if (agent.role.displayName === 'Controller') {
        setSelectedAgents((prev) => {
          if (!prev.includes(agent.uuid)) {
            return [...prev, agent.uuid];
          }
          return prev;
        });
      }
    });
  };

  const allAgents = data.map((agent) => (
    <label
      key={agent.uuid}
      aria-label="A checkbox to click on to uncheck or check the agent"
      className="flex flex-col justify-center item-center m-auto"
    >
      <img
        src={agent.displayIcon}
        alt={`A little icon of ${agent.displayName}`}
        className="w-12 h-12"
      />
      <input
        type="checkbox"
        value={agent.uuid}
        checked={selectedAgents.includes(agent.uuid)}
        onChange={() => {
          handleCheckboxChange(agent.uuid);
        }}
      />
    </label>
  ));
  return (
    <>
      <AgentsListBtn type="All" handleTypeSelect={handleAllSelect} />
      <AgentsListBtn type="Duelists" handleTypeSelect={handleDuelistsSelect} />
      <AgentsListBtn
        type="Initiators"
        handleTypeSelect={handleInitiatorsSelect}
      />
      <AgentsListBtn
        type="Sentinels"
        handleTypeSelect={handleSentinelsSelect}
      />
      <AgentsListBtn
        type="Controllers"
        handleTypeSelect={handleControllerSelect}
      />
      <ul className="flex flex-wrap justify-center p-2">{allAgents}</ul>
    </>
  );
}

export default AgentsList;

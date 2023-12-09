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
    <div className="flex flex-col xl:flex-row flex-grow h-full font-mono py-12">
      <section className="w-full xl:w-1/4 h-full xl:h-auto">
        <div className="flex flex-col items-center h-auto m-4 bg-white xl:border-2 xl:border-secondary shadow-xl rounded-md">
          <p className="text-center text-white bg-secondary border-b border-secondary p-2 w-full">
            Choose your available agents or select an agent role:
          </p>
          <AgentsList
            selectedAgents={selectedAgents}
            setSelectedAgents={setSelectedAgents}
          />
        </div>
      </section>

      <section className="w-full xl:w-3/4 h-full xl:h-auto">
        <div className="flex flex-col items-center h-auto m-4 bg-white xl:border-2 xl:border-secondary shadow-xl rounded-md">
          <div className="flex flex-col">
            <p className="text-center text-white bg-secondary border-b border-secondary p-2 w-full">
              Click on &quot;Randomizer&quot; to get your random agent:
            </p>
            <button
              type="button"
              className="btn m-2 bg-secondary btn bg-accent text-white hover:text-accent hover:bg-white w-4/5 p-2 text-xl"
              onClick={handleRandomSelect}
              aria-label="button to get a random agent"
            >
              Randomizer
            </button>
            <div className="flex flex-row">
              {data && isClickedAgent && (
                <div>
                  <AgentInfo agent={data} />
                </div>
              )}

              <p>Choose the weapon generator of your choice:</p>
              {data && (
                <div>
                  <WeaponList />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solo;

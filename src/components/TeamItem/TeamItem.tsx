import { ChangeEvent, useEffect, useState } from 'react';
import Player from '../Player/Player';
import useAgentsStore from '../../zustand/agents';

function TeamItem() {
  const { data, fetchData } = useAgentsStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [numPlayers, setNumPlayers] = useState(1);
  const [isClicked, setIsClicked] = useState(false);

  // Function to shuffle the array of agents
  const shuffle = (array: number[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const allPlayers = () => {
    const shuffledIndices = shuffle([...Array(data.length).keys()]);
    const players = [];

    for (let i = 0; i < numPlayers; i += 1) {
      const randomIndex = shuffledIndices[i];
      players.push(<Player isClicked={isClicked} agent={data[randomIndex]} />);
    }

    return players;
  };

  const handleNumPlayersChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setNumPlayers(Number(event.target.value));
  };

  return (
    <div className="font-mono">
      <select value={numPlayers} onChange={handleNumPlayersChange}>
        {[1, 2, 3, 4, 5].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <div className="flex flex-col">{allPlayers()}</div>
      <button type="button" onClick={() => setIsClicked(!isClicked)}>
        {isClicked ? 'New team' : 'Generate'}
      </button>
    </div>
  );
}

export default TeamItem;

import { useState } from 'react';
import { DataItem } from '../../@types/agent.d';

function Player({ isClicked, agent }: { isClicked: boolean; agent: DataItem }) {
  const [playerValue, setPlayerValue] = useState<string>('');

  return isClicked ? (
    <div className="flex h-auto justify-center items-center p-2 m-2 border">
      <p className="m-2">{playerValue}</p>
      {agent && (
        <img
          className="w-24 h-auto"
          src={agent.displayIcon}
          alt={agent.displayName}
        />
      )}
    </div>
  ) : (
    <input
      type="text"
      className="m-2"
      value={playerValue || ''}
      onChange={(e) => setPlayerValue(e.target.value)}
    />
  );
}

export default Player;

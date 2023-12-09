import Spinner from '../Spinner/Spinner';

import { DataItem } from '../../@types/agent.d';

function AgentInfo({ agent }: { agent: DataItem }) {
  if (!agent.fullPortrait) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="h-auto w-4/5"
        src={agent.fullPortrait}
        alt={`a full portrait of ${agent.displayName}`}
      />
      <h4>{agent.displayName}</h4>
    </div>
  );
}

export default AgentInfo;

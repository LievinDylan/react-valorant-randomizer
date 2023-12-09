import React from 'react';

type AgentsListBtnProps = {
  type: string;
  handleTypeSelect: () => void;
};

function AgentsListBtn({ type, handleTypeSelect }: AgentsListBtnProps) {
  return (
    <button
      type="button"
      className="btn m-2 hover:bg-accent hover:text-secondary text-white bg-secondary"
      onClick={handleTypeSelect}
      aria-label={`Button to select ${type} agents`}
    >
      {type}
    </button>
  );
}

export default AgentsListBtn;

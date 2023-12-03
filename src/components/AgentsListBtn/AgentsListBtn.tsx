import React from 'react';

type AgentsListBtnProps = {
  type: string;
  handleTypeSelect: () => void;
};

function AgentsListBtn({ type, handleTypeSelect }: AgentsListBtnProps) {
  return (
    <button
      type="button"
      className="btn mx-4"
      onClick={handleTypeSelect}
      aria-label={`Button to select ${type} agents`}
    >
      Select {type}
    </button>
  );
}

export default AgentsListBtn;

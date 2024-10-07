import React from 'react';

const PlayerInput = ({ playerName, setPlayerName }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Enter your name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default PlayerInput;

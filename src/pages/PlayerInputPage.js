import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlayerInputPage = () => {
  const [playerName, setPlayerName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerName) {
      navigate('/quiz', { state: { playerName } });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Enter Your Name</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Your Name"
          className="p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Start Quiz
        </button>
      </form>
    </div>
  );
};

export default PlayerInputPage;

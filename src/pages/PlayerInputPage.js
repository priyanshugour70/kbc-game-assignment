import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-2xl font-bold mb-4">Enter Your Name</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Your Name"
            className="p-2 mb-4 border border-gray-300 rounded w-full md:w-1/2"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full md:w-1/3">
            Start Quiz
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PlayerInputPage;

import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const baseUrl = "https://kbc-game-indroyd-labs.vercel.app";

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 transition duration-500">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold mb-4 animate-pulse">Scan to Play KBC</h1>
        <QRCodeSVG value={`${baseUrl}/player-input`} size={256} className="shadow-lg hover:shadow-2xl transition-shadow duration-300" />
        <p className="mt-2 text-gray-600 text-lg">Scan this QR code to enter your name!</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

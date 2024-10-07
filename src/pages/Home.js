import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const Home = () => {
  const baseUrl = "http://localhost:3000";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Scan to Play KBC</h1>
      <QRCodeSVG value={`${baseUrl}/player-input`} size={256} />
      <p className="mt-2 text-gray-600">Scan this QR code to enter your name!</p>
    </div>
  );
};

export default Home;

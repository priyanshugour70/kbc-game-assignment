import React from 'react';

const ResultDisplay = ({ message }) => {
  return (
    <div className="mt-4">
      <p className="text-lg">{message}</p>
    </div>
  );
};

export default ResultDisplay;

import React from 'react';

const Question = ({ question, options, onAnswer }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl mb-4">{question}</h2>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswer(option)}
          className="bg-blue-500 text-white p-2 rounded mb-2"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;

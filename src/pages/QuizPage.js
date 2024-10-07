import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { questions } from '../questions';
import ResultDisplay from '../components/ResultDisplay';
import Question from '../components/Question';

const QuizPage = () => {
  const { state } = useLocation();
  const { playerName } = state || { playerName: 'Player' };
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState('');

  const handleAnswer = (answer) => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (answer === correctAnswer) {
      setAnswerStatus(`Congratulations, ${playerName}! Your answer is correct.`);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setAnswerStatus(`${playerName}, you've completed the quiz!`);
      }
    } else {
      setAnswerStatus(`Sorry, ${playerName}. Your answer is incorrect. Would you like to try the next question?`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Quiz</h1>
      {currentQuestionIndex < questions.length ? (
        <>
          <Question
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            onAnswer={handleAnswer}
          />
          <ResultDisplay message={answerStatus} />
        </>
      ) : (
        <p>{answerStatus}</p>
      )}
    </div>
  );
};

export default QuizPage;

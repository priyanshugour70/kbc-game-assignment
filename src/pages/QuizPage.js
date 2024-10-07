import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { questions } from '../questions';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl font-bold mb-4">Welcome, {playerName}</h1>
        {currentQuestionIndex < questions.length ? (
          <>
            <Question
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options}
              onAnswer={handleAnswer}
            />
          </>
        ) : (
          <ResultDisplay message={`Thanks for playing, ${playerName}!`} />
        )}
        {answerStatus && <ResultDisplay message={answerStatus} />}
      </div>
      <Footer />
    </div>
  );
};

export default QuizPage;

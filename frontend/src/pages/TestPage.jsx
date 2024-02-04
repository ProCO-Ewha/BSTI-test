// TestPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionData from '../QuestionData.json';
import AnswerBtn from '../components/AnswerBtn';
import ResultPage from './ResultPage';
import '../styles/TestPage.css';

const TestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerScores, setAnswerScores] = useState({
    a: 0,
    d: 0,
    e: 0,
    l: 0,
    t: 0,
    s: 0,
    n: 0,
    f: 0,
  });
  const navigate = useNavigate();

  const handleAnswerClick = (answerType) => {
    setAnswerScores((prevScores) => ({
      ...prevScores,
      [answerType]: prevScores[answerType] + 1,
    }));

    if (currentQuestion < QuestionData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/result');
    }
  };

  if (currentQuestion >= QuestionData.length) {
    return <ResultPage answerScores={answerScores} />;
  }

  const currentQuestionData = QuestionData[currentQuestion];
  const backgroundImage = currentQuestionData.backgroundImage;

  return (
    <div className="test-page-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <p className="question-text">
        {currentQuestionData.question}
      </p>
      <div className="overlay"></div>

      {currentQuestionData.answers.map((answer) => (
        <div key={answer.id}>
          <AnswerBtn
            text={answer.text}
            onClick={() => handleAnswerClick(answer.type)}
          />
        </div>
      ))}
    </div>
  );
};

export default TestPage;

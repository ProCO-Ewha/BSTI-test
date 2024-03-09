import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionData from '../QuestionData.json';
import AnswerBtn from '../components/AnswerBtn';
import ResultPage from './ResultPage';
import ResultLoadingPage from './ResultLoadingPage';
import '../styles/TestPage.css';
import axios from 'axios';

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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAnswerClick = (answerType) => {
    setAnswerScores((prevScores) => ({
      ...prevScores,
      [answerType]: prevScores[answerType] + 1,
    }));

    if (currentQuestion < QuestionData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate('/result', { state: answerScores });
      }, 2000);
    }
  };

  if (loading) {
    return <ResultLoadingPage />;
  }

  if (currentQuestion >= QuestionData.length) {
    return <ResultPage />;
  }

  const currentQuestionData = QuestionData[currentQuestion];
  const backgroundImage = currentQuestionData.backgroundImage;

  return (
    <div className="test-page-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <p className="question-text">
        {currentQuestionData.question}
      </p>

      {currentQuestionData.ExplainImage && (
        <div className="explain-image-container">
          <img
            src={currentQuestionData.ExplainImage}
            alt={`Explanation for Question ${currentQuestion + 1}`}
            className="explain-image"
          />
        </div>
      )}

      <div className="overlay"></div>

      <div className="answerline">
        {currentQuestionData.answers.map((answer) => (
          <div key={answer.id}>
            <AnswerBtn
              text={answer.text}
              onClick={() => handleAnswerClick(answer.type)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestPage;

// TestPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionData from '../QuestionData.json';
import AnswerBtn from '../components/AnswerBtn';
import ResultPage from './ResultPage';
import '../styles/TestPage.css'; // CSS 파일 import

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

  return (
    <div className="test-page-container"> {/* 클래스 추가 */}
      <p className="question-text"> {/* 클래스 추가 */}
        {QuestionData[currentQuestion].question}
      </p>
      
      {QuestionData[currentQuestion].answers.map((answer) => (
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

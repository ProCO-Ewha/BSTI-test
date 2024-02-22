// TestPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionData from '../QuestionData.json';
import AnswerBtn from '../components/AnswerBtn';
import ResultPage from './ResultPage';
import ResultLoadingPage from './ResultLoadingPage';
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
      setLoading(true);  // 로딩 상태를 true로 변경
      setTimeout(() => {
        setLoading(false);
        navigate('/result');
      }, 2000);
    }

axios.post('aws 서버 엔드포인트 추가부탁!', {
        countA: answerScores.a,
        countD: answerScores.d,
        countE: answerScores.e,
        countL: answerScores.l,
        countT: answerScores.t,
        countS: answerScores.s,
        countN: answerScores.n,
        countF: answerScores.f,
      })
      .then(() => {
        // 로딩을 2초동안 유지한 후에 결과 페이지로 이동
        setTimeout(() => {
          setLoading(false);
          navigate('/result');
        }, 2000);
      })
      .catch((error) => {
        console.error('결과를 서버에 전송하는 중 오류 발생:', error);
        // 오류 처리
      });
    }
  
  

  if (loading) {
    return <ResultLoadingPage />;
  }

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

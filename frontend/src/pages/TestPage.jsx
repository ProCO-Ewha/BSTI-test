import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionData from '../QuestionData.json';
import AnswerBtn from '../components/AnswerBtn';
import ResultPage from './ResultPage';

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
    // 선택된 답변의 타입에 따라 해당 타입의 변수에 +1
    setAnswerScores((prevScores) => ({
      ...prevScores,
      [answerType]: prevScores[answerType] + 1,
    }));

    // 다음 질문으로 이동
    if (currentQuestion < QuestionData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 마지막 질문인 경우 결과 페이지로 이동
      navigate('/result');
    }
  };

  if (currentQuestion >= QuestionData.length) {
    // 모든 질문에 대한 답변이 완료된 경우 결과 페이지로 이동
    return <ResultPage answerScores={answerScores} />;
  }

  return (
    <div>
      <p>{QuestionData[currentQuestion].question}</p>

      {QuestionData[currentQuestion].answers.map((answer) => (
        <AnswerBtn
          key={answer.id}
          text={answer.text}
          onClick={() => handleAnswerClick(answer.type)}
        />
      ))}
    </div>
  );
};

export default TestPage;

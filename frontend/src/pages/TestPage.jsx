import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TestPage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    A: 0,
    D: 0,
    E: 0,
    L: 0,
    T: 0,
    S: 0,
    N: 0,
    F: 0,
  });

  const handleAnswerSelection = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: prevAnswers[question] + answer,
    }));
  };

  const submitTest = () => {
    // Submit test logic (axios request, etc.)
    // Redirect to result page
    navigate('/result');
  };

  // Render test questions and answer buttons

  return (
    <div>
      <h1>BSTI Test</h1>
      {/* Render test questions and answer buttons */}
      <button onClick={submitTest}>Submit Test</button>
    </div>
  );
};

export default TestPage;

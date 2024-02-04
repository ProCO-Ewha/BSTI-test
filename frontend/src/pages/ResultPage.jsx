import React from 'react';
import { Link } from 'react-router-dom';
import BtnComponent from '../components/BtnComponent';

const ResultPage = () => {
  // Fetch and display MBTI result logic

  return (
    <div>
      <h1>Result Page</h1>
      {/* Display MBTI result */}
      <Link to="/">
        <BtnComponent label="테스트 다시하기" />
      </Link>
    </div>
  );
};

export default ResultPage;

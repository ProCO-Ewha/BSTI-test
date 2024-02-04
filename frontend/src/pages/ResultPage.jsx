import React from 'react';
import { Link } from 'react-router-dom';
import BtnComponent from '../components/BtnComponent';

const ResultPage = () => {
  // Fetch and display MBTI result logic

  return (
    <div>
      <p>당신과 어울리는 블랙서바이벌 캐릭터는?</p>

      {/* Display MBTI result */}

      <Link to="/">
        <BtnComponent label="테스트 다시하기" />
      </Link>
    </div>
  );
};

export default ResultPage;

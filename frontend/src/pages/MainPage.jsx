import React from 'react';
import { Link } from 'react-router-dom';
import BtnComponent from '../components/BtnComponent';

const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <p>내가 블랙서바이벌 캐릭터라면?</p>
      <Link to="/test">
        <BtnComponent label="테스트 시작" />
      </Link>
    </div>
  );
};

export default MainPage;


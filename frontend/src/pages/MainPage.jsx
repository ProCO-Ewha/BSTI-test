import React from 'react';
import { Link } from 'react-router-dom';
import BtnComponent from '../components/BtnComponent';

const MainPage = () => {
  return (
    <div>
      <p style={{ fontSize: '19px', fontWeight: 'bold', color: '#D9EFF6' }}>
        내가 블랙서바이벌 캐릭터라면?
      </p>

      <p>
      <img src="images/bsti_title.png" alt="BSTI-title" style={{ width: '340px'}} />
      </p>
      
      <Link to="/test">
        <BtnComponent label="테스트 시작" />
      </Link>
    </div>
  );
};

export default MainPage;


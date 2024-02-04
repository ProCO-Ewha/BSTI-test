// MainPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import BtnComponent from '../components/BtnComponent';
import MainPageBackground from '../start.png'; // 이미지 경로에 맞게 수정
import '../styles/MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page-container">
      <div className="background-image" style={{ backgroundImage: `url(${MainPageBackground})` }}></div>
      <div className="content">
        <p className="amI" style={{ fontSize: '19px', fontWeight: 'bold', color: '#D9EFF6' }}>
          내가 블랙서바이벌 캐릭터라면?
        </p>

        <p className="title-image">
          <img src="images/bsti_title.png" alt="BSTI-title" style={{ width: '340px' }} />
        </p>

        <div className="btn-container">
          <Link to="/test">
            <BtnComponent label="테스트 시작" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

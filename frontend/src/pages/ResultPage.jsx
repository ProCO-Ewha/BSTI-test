import React from 'react';
import { Link } from 'react-router-dom';
import BtnComponent from '../components/BtnComponent';
import CharacterImage from '../Half.png'; // 캐릭터 이미지 경로에 맞게 수정
import '../styles/ResultPage.css'; // 새로운 CSS 파일 추가

const ResultPage = () => {
  // 가상 데이터 예시 (스프링부트에서 데이터를 받아와서 사용)
  const characterData = {
    name: '재키',
    image: CharacterImage,
    description: '캐릭터 유형에 대한 설명이 여기에 들어갑니다. 매우 긴 설명 예시입니다. 스크롤이 가능합니다. 캐릭터 유형에 대한 설명이 여기에 들어갑니다. 매우 긴 설명 예시입니다. 스크롤이 가능합니다.  캐릭터 유형에 대한 설명이 여기에 들어갑니다. 매우 긴 설명 예시입니다. 스크롤이 가능합니다. 캐릭터 유형에 대한 설명이 여기에 들어갑니다. 매우 긴 설명 예시입니다. 스크롤이 가능합니다.캐릭터 유형에 대한 설명이 여기에 들어갑니다. 매우 긴 설명 예시입니다. 스크롤이 가능합니다.캐릭터 유형에 대한 설명이 여기에 들어갑니다. 매우 긴 설명 예시입니다. 스크롤이 가능합니다.',
    mainQuote: '캐릭터의 메인 대사가 여기에 들어갑니다.',
  };

  return (
    <div className="result-page-container">
    <div className="all-contents">
      <p className="yours">
        당신과 어울리는 <br />블랙서바이벌 캐릭터는?
      </p>
      <div className="character-info">
      <h2 className="character-name">{characterData.name}</h2>
        <img src={characterData.image} alt={characterData.name} className="character-image" />
        <div className="character-details">
          <p className="main-quote" style={{ color: '#D9EFF6' }}>{characterData.mainQuote}</p>
          <p className="character-description">{characterData.description}</p>
        </div>

      <Link to="/">
      <BtnComponent label="테스트 다시하기" />
      </Link>
      </div>
      </div>
    </div>
  );
};

export default ResultPage;


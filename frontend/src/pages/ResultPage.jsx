import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BtnComponent from '../components/BtnComponent';
import axios from 'axios';
import '../styles/ResultPage.css';

const ResultPage = () => {
  const [characterData, setCharacterData] = useState({
    name: '',
    image_url: '',
    description: '',
    mainQuote: '',
  });

  const { state } = useLocation();

  useEffect(() => {
    axios.get('http://3.35.138.123:8080/bsti/returnresult') // AWS 서버의 엔드포인트로 요청을 보냄
      .then((response) => {
        console.log('성공적으로 데이터를 받아왔습니다.', response.data);
        setCharacterData(response.data);  // 받은 데이터로 state 업데이트
      })
      .catch((error) => {
        console.error('데이터를 받아오는 중 에러가 발생했습니다.', error);
      });
  }, []);  // 컴포넌트가 마운트될 때 한 번만 호출

  const handleCopyLink = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL)
      .then(() => {
        alert('테스트 결과 링크가 복사되었습니다.');
      })
      .catch((error) => {
        console.error('링크 복사 중 오류:', error);
      });
  };

  return (
    <div className="result-page-container">
      <div className="all-contents">
        <p className="yours">
          당신과 어울리는 <br />블랙서바이벌 캐릭터는?
        </p>
        <div className="character-info">
          <h2 className="character-name">{characterData.name}</h2>
          <img src={characterData.image_url} alt={characterData.name} className="character-image" />
          <div className="character-details">
            <p className="main-quote" style={{ color: '#D9EFF6' }}>{characterData.mainQuote}</p>
            <p className="character-description">{characterData.description}</p>
          </div>

          <div className="btn-group">
            <Link to="/">
              <BtnComponent label="테스트 다시하기" />
            </Link>
            <div style={{ margin: '20px' }}></div>
            <BtnComponent label="테스트 공유하기" onClick={handleCopyLink} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResultPage;

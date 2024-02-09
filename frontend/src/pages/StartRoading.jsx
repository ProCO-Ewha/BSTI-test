import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StartLoadingImage from '../startloading.png';
import '../styles/StartRoading.css';

const StartRoading = () => {
  const navigate = useNavigate();
  const [loadingText, setLoadingText] = useState('절망의 끝까지 도달한 폰에게 모든 영광을.');

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingText((prevText) => (prevText.endsWith('....') ? '절망의 끝까지 도달한 폰에게 모든 영광을.' : prevText + '.'));
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // 2초 후에 테스트 페이지로 자동 이동
  useEffect(() => {
    const navigateTimer = setTimeout(() => {
      navigate('/test');
    }, 2000);

    return () => {
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <div className="main-page-container">
      <img src={StartLoadingImage} alt="로딩 이미지" className="loading-image" />
      <p className="loading-text">{loadingText}</p>
    </div>
  );
};

export default StartRoading;


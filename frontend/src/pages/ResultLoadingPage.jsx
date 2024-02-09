// ResultLoadingPage.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResultLoadingImage from '../resultloading.png';
import BonfireImage from '../등불.png'; // Add the bonfire image import
import '../styles/ResultLoadingPage.css';

const ResultLoadingPage = () => {
  const navigate = useNavigate();
  const [loadingText, setLoadingText] = useState('당신과 가장 어울리는 블랙서바이벌 캐릭터를 찾는 중');

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingText((prevText) =>
        prevText.endsWith('...') ? '당신과 가장 어울리는 블랙서바이벌 캐릭터를 찾는 중' : prevText + '.'
      );
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const navigateTimer = setTimeout(() => {
      navigate('/result');
    }, 2000);

    return () => {
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <div className="result-loading-page-container">
      <img src={ResultLoadingImage} alt="로딩 이미지" className="loading-background" />
      <img src={BonfireImage} alt="등불 이미지" className="bonfire-image" />
      <p className="loading-text">{loadingText}</p>
    </div>
  );
};

export default ResultLoadingPage;

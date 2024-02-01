import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <p>Welcome to the MBTI Test Service</p>
      <Link to="/test">Start Test</Link>
    </div>
  );
};

export default MainPage;
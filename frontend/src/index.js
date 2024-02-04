import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TestPage from './pages/TestPage';
import ResultPage from './pages/ResultPage';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

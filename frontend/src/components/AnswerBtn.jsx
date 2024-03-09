import React from 'react';
import PropTypes from 'prop-types';

const AnswerBtn = ({ text, onClick }) => {
  return (
    <button
      style={{
        width: '380px',
        height: '65px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        margin: '10px',
        cursor: 'pointer',
        fontSize: '15px',
        fontWeight: 'bold',
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

AnswerBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AnswerBtn;

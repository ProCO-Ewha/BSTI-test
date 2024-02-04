import React from 'react';
import PropTypes from 'prop-types';

const AnswerBtn = ({ text, onClick }) => {
  return (
    <button
      style={{
        width: '380px',
        height: '65px',
        backgroundColor: '#3498db',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        margin: '5px',
        cursor: 'pointer',
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

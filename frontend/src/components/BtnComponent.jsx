import React from 'react';
import PropTypes from 'prop-types';

const BtnComponent = ({ label, onClick }) => {
  return (
    <button
    style={{
      width: '345px',
      height: '56px',
      background: 'linear-gradient(to bottom, #393939, #000000)',
      color: '#D5D5D5',
      border: '1px solid #A0D9D5',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '19px',
      fontWeight: 'bold',
    }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

BtnComponent.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default BtnComponent;


import React from 'react';
import PropTypes from 'prop-types';
import './NumberDisplay.css';

const NumberDisplay = ({ number, label }) => (
  <div className="number-display">
    <span>{label}</span>
    {number}
  </div>
);

NumberDisplay.propTypes = {
  number: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default NumberDisplay;

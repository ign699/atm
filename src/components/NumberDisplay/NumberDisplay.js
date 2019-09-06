import React from 'react';
import './numberDisplay.css';

export default ({ number, label }) => (
  <div className="number-display">
    <span>{label}</span>
    {number}
  </div>
);

import React from 'react';
import './Button.css';

export default ({ value, onClick }) => (
  <button onClick={onClick} disabled={value === null} className='button'>
    { value === null ? '&nbsp;' : value }
  </button>
)

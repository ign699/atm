/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';

import './Numpad.css';

const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [null, 0, null],
];

const Numpad = ({ numpadButtonAction }) => (
  <div className="numpad">
    {
      numbers.map((row, rowIndex) => (
        <div className="numpad-row" key={rowIndex}>
          {row.map((num, index) => (
            <Button value={num} onClick={numpadButtonAction(num)} key={`${num}${index}`} />
          ))}
        </div>
      ))
    }
  </div>
);

Numpad.propTypes = {
  numpadButtonAction: PropTypes.func.isRequired,
};

export default Numpad;

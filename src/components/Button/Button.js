import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import ButtonTypes, { NORMAL_BUTTON_TYPE } from './ButtonTypes';

const Button = ({
  value, onClick, active, type,
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={value === null}
    className={`btn ${ButtonTypes[type]} ${!!active && 'active'}`}
  >
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(Object.keys(ButtonTypes)),
  active: PropTypes.bool,
};

Button.defaultProps = {
  value: null,
  onClick: () => {},
  type: NORMAL_BUTTON_TYPE,
  active: false,
};

export default Button;

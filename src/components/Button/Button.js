import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  value, onClick, className, active,
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={value === null}
    className={`btn btn-outline-secondary ${className} ${active && 'active'}`}
  >
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  active: PropTypes.bool,
};

Button.defaultProps = {
  value: null,
  onClick: () => {},
  className: '',
  active: false,
};

export default Button;

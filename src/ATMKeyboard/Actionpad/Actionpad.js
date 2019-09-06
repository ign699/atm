/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';

import './Actionpad.css';


const Actionpad = ({ action, backspace, clear }) => (
  <div className="actionpad">
    <Button
      onClick={action}
      className="btn-outline-success"
      value="Confirm"
    />
    <Button
      onClick={backspace}
      className="btn-outline-warning"
      value="Backspace"
    />
    <Button
      onClick={clear}
      className="btn-outline-danger"
      value="Clear"
    />
  </div>
);

Actionpad.propTypes = {
  action: PropTypes.func.isRequired,
  backspace: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

export default Actionpad;

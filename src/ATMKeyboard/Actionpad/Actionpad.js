/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';

import './Actionpad.css';
import {
  ERROR_BUTTON_TYPE,
  SUCCESS_BUTTON_TYPE,
  WARNING_BUTTON_TYPE,
} from '../../components/Button/ButtonTypes';


const Actionpad = ({ action, backspace, clear }) => (
  <div className="actionpad">
    <Button
      onClick={action}
      type={SUCCESS_BUTTON_TYPE}
      value="Confirm"
    />
    <Button
      onClick={backspace}
      type={WARNING_BUTTON_TYPE}
      value="Backspace"
    />
    <Button
      onClick={clear}
      type={ERROR_BUTTON_TYPE}
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

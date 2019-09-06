import React, { useContext } from 'react';
import './Keyboard.css';
import { ATMContext, NEUTRAL_MODE } from '../ATMConfig';
import Numpad from './Numpad/Numpad';
import Actionpad from './Actionpad/Actionpad';


export default () => {
  const {
    number, updateValue, action, mode,
  } = useContext(ATMContext);

  const numpadButtonAction = (num) => () => updateValue(parseInt(`${number}${num}`, 10));
  const backspace = () => updateValue(parseInt(`0${number}`.substring(0, `0${number}`.length - 1), 10));
  const clear = () => updateValue(0);

  return (
    <div className="buttons">
      <Numpad numpadButtonAction={numpadButtonAction} />
      <Actionpad action={action} backspace={backspace} clear={clear} />
      {
        (mode === NEUTRAL_MODE) && (
        <div className="blocked">
          <h5>Keyboard is disabled please choose action first</h5>
        </div>
        )
      }
    </div>
  );
};

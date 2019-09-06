import React, { useState } from 'react';
import ATMKeyboard from './ATMKeyboard/Keyboard';
import NumberDisplay from './components/NumberDisplay/NumberDisplay';
import './ATM.css';
import Button from './components/Button/Button';
import {
  DEPOSIT_MODE, MAX_BALANCE, NEUTRAL_MODE, WITHDRAW_MODE, ATMContext,
} from './ATMConfig';


export default () => {
  const [number, setNumber] = useState(0);
  const [balance, setBalance] = useState(0);
  const [overdrawn, setOverdrawn] = useState(false);
  const [mode, setMode] = useState(NEUTRAL_MODE);


  const deposit = () => {
    let newBalance = number + balance;
    if (newBalance > MAX_BALANCE) newBalance = MAX_BALANCE;

    setBalance(newBalance);
    setNumber(0);
    setMode(NEUTRAL_MODE);
    setOverdrawn(false);
  };

  const withdraw = () => {
    if (number > balance) {
      setOverdrawn(true);
      return;
    }
    setBalance(balance - number);
    setNumber(0);
    setMode(NEUTRAL_MODE);
    setOverdrawn(false);
  };

  const action = () => {
    if (mode === WITHDRAW_MODE) withdraw();
    if (mode === DEPOSIT_MODE) deposit();
  };

  return (
    <div className="atm">
      <ATMContext.Provider value={{
        number,
        updateValue: (value) => {
          setOverdrawn(false);
          if (value > MAX_BALANCE) return;
          setNumber(value);
        },
        action,
        mode,
      }}
      >
        <NumberDisplay number={balance} label="Balance:" />
        <NumberDisplay number={number} label="Value:" />
        { overdrawn && <span className="text-danger">You cannot overdraw your account.</span>}
        <div className="options">
          <Button value="WITHDRAW" onClick={() => setMode(WITHDRAW_MODE)} active={mode === WITHDRAW_MODE} />
          <Button value="DEPOSIT" onClick={() => setMode(DEPOSIT_MODE)} active={mode === DEPOSIT_MODE} />
        </div>
        <ATMKeyboard />
      </ATMContext.Provider>
    </div>
  );
};

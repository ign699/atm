import React, { useState } from 'react';
import ATMKeyboard from './ATMKeyboard/Keyboard';
import './atm.css'
export const ATMContext = React.createContext();

const NEUTRAL_MODE = 'NEUTRAL_MODE';
const WITHDRAW_MODE = 'WITHDRAW_MODE';
const DEPOSIT_MODE = 'DEPOSIT_MODE';

export default () => {
  const [number, setNumber] = useState(0);
  const [balance, setBalance] = useState(0);
  const [mode, setMode] = useState(NEUTRAL_MODE);


  const deposit = () => {
    setBalance(number + balance);
    setNumber(0);
    setMode(NEUTRAL_MODE);
  };

  const withdraw = () => {
    if(number > balance) return;
    setBalance(balance - number);
    setNumber(0);
    setMode(NEUTRAL_MODE);
  };

  const action = () => {
    if(mode === WITHDRAW_MODE) withdraw();
    if(mode === DEPOSIT_MODE) deposit();
  };

  return <div className='atm'>
    <ATMContext.Provider value={{
      number,
      setNumber,
      action,
      mode
    }}>

      <div className='value-display'>
        {balance}
      </div>
      <div className='value-display'>
        {number}
      </div>
      <div>
        <button onClick={() => setMode(WITHDRAW_MODE)}>WITHDRAW</button>
        <button onClick={() => setMode(DEPOSIT_MODE)}>DEPOSIT</button>
      </div>
      <ATMKeyboard />
    </ATMContext.Provider>
  </div>
}

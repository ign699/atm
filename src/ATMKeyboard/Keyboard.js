import React, { useContext } from 'react';
import Button from './Button'
import './Keyboard.css'
import { ATMContext } from '../ATM'

const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [null, 0, null],
];



export default () => {
  const { number, setNumber, action} = useContext(ATMContext);
  return (
    <div className='buttons'>
      <div className='buttons-left'>
          {
            numbers.map(row => (
              <div className='row'>
                {row.map(num => <Button value={num} onClick={() => setNumber(parseInt(`${number}${num}`, 10))}/>)}
              </div>
            ))
          }
      </div>
      <div className='buttons-right'>
        <Button value={'green'} onClick={action}/>
        <Button value={'yellow'} onClick={() => setNumber(parseInt(`0${number}`.substring(0, `0${number}`.length - 1), 10))}/>
        <Button value={'red'} onClick={() => setNumber(0)}/>
      </div>
    </div>
  )
}

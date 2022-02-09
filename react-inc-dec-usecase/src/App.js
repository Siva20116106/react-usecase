import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Button from './Button';

export default function App() {
  
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        Increment:{' '}
        <Button func={() => dispatch({ type: 'INCREMENT' })} sign="+" />
      </div>
      <br />
      <div>
        Decrement:{' '}
        <Button func={() => dispatch({ type: 'DECREMENT' })} sign="-" />
      </div>
      <br />
      The counter value is: {counter}
    </>
  );
}

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { increment, decrement } from './counterSlice';
import './Counter.css';

export const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
        disabled={count === 0}
        className="decrement-button"
      >
        Decrement
      </button>
      <span className="counter-value">{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
        className="increment-button"
      >
        Increment
      </button>
    </div>
  );
};

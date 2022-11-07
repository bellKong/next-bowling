import { RootState, useAppDispatch } from '@/store';
import { decrement, increment } from '@/store/modules/counterSlice';
import React from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

const CounterApp = () => {
  const dispatch = useAppDispatch();
  const { val } = useSelector((state: RootState) => state.counter);

  const onIncrement = useCallback(() => dispatch(increment()), []);
  const onDecrement = useCallback(() => dispatch(decrement()), []);

  return (
    <div>
      <span>{val}</span>
      <div style={{ display: 'flex' }}>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </div>
  );
};

export default CounterApp;

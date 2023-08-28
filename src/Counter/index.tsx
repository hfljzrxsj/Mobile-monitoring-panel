// counter.tsx
import * as React from 'react';
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './actions';

interface RootState {
  count: number;
}

export default function Counter (): React.ReactElement {

  const dispatch = useDispatch(),
    handleDecrement = (): void => {

      dispatch(decrement());

    },
    handleIncrement = (): void => {

      dispatch(increment());

    },
    useTypedSelector: TypedUseSelectorHook<RootState> = useSelector,
    // eslint-disable-next-line sort-vars, @typescript-eslint/prefer-readonly-parameter-types
    count = useTypedSelector((state) => state.count);
  return (
    <div>
      <h1>
        Counter
      </h1>

      <p>
        Count:
        {' '}

        {count}
      </p>

      <button
        onClick={handleIncrement}
        type="button">
        Increment
      </button>

      <button
        onClick={handleDecrement}
        type="button">
        Decrement
      </button>
    </div>
  );

}

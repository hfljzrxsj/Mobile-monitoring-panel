import * as React from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../redux/actions';
import { Dispatch } from 'redux';
interface state {
  count: number
}

interface CounterProps {
  count: number,
  increment: () => void,
  decrement: () => void,
  // index: number,
  index: number
}

function Counter(props: CounterProps) {
  const { count, increment, decrement, index } = props;
  return (
    <React.StrictMode>
      <div>
        <h1>这是第{index}个组件</h1>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </React.StrictMode>
  );
}

function mapStateToProps(state: state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

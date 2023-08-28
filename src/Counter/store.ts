// store.ts
import { type Action, createStore } from 'redux';
interface AppState {
  count: number;
}
const initialState: AppState = {
  'count': 0
},
  one = 1,
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types, @typescript-eslint/default-param-last
  reducer = (state = initialState, action: Action<string>): AppState => {

    switch (action.type) {

      case 'INCREMENT':
        return {
          ...state,
          'count': state.count + one
        };
      case 'DECREMENT':
        return {
          ...state,
          'count': state.count - one
        };
      default:
        return state;

    }

  };
export default createStore(reducer);

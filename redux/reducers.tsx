import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './actions';

const initialState0 = { count: 0 };
interface action {
  type: string;
}
export default function counterReducer(state = initialState0, action: action): { count: number } {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { count: state.count + 1 };
    case DECREMENT_COUNTER:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
//----------------------------------------------------------------------------
interface actionType {
  type: string,
  index: number
}
import { ADD_ELEVATOR_FLOOR, REMOVE_ELEVATOR_FLOOR } from './actions';
const initialState: boolean[] = [];
export function modifyElevatorFloor(state = initialState, action: actionType): boolean[] {
  switch (action.type) {
    case ADD_ELEVATOR_FLOOR:
      state[action.index - 1] = true;
      break;
    case REMOVE_ELEVATOR_FLOOR:
      state[action.index - 1] = false;
      break;
  }
  return state;
}

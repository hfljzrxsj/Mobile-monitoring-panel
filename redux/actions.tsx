export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
interface COUNTER {
  type: string
}

export function incrementCounter(): COUNTER {
  return { type: INCREMENT_COUNTER };
}

export function decrementCounter(): COUNTER {
  return { type: DECREMENT_COUNTER };
}

export const ADD_ELEVATOR_FLOOR = 'ADD_ELEVATOR_FLOOR';
export const REMOVE_ELEVATOR_FLOOR = 'REMOVE_ELEVATOR_FLOOR';
interface actionType {
  type: string,
  index: number
}
export function addElevatorFloor(index: number): actionType {
  return { type: ADD_ELEVATOR_FLOOR, index }; // Add the index of the floor you want to lift to as an integer. 
}

export function removeElevatorFloor(index: number): actionType {
  return { type: REMOVE_ELEVATOR_FLOOR, index }; // Add the index of the floor you want to lift to as an integer. 
}

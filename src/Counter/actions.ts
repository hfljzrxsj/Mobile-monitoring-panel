// actions.ts
import { type Action } from 'redux';
const decrement = (): Action<string> => ({
  'type': 'DECREMENT'
}),
  increment = (): Action<string> => ({
    'type': 'INCREMENT'
  });
export { increment, decrement };

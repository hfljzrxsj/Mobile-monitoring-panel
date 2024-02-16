import type {
  // RRN_,
  // RRNReactElementGenericity,
  // RRNboolean,
  // RRNnumber,
  RRNstring
  // anyReactElementGenericity
} from '@/types';
import { useSelector, type TypedUseSelectorHook } from 'react-redux';
import type { actionInterface, TypedUseSelectorHookState } from '.';
export enum enumActionName {
  SET_TITLE = 'SET_TITLE'
}
// eslint-disable-next-line no-shadow
export enum enumAppBarTitle {
  title = 'title'
}
interface State {
  readonly [enumAppBarTitle.title]: RRNstring;
}
// export type RRNState = RRN_<State>;
export type AppBarTitleAction = actionInterface<State, enumActionName>;
const initialState = {
  [enumAppBarTitle.title]: ''
},
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types, @typescript-eslint/default-param-last, default-param-last
  reducer = (state = initialState, action: AppBarTitleAction) => {
    const { type, payload = {} } = action;
    switch (type) {
      case enumActionName.SET_TITLE:
        return ({
          ...state,
          ...payload,
        });
      default:
        return state;
    }
  };
export const useAppBarTitleTypedSelector: TypedUseSelectorHook<TypedUseSelectorHookState<State>> = useSelector;
export default reducer;
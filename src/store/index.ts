// store.ts
import type {
  RRN_,
  // RRNReactElementGenericity,
  RRNboolean,
  // RRNnumber,
  RRNstring
  // anyReactElementGenericity
} from '@/types';
import { type TypedUseSelectorHook, useSelector } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


// eslint-disable-next-line no-shadow
export enum enumActionName {
  MODE = 'MODE',
  // OPEN = 'OPEN',
  FONTSIZE = 'FONTSIZE',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  SnackbarAlert = 'SnackbarAlert',
  OPENTRUE = 'OPENTRUE',
  OPENFALSE = 'OPENFALSE',
  PORT = 'PORT'
}
// eslint-disable-next-line no-shadow
export enum enumSnackbarAlert {
  alertText = 'alertText',
  open = 'open',
  severity = 'severity'
}
// eslint-disable-next-line no-shadow
export enum enumSeverity {
  error = 'error',
  info = 'info',
  success = 'success',
  warning = 'warning'
}
interface State {
  readonly [enumActionName.MODE]: RRNstring;
  readonly [enumActionName.FONTSIZE]: RRNstring;
  // [enumActionType.OPEN]: RRNboolean;
  readonly [enumActionName.LEFT]: RRNstring;
  readonly [enumActionName.RIGHT]: RRNstring;
  readonly [enumActionName.SnackbarAlert]: {
    readonly [enumSnackbarAlert.alertText]: RRNstring;
    readonly [enumSnackbarAlert.open]: RRNboolean;
    readonly [enumSnackbarAlert.severity]: RRN_<enumSeverity>;
  };
  readonly [enumActionName.PORT]: RRNstring;
}
interface actionInterface extends State {
  readonly type: RRN_<enumActionName>;
}
export type RRNState = RRN_<State>;
const initialState: State = {
  [enumActionName.FONTSIZE]: '16px',
  [enumActionName.MODE]: 'production',
  // [enumActionType.OPEN]: false,
  [enumActionName.LEFT]: '',
  [enumActionName.RIGHT]: '',
  [enumActionName.SnackbarAlert]: {
    [enumSnackbarAlert.alertText]: '',
    [enumSnackbarAlert.open]: false,
    [enumSnackbarAlert.severity]: enumSeverity.success
  },
  [enumActionName.PORT]: '1392'
},

  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types, @typescript-eslint/default-param-last, default-param-last
  reducer = (state = initialState, action: RRN_<actionInterface>): RRNState => {

    const snackbarAlertReturn = (bool: RRNboolean): RRNState => ({
      ...state,
      [enumActionName.SnackbarAlert]: {
        ...state.SnackbarAlert,
        ...action[enumActionName.SnackbarAlert],
        [enumSnackbarAlert.open]: bool
      }
    });
    switch (action.type) {

      case enumActionName.MODE:
        return {
          ...state,
          [enumActionName.MODE]: action[enumActionName.MODE]
        };
      case enumActionName.OPENFALSE:
        return snackbarAlertReturn(false);
      case enumActionName.OPENTRUE:
        return snackbarAlertReturn(true);
      case enumActionName.FONTSIZE:
        return {
          ...state,
          [enumActionName.FONTSIZE]: action[enumActionName.FONTSIZE]
        };
      case enumActionName.LEFT:
        return {
          ...state,
          [enumActionName.LEFT]: action[enumActionName.LEFT]
        };
      case enumActionName.RIGHT:
        return {
          ...state,
          [enumActionName.RIGHT]: action[enumActionName.RIGHT]
        };
      case enumActionName.PORT:
        return {
          ...state,
          [enumActionName.PORT]: action[enumActionName.PORT]
        };
      default:
        return state;

    }

  };
export default createStore(reducer, applyMiddleware(thunk));
// eslint-disable-next-line one-var
export const useTypedSelector: TypedUseSelectorHook<RRNState> = useSelector;

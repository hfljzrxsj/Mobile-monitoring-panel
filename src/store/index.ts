// store.ts
import type {
  // RRNReactElementGenericity,
  RRNboolean,
  // RRNnumber,
  RRNstring
  // anyReactElementGenericity
} from '@/types';
import { type TypedUseSelectorHook, useSelector } from 'react-redux';
import { createStore } from 'redux';


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
export enum enumSnackbarAlert {
  alertText = 'alertText',
  open = 'open',
  severity = 'severity'
}
export enum enumSeverity {
  error = 'error',
  info = 'info',
  success = 'success',
  warning = 'warning'
}
export interface State {
  [enumActionName.MODE]: RRNstring;
  [enumActionName.FONTSIZE]: RRNstring;
  // [enumActionType.OPEN]: RRNboolean;
  [enumActionName.LEFT]: RRNstring;
  [enumActionName.RIGHT]: RRNstring;
  [enumActionName.SnackbarAlert]: {
    [enumSnackbarAlert.alertText]: RRNstring;
    [enumSnackbarAlert.open]: RRNboolean;
    [enumSnackbarAlert.severity]: enumSeverity;
  };
  [enumActionName.PORT]: RRNstring;
}
interface actionInterface extends State {
  type: enumActionName;
}

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
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types, @typescript-eslint/default-param-last
  reducer = (state = initialState, action: actionInterface): State => {

    const snackbarAlertReturn = (bool: RRNboolean): State => ({
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
export default createStore(reducer);
// eslint-disable-next-line one-var
export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;

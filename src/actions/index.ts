import type {
  RRN_,
  // RRNReactElementGenericity,
  // RRNboolean,
  // RRNnumber,
  RRNstring
  // anyReactElementGenericity
} from '@/types';
import {
  enumActionName,
  type enumSeverity,
  enumSnackbarAlert
} from '@/store';

import { useDispatch } from 'react-redux';

export default function useSnackbarAlertOpen (alertText: RRNstring, severity: RRN_<enumSeverity>): void {

  const dispatch = useDispatch();
  dispatch({
    'type': enumActionName.OPENTRUE,
    [enumActionName.SnackbarAlert]: {
      [enumSnackbarAlert.alertText]: alertText,
      [enumSnackbarAlert.severity]: severity,
      [enumSnackbarAlert.open]: true
    }
  });

}

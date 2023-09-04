import type {
  RRN_,
  // RRNReactElementGenericity,
  // RRNboolean,
  // RRNnumber,
  RRNstring
  // anyReactElementGenericity
} from '@/types/index.mjs';
import {
  enumActionName,
  type enumSeverity,
  enumSnackbarAlert
} from '@/store/index.mjs';

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

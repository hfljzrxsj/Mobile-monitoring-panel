import {
  enumActionName,
  type enumSeverity,
  enumSnackbarAlert
} from '@/store';
import { useDispatch } from 'react-redux';

export default function useSnackbarAlertOpen (alertText: string, severity: enumSeverity): void {

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

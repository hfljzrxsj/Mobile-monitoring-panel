import { enumActionName, enumSnackbarAlert, useSnackBarTypedSelector, type snackbarAlertAction } from '@/store/SnackBarRuducer';
import { Snackbar } from '@mui/material';
import { StrictMode, type Dispatch } from 'react';
import { useDispatch } from 'react-redux';
export default function CustomizedSnackbars () {
  const { open, alertText, severity } = useSnackBarTypedSelector(state => ({
    open: state.SnackBar.open,
    alertText: state.SnackBar.alertText,
    severity: state.SnackBar.severity,
  }));
  const dispatch = useDispatch<Dispatch<snackbarAlertAction>>();
  return (
    <StrictMode>
      <Snackbar open={Boolean(open && alertText)} autoHideDuration={6000} onClose={(event, reason) => {
        if (reason === 'clickaway')
          return;
        dispatch({ type: enumActionName.OPENFALSE });
      }}
        message={alertText}
      />
    </StrictMode>
  );
}

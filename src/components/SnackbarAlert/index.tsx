import { enumActionName, useSnackBarTypedSelector, type snackbarAlertAction } from '@/store/SnackBarRuducer';
import { Alert, Snackbar } from '@mui/material';
import { StrictMode, type Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import style from './_index.module.scss';
export default function CustomizedSnackbars () {
  const { open, alertText, severity } = useSnackBarTypedSelector(state => ({
    open: state.SnackBar.open,
    alertText: state.SnackBar.alertText,
    severity: state.SnackBar.severity,
  }));
  const dispatch = useDispatch<Dispatch<snackbarAlertAction>>();
  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({ type: enumActionName.OPENFALSE });
  };
  return (
    <StrictMode>
      <Snackbar open={Boolean(open && alertText)}
        autoHideDuration={6000}
        onClose={handleClose}
        message={alertText}
        className={style['Snackbar'] ?? ""}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
        >{alertText}</Alert >
      </Snackbar>
    </StrictMode>
  );
}

import * as React from 'react';
import {
  // Alert,
  Snackbar
} from '@mui/material';
// import Alert from '@mui/material/Alert';
// import Snackbar from '@mui/material/snackbar';
// import MuiAlert from '@mui/material/Alert';
// import type { AlertProps } from '@mui/material/Alert';
import { useCallback, useEffect } from 'react';
import {
  enumActionName,
  enumSeverity,
  useTypedSelector
} from '@/store';
import { useDispatch } from 'react-redux';
import { StrictMode } from 'react';

export default function SnackbarAlert (): React.ReactElement {

  const dispatch = useDispatch(),
    // const { ToastOpen, setToastOpen, severity, alertText } = props,
    setToastOpenFalse = useCallback(() => dispatch({
      'type': enumActionName.OPENFALSE
    }), [dispatch]),
    waitTime = 6000,
    { 'open': ToastOpen = false,
      severity = enumSeverity.success,
      alertText = '' } = useTypedSelector((state) => state[enumActionName.SnackbarAlert])
    // ,
    // handleClose = (reason?: string) => {

    //   if (reason === 'clickaway') {

    //     return;

    //   }
    //   setToastOpenFalse();

    // }
    ;
  useEffect(() => {

    if (ToastOpen) {

      setTimeout(() => {

        setToastOpenFalse();
        // handleClose();

      }, waitTime);

    }

  }, [
    ToastOpen,
    setToastOpenFalse
  ]);
  // const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
  //   props,
  //   ref
  // ) => <MuiAlert
  //     ref={ref}
  //     {...props} />);
  // Alert.displayName = 'Alert';
  return (
    <StrictMode>
      <Snackbar
        anchorOrigin={{
          'vertical': 'bottom',
          'horizontal': 'left'
        }}
        autoHideDuration={6000}
        onClose={(): void => {

          setToastOpenFalse();

        }}
        open={ToastOpen}
      >
        <div
          elevation={6}
          onClose={(): void => {

            setToastOpenFalse();
            // handleClose();

          }}
          severity={severity}
          style={{
            'backgroundColor': severity === enumSeverity.success
              ? '#43a047'
              : '#d32f2f',
            'color': '#fff',
            'padding': '10px 20px',
            'letterSpacing': '1px'
          }}
          sx={{ 'width': '100%' }}
          variant="filled"
        >
          {alertText}
        </div>
      </Snackbar>
    </StrictMode>);

}

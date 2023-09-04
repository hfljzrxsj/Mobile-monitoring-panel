import * as React from 'react';

// import Alert from '@mui/material/Alert';
// import Snackbar from '@mui/material/snackbar';
// import MuiAlert from '@mui/material/Alert';
// import type { AlertProps } from '@mui/material/Alert';
import { useCallback, useEffect } from 'react';
import {
  enumActionName,
  enumSeverity,
  useTypedSelector
} from '@/store/index.mjs';

import {
  // Alert,
  Snackbar
} from '@mui/material';
import type {
  // RRN_,
  // RRNReactElementGenericity,
  // RRNboolean,
  // RRNnumber,
  // RRNstring,
  anyReactElementGenericity
} from '@/types/index.mjs';
import { useDispatch } from 'react-redux';
export default function SnackbarAlert (): anyReactElementGenericity {

  const dispatch = useDispatch(),
    // const { ToastOpen, setToastOpen, severity, alertText } = props,
    setToastOpenFalse = useCallback(() => dispatch({
      'type': enumActionName.OPENFALSE
    }), [dispatch]),
    waitTime = 6000,
    { 'open': ToastOpen = false,
      severity = enumSeverity.success,
      // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
      alertText = '' } = useTypedSelector((state) => state[enumActionName.SnackbarAlert]);
  // ,
  // handleClose = (reason?: string) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setToastOpenFalse();
  // }
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
    <React.StrictMode>
      <Snackbar
        anchorOrigin={{
          'horizontal': 'left',
          'vertical': 'bottom'
        }}
        autoHideDuration={6000}
        onClose={(): void => {

          setToastOpenFalse();

        }}
        open={ToastOpen}
      >
        <div
          style={{
            'backgroundColor': severity === enumSeverity.success
              ? '#43a047'
              : '#d32f2f',
            'color': '#fff',
            'letterSpacing': '1px',
            'padding': '10px 20px'
          }}
        // onClose={(): void => {
        //   setToastOpenFalse();
        //   // handleClose();
        // }}
        // severity={severity}
        // elevation={6}
        // sx={{ 'width': '100%' }}
        // variant="filled"
        >
          {alertText}
        </div>
      </Snackbar>
    </React.StrictMode>);

}

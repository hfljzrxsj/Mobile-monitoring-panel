import Snackbar from '@mui/material/Snackbar';
import * as React from 'react';
import Alert from './Alert';
interface SnackbarAlertType {
  ToastOpen: boolean;
  setToastOpen: React.Dispatch<React.SetStateAction<boolean>>;
  severity: 'error' | 'info' | 'success' | 'warning';
  alertText: string;
}
export default function SnackbarAlert (props: SnackbarAlertType): React.ReactElement {

  const { ToastOpen, setToastOpen, severity, alertText } = props,
    waitTime = 6000;
  // const handleClose = (reason?: string) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setToastOpen(false);
  // };
  React.useEffect(() => {

    if (ToastOpen) {

      setTimeout(() => {

        setToastOpen(false);

      }, waitTime);

    }

  }, [
    ToastOpen,
    setToastOpen
  ]);
  return (
    <React.StrictMode>
      <Snackbar
        autoHideDuration={6000}
        onClose={(): void => {

          setToastOpen(false);

        }}
        open={ToastOpen}
      >
        <Alert
          onClose={(): void => {

            setToastOpen(false);

          }}
          severity={severity}
          sx={{ 'width': '100%' }}
        >
          {alertText}
        </Alert>
      </Snackbar>
    </React.StrictMode>);

}

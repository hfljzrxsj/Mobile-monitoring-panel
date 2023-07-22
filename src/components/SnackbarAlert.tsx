import Snackbar from '@mui/material/Snackbar';
import * as React from 'react';
import Alert from './Alert';
interface SnackbarAlertType {
  ToastOpen: boolean;
  setToastOpen: React.Dispatch<React.SetStateAction<boolean>>;
  severity: 'success' | 'info' | 'warning' | 'error';
  alertText: string;
}
const SnackbarAlert = (props: SnackbarAlertType): JSX.Element => {
  const { ToastOpen, setToastOpen, severity, alertText } = props;
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
      }, 6000);
    }
  }, [ToastOpen, setToastOpen]);
  return (
    <React.StrictMode>
      <Snackbar
        open={ToastOpen}
        autoHideDuration={6000}
        onClose={() => setToastOpen(false)}
      >
        <Alert
          onClose={() => setToastOpen(false)}
          severity={severity}
          sx={{ width: '100%' }}
        >
          {alertText}
        </Alert>
      </Snackbar>
    </React.StrictMode>);
};
export default SnackbarAlert;
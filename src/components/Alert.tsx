import type { AlertProps } from '@mui/material/Alert';
// eslint-disable-next-line no-duplicate-imports
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
  props,
  ref,
) => {
  return (<MuiAlert
    elevation={6}
    ref={ref}
    variant="filled"
    {...props} />);
});
Alert.displayName = 'Alert';

export default Alert;
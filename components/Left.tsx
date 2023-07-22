'use strict';
import * as React from 'react';
import Building from './Left/Building';
import ElevatorsManager from './Left/ElevatorsManager';
import Box from '@mui/material/Box';
export default function Left(): JSX.Element {
  return (
    <React.StrictMode>
      <Box
      >
        <Building
          level={18}
        /></Box>
      <ElevatorsManager />
    </React.StrictMode>
  );
}
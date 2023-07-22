'use strict';
import * as React from 'react';
import Elevator from './Elevator';
import { Stack } from '@mui/material';
import styleModule from './Elevators.module.scss';

export default function ElevatorsManager(): JSX.Element {
  return (
    <React.StrictMode>
      <Stack className={styleModule.Elevators}>
        <Elevator index={1} />
        <Elevator index={2} />
      </Stack>
    </React.StrictMode>
  );
}
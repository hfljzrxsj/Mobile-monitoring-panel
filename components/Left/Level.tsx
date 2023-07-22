'use strict';
import * as React from 'react';
import UpIcon from './UpIcon';
import DownIcon from './DownIcon';
interface Props {
  index: number;
}
export default function Level(props: Props): JSX.Element {
  const { index } = props;
  return (
    <React.StrictMode>
      <span>{index}</span>
      <UpIcon />
      <DownIcon />
    </React.StrictMode>
  );
}
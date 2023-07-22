import * as React from 'react';
import { ListItem } from '@mui/material';

interface SideProps {
  title: string;
  className: string;
}

export default function SideItem(props: SideProps): JSX.Element {
  const { title, className } = props;
  return (
    <React.StrictMode>
      <ListItem
        className={className}
      >
        <p>{title}</p>
      </ListItem>
    </React.StrictMode>
  );
}

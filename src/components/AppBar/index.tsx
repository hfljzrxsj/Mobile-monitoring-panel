import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import type { HTMLAttributes } from 'react';
interface ButtonAppBarProps extends HTMLAttributes<HTMLDivElement> {
  readonly menuOpenTrue: () => void;
}
export default function ButtonAppBar (props: ButtonAppBarProps) {
  const { menuOpenTrue } = props;
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={menuOpenTrue}
        >
          {/* <MenuIcon /> */}
        </IconButton>
      </Toolbar>
    </AppBar>
    // </Box>
  );
}

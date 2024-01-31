import { enumActionName, type snackbarAlertAction } from '@/store/SnackBarRuducer';
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import { useEffect, type Dispatch, type HTMLAttributes } from 'react';
import { useDispatch } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
interface ButtonAppBarProps extends HTMLAttributes<HTMLDivElement> {
  readonly menuOpenTrue: () => void;
}
export default function ButtonAppBar (props: ButtonAppBarProps) {
  const { menuOpenTrue } = props;
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <MenuIcon onClick={menuOpenTrue} />
      {/* <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={menuOpenTrue}
        >
        </IconButton>
      </Toolbar> */}
    </AppBar>
    // </Box>
  );
}

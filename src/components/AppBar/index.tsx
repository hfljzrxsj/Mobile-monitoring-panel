import { AppBar, type AppBarProps } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import style from './_index.module.scss';
interface ButtonAppBarProps extends AppBarProps {
  readonly menuOpenTrue: () => void;
}
export default function ButtonAppBar (props: ButtonAppBarProps) {
  const { menuOpenTrue, ...others } = props;
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" {...others}>
      <MenuIcon onClick={menuOpenTrue} className={style['menuIcon'] ?? ''} />
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

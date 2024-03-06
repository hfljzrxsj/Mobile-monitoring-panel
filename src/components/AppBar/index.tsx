import { AppBar, Button, Dialog, DialogActions, DialogTitle, Drawer, IconButton, Popover, type AppBarProps } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import style from './_index.module.scss';
import { enumAppBarTitle, useAppBarTitleTypedSelector } from '@/store/AppBarTitleRuducer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { adminIdString, getLevel, getLocalStorageFromJSON, orgId } from '@/actions/axios_instance';
import { StrictMode, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import { useNavigate } from 'react-router';
import { concatUrl, pathString } from '@/Route';
import * as classNames from 'classnames';
import LogoutIcon from '@mui/icons-material/Logout';
import { regionName } from '../MyTable';
import Menu from '../Menu';
interface ButtonAppBarProps extends AppBarProps {
}
export const StyledButton = ({ ...props }) => <Button
  variant="contained"
  size="large"
  {...props} />;
const clearCache = () => window.caches?.keys()?.then(e => e.forEach(cacheName => window.caches?.delete(cacheName))).catch(console.error);
export default function ButtonAppBar (props: ButtonAppBarProps) {
  const title = useAppBarTitleTypedSelector(state => state.AppBarTitle[enumAppBarTitle.title]);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const PopoverOpen = Boolean(anchorEl);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <StrictMode>
      <AppBar
        position="sticky"
        className={style['AppBar'] ?? ''}
        {...props}>
        <IconButton onClick={setMenuOpen.bind(null, true)} className={style['menuIcon'] ?? ''} size='large'>
          <MenuIcon />
        </IconButton>
        <span>{title}</span>
        <Button className={classNames(style['Avatar'], { [style['open'] ?? '']: PopoverOpen })}
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
          }}
        >
          <AccountCircleIcon />
          <span>{localStorage.getItem(adminIdString)}</span>
          <KeyboardArrowDownIcon />
        </Button>
      </AppBar>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={PopoverOpen}
        onClose={() => {
          setAnchorEl(null);
        }}
        className={style['Popover'] ?? ''}
      >
        <p>用户等级：<span>{getLevel()}</span></p>
        <p>用户权限：<span>{localStorage.getItem(regionName) ?? getLocalStorageFromJSON(orgId)}</span></p>
        <StyledButton
          onClick={() =>
            unstable_batchedUpdates(() => {
              setAnchorEl(null);
              setOpen(true);
            })
          }
          startIcon={< LogoutIcon />}
        >
          退出登录
        </StyledButton>
      </Popover>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>确定要退出登录吗？</DialogTitle>
        <DialogActions className={style['DialogActions'] ?? ''}>
          <StyledButton onClick={() => {
            clearCache();
            localStorage.clear();
            navigate(concatUrl(pathString.login));
          }}>确定</StyledButton>
          <StyledButton onClick={handleClose}>取消</StyledButton>
        </DialogActions>
      </Dialog>
      <Drawer
        anchor='left'
        open={menuOpen}
        onClose={setMenuOpen.bind(null, false)}>
        <Menu />
      </Drawer>
    </StrictMode>
  );
}

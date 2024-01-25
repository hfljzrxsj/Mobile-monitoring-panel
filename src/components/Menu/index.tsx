import { StrictMode, type HTMLAttributes } from "react";
import { Box } from '@mui/material';
import { Drawer } from '@mui/material';
import { List } from '@mui/material';
import { Divider } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import { concatUrl, menuItems } from "@/Route";
import { NavLink } from "react-router-dom";
import style from './_index.module.scss';

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  readonly menuOpen: boolean;
  readonly menuOpenFalse: (menuOpen: boolean) => void;
}
const StyledNavLink = (props: {
  readonly text: string;
  readonly path: string;
}) => {
  const { text = '', path = '' } = props;
  return (
    <NavLink to={path} className={
      ({ isActive }) => (isActive ? style["menuActive"] : '')
    }>
      <ListItemButton>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </NavLink>);
};
export default function Menu (props: MenuProps) {
  const { menuOpen, menuOpenFalse, } = props;
  return (
    <StrictMode>
      <Drawer
        anchor='left'
        open={menuOpen}
        onClose={menuOpenFalse}
      >
        <Box
          // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >{
            menuItems.map((item, index) => {
              const { children, text } = item;
              return (
                <List key={text}>
                  {children ? (
                    <StrictMode>
                      <ListItem disablePadding>
                        {/* <ListItemButton> */}
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        {/* </ListItemButton> */}
                      </ListItem>
                      {children?.map(child => (
                        <ListItem key={child.text} disablePadding>
                          <StyledNavLink
                            text={child.text}
                            path={concatUrl(item.path, child.path)}
                          />
                        </ListItem>
                      )
                      )}
                    </StrictMode>
                  ) : (<ListItem disablePadding>
                    <StyledNavLink
                      text={text}
                      path={concatUrl(item.path)}
                    />
                  </ListItem>)}
                  {index !== menuItems.length - 1 && <Divider />}
                </List>
              );
            })
          }
        </Box>
      </Drawer>
    </StrictMode>
  );
}
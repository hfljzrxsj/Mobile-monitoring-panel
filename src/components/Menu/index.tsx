import { StrictMode, useState, type Dispatch, type SetStateAction } from "react";
import { Collapse, type DrawerProps, type ListItemButtonProps, Drawer, List, Divider, ListItemButton, ListItemText, StyledEngineProvider, } from '@mui/material';
import { concatUrl, menuItems, type menuItem } from "@/Route";
import { NavLink, type RouteObject } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/ExpandMore';
import style from './_index.module.scss';
import classnames from 'classnames';
import { unstable_batchedUpdates } from "react-dom";
const StyledListItemButton = ({ className, ...props }: ListItemButtonProps) => <ListItemButton
  className={classnames(className, style['ListItemButton'])}
  {...props}
/>;
interface StyledNavLinkProps extends ListItemButtonProps {
  readonly text: string;
  readonly path: string;
  readonly setOpen?: () => void;
}
const StyledNavLink = (props: StyledNavLinkProps) => {
  const { text = '', path = '', setOpen, ...others } = props;
  const [isSelected, setIsSelected] = useState(false);
  const [first, setFirst] = useState(true);
  return (
    <StyledListItemButton
      selected={isSelected}
      disableGutters
      {...others}>
      <NavLink
        to={path}
        className={({ isActive }) => unstable_batchedUpdates(() => {
          setIsSelected(isActive);
          if (isActive && first)
            setOpen?.();
          setFirst(false);
          return style['NavLink'];
        })}
      >
        {/* <ListItemIcon> */}
        {/* </ListItemIcon> */}
        <ListItemText primary={text} />
      </NavLink>
    </StyledListItemButton>
  );
};
const StyledCollase = ({ item }: { readonly item: RouteObject; }) => {
  const { children, id, path = '' } = item;
  const [open, setOpen] = useState(false);
  return (
    <StrictMode>
      <StyledListItemButton onClick={setOpen.bind(null, !open)}
        className={classnames(style['CollapseClick'], { [style['CollapseClickActive'] ?? '']: open })}>
        <ListItemText primary={id} />
        {/* <ListItemIcon> */}
        <KeyboardArrowDownIcon className={classnames({ [style['ArrowDownIcon'] ?? '']: open })} />
        {/* </ListItemIcon> */}
      </StyledListItemButton>
      <Collapse in={open}>
        <ul>
          {children?.map(child => (
            <li>
              <StyledNavLink
                text={child.id ?? ''}
                path={concatUrl(path, child.path ?? '')}
                setOpen={setOpen.bind(null, true)}
              />
            </li>
          )
          )}</ul>
      </Collapse>
    </StrictMode>
  );
};
interface MenuProps extends DrawerProps {
  readonly menuOpen: boolean;
  readonly menuOpenFalse: (menuOpen: boolean) => void;
}
export default function Menu (props: MenuProps) {
  const { menuOpen, menuOpenFalse, ...others } = props;
  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <Drawer
          anchor='left'
          open={menuOpen}
          onClose={menuOpenFalse}
          {...others}
        >
          {
            menuItems.map((item) => {
              const { children, id = '', path = '' } = item;
              return (
                <StrictMode>
                  <List key={id}>
                    {children ? (
                      <StyledCollase
                        item={item} />
                    ) : (
                      <StyledNavLink
                        text={id}
                        path={concatUrl(path)}
                        className={style['overview'] ?? ''}
                      />
                    )}
                  </List>
                  <Divider />
                </StrictMode>
              );
            })
          }
        </Drawer>
      </StyledEngineProvider>
    </StrictMode>
  );
}
import { StrictMode, useState } from "react";
import { Collapse, type DrawerProps, type ListItemButtonProps, Drawer, List, Divider, ListItemButton, ListItemText, } from '@mui/material';
import { concatUrl, menuItems, type menuItem } from "@/Route";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/ExpandMore';
import style from './_index.module.scss';
import classnames from 'classnames';
const StyledListItemButton = ({ className, ...props }: ListItemButtonProps) => <ListItemButton
  className={classnames(className, style['ListItemButton'])}
  {...props}
/>;
interface StyledNavLinkProps extends ListItemButtonProps {
  readonly text: string;
  readonly path: string;
}
const StyledNavLink = (props: StyledNavLinkProps) => {
  const { text = '', path = '', ...others } = props;
  const [isSelected, setIsSelected] = useState(false);
  return (
    <StyledListItemButton
      selected={isSelected}
      disableGutters
      {...others}>
      <NavLink
        to={path}
        className={({ isActive }) => {
          setIsSelected(isActive);
          return style['NavLink'];
        }}
      >
        {/* <ListItemIcon> */}
        {/* </ListItemIcon> */}
        <ListItemText primary={text} />
      </NavLink>
    </StyledListItemButton>
  );
};
const StyledCollase = ({ item }: { readonly item: menuItem; }) => {
  const { children, text, path } = item;
  const [open, setOpen] = useState(false);
  return (
    <StrictMode>
      <StyledListItemButton onClick={setOpen.bind(null, !open)}
        className={classnames(style['CollapseClick'], { [style['CollapseClickActive'] ?? '']: open })}>
        <ListItemText primary={text} />
        {/* <ListItemIcon> */}
        <KeyboardArrowDownIcon className={classnames({ [style['ArrowDownIcon'] ?? '']: open })} />
        {/* </ListItemIcon> */}
      </StyledListItemButton>
      <Collapse in={open}>
        <ul>
          {children?.map(child => (
            <li>
              <StyledNavLink
                text={child.text}
                path={concatUrl(path, child.path)}
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
      <Drawer
        anchor='left'
        open={menuOpen}
        onClose={menuOpenFalse}
        {...others}
      >
        {
          menuItems.map((item) => {
            const { children, text, path } = item;
            return (
              <StrictMode>
                <List key={text}>
                  {children ? (
                    <StyledCollase
                      item={item} />
                  ) : (
                    <StyledNavLink
                      text={text}
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
    </StrictMode>
  );
}
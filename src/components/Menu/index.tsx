import { StrictMode, useState, type Dispatch } from "react";
import { Collapse, type ListItemButtonProps, List, Divider, ListItemButton, ListItemText, StyledEngineProvider, } from '@mui/material';
import { concatUrl, menuItems } from "@/Route";
import { NavLink, type RouteObject } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/ExpandMore';
import style from './_index.module.scss';
import classnames from 'classnames';
import { unstable_batchedUpdates } from "react-dom";
import { useDispatch } from "react-redux";
import { enumActionName, type AppBarTitleAction } from "@/store/AppBarTitleRuducer";
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
  const dispatch = useDispatch<Dispatch<AppBarTitleAction>>();
  return (
    <StyledListItemButton
      selected={isSelected}
      disableGutters
      {...others}>
      <NavLink
        to={path}
        className={({ isActive }) => unstable_batchedUpdates(() => {
          setIsSelected(isActive);
          if (isActive && first) {
            setOpen?.();
          }
          setFirst(false);
          return style['NavLink'];
        })}
        onClick={() => {
          dispatch({ type: enumActionName.SET_TITLE, payload: { title: text } });
        }}
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
          {children?.map((child, index) => (
            <li key={index}>
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
export default function Menu () {
  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        {
          menuItems.map((item, index) => {
            const { children, id = '', path = '' } = item;
            return (
              <StrictMode>
                <List key={index}>
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
      </StyledEngineProvider>
    </StrictMode>
  );
}
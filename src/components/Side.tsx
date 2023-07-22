'use strict';
import * as React from 'react';
import { useState } from 'react';
import styleModule from '../style/Side.module.scss';
import { List, ListItem } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
// import SideItem from './SideItem';
interface propsType {
  setIsIframeShow: (isIframeShow: boolean) => void;
  setIframeSrc: (src: string) => void;
}
export default function Side(props: propsType): JSX.Element {
  const { setIsIframeShow, setIframeSrc } = props;
  const funcList = [
    { title: '影像识别', handlerURL: '/' },
    // { title: '历史记录', handlerURL: '/history' },
    ...(localStorage['permission'] === '0' ? [{ title: '用户管理', handlerURL: '/manager' }] : [])
  ];
  const [selectedDiv, setSelectedDiv] = useState(0);
  const [DialogOpen, setDialogOpen] = useState(false);
  return (
    <React.StrictMode>
      <ul
        className={styleModule['Side']}
      >
        <ListItem>
          <p>{'功能列表'}</p>
          {/* <span>{'∧'}</span> */}
          <List>
            {/* <SideItem
              title={'回到主页'}
              handlerURL={'/'}
            />
            <SideItem
              title={'历史记录'}
              handlerURL={'/history'}
            />
            <SideItem
              title={'用户管理'}
              handlerURL={'/manage'}
            /> */}
            {funcList.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  title={item.title}
                  onClick={() => {
                    if (index !== selectedDiv) {
                      if (index === 0) {
                        setIsIframeShow(false);
                      } else {
                        setIframeSrc(item.handlerURL);
                        setIsIframeShow(true);
                      }
                      // setIsIframeShow(index === 0 ? false : true);
                      setSelectedDiv(index);
                    }
                  }}
                  className={selectedDiv === index ? styleModule['selected'] as string : ''}
                >
                  <p>{item.title}</p>
                </ListItem>
              );
            })}
          </List>
        </ListItem>
        <ListItem>
          <p>{'用户操作'}</p>
          <List>
            <ListItem
              onClick={
                () => setDialogOpen(true)
              }
            >{'退出登录'}</ListItem>
          </List>
        </ListItem>
      </ul>
      <Dialog
        open={DialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'确认要退出吗 ? '}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>{'取消'}</Button>
          <Button
            onClick={() =>
            (setDialogOpen(false), fetch('logout').then(() => {
              localStorage.clear();
              setTimeout(() => location.reload());
            }))
            }
            autoFocus
          >
            {'确认'}
          </Button>
        </DialogActions>
      </Dialog>
    </React.StrictMode>);
}
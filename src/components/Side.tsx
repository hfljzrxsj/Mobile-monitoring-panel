/* eslint-disable react/forbid-component-props */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable no-magic-numbers */
/* eslint-disable sort-keys */

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
export default function Side (props: propsType): React.ReactElement {

  const { setIsIframeShow, setIframeSrc } = props,
    funcList = [
      {
        'title': '影像识别',
        'handlerURL': '/'
      },
      // { title: '历史记录', handlerURL: '/history' },
      ...localStorage['permission'] === '0'
        ? [
          {
            'title': '用户管理',
            'handlerURL': '/manager'
          }
        ]
        : []
    ],
    [
      selectedDiv,
      setSelectedDiv
    ] = useState(0),
    [
      dialogOpen,
      setDialogOpen
    ] = useState(false),
    logout = async (): Promise<void> => {

      setDialogOpen(false);
      await fetch('logout').then(() => {

        localStorage.clear();
        setTimeout(() => {

          location.reload();

        });

      });

    };
  return (
    <React.StrictMode>
      <ul
        className={styleModule['Side']}
      >
        <ListItem>
          <p>
            功能列表
          </p>

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
            {funcList.map((item, index) =>
              <ListItem
                className={selectedDiv === index
                  ? styleModule['selected'] ?? ''
                  : ''}
                key={item.title}
                onClick={(): void => {

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
                title={item.title}
              >
                <p>
                  {item.title}
                </p>
              </ListItem>
            )}
          </List>
        </ListItem>

        <ListItem>
          <p>
            用户操作
          </p>

          <List>
            <ListItem
              onClick={
                (): void => {

                  setDialogOpen(true);

                }
              }
            >
              退出登录
            </ListItem>
          </List>
        </ListItem>
      </ul>

      <Dialog
        aria-describedby="alert-dialog-description"
        aria-labelledby="alert-dialog-title"
        onClose={(): void => {

          setDialogOpen(false);

        }}
        open={dialogOpen}
      >
        <DialogTitle id="alert-dialog-title">
          {'确认要退出吗 ? '}
        </DialogTitle>

        <DialogActions>
          <Button onClick={(): void => {

            setDialogOpen(false);

          }}>
            取消
          </Button>

          <Button
            autoFocus
            onClick={(): void => {

              logout().catch(() => {

                throw new Error('下载失败');

              });

            }}
          >
            确认
          </Button>
        </DialogActions>
      </Dialog>
    </React.StrictMode>);

}

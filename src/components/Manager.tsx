'use strict';
import * as React from 'react';
import Button from '@mui/material/Button';
import styleModule from '../style/Manager.module.scss';
import {
  useState, useEffect,
  useCallback
} from 'react';
import SnackbarAlert from './SnackbarAlert';
import StickyHeadTable from './StickyHeadTable';
import FormDialog from './FormDialog';
import Paper from '@mui/material/Paper';
type severityType = 'success' | 'info' | 'warning' | 'error';
type Tusers = {
  id: number;
  username: string;
  password: string;
  permission: 0 | 1;
}[]
export default function Manager(): JSX.Element {
  const [ToastOpen, setToastOpen] = useState(false);
  const [ToastText, setToastText] = useState<{ severity: severityType; alertText: string; }>({ severity: 'warning', alertText: '暂无数据' });
  const [FormDialogOpen, setFormDialogOpen] = useState(false);
  const handleToastOpen = (obj: { severity: severityType; alertText: string; }) => {
    setToastText(obj);
    setToastOpen(true);
  };
  const [store, setStore] = useState<Tusers>([]);
  const tableFetch = useCallback(async () => {
    try {
      const response = await fetch('api/all');
      const data = await response.json();
      setStore(data.users);
      if (data.length === 0) {
        handleToastOpen({ severity: 'warning', alertText: '暂无数据' });
      }
    } catch (error) {
      handleToastOpen({ severity: 'error', alertText: '获取数据失败' });
    }
  }, []);
  useEffect(() => {
    tableFetch();
  }, [tableFetch]);
  return (
    <React.StrictMode>
      <Paper
        className={styleModule['paper'] as string}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => setFormDialogOpen(true)}
        >
          {'新增用户'}
        </Button>
        <FormDialog
          id={0}
          title={'新增用户'}
          action={tableFetch}
          username=''
          password=''
          open={FormDialogOpen}
          handleClose={() => setFormDialogOpen(false)}
          type='add'
          handleToastOpen={handleToastOpen}
        />
        <StickyHeadTable
          rows={store}
          action={tableFetch}
        />
      </Paper><SnackbarAlert
        ToastOpen={ToastOpen}
        setToastOpen={setToastOpen}
        severity={ToastText.severity}
        alertText={ToastText.alertText}
      />
    </React.StrictMode>
  );
}
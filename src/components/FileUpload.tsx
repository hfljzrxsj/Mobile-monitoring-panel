/* eslint-disable no-console */
'use strict';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import styleModule from '../style/FileUpload.module.scss';
import {
  // useRef,
  useState
} from 'react';
interface ReceivedResultType {
  filePath: string;
  Artifact: number;
  checked: boolean;
}
type severityType = 'success' | 'info' | 'warning' | 'error';
interface propsType {
  FileUploadOpen: boolean;
  handleClose: () => void;
  setIsHidden: (bool: boolean) => void;
  setReceivedResult: (rec: ReceivedResultType[]) => void;
  handleToastOpen: (obj: { severity: severityType; alertText: string; }) => void;
}
export default function FileUpload(props: propsType): JSX.Element {
  const { FileUploadOpen, handleClose, setReceivedResult, handleToastOpen, setIsHidden } = props;
  const [isFile, setIsFile] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileData, setFileData] = useState<File>();
  const [fileValue, setFileValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const fileRef = useRef<HTMLInputElement>(null);
  // const getLastSegment = (t: string, e: string): string => { const n = e.split(t); return n[n.length - 1] as string; };
  // const [FileUploadOpen, setFileUploadOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setFileUploadOpen(true);
  // };

  // const handleClose = () => {
  //   setFileUploadOpen(false);
  // };
  return (
    <Dialog
      open={FileUploadOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>
        {'上传文件'}
      </DialogTitle>
      <DialogContent
        className={styleModule['FileUpload'] as string}
      >
        <Box><input
          style={{ display: isFile ? 'none' : 'block' }}
          type="file"
          id='file'
          accept='.zip'
          value={fileValue}
          onChange={d => {
            if (!d.target || !d.target.files) return;
            const file = d.target.files[0];
            if (!(file && file.name.endsWith('.zip') && file.type === 'application/x-zip-compressed')) { // FileList object or undefined 描述如何获取到文件列表或选择的
              return;
            }
            setFileValue(d.target.value);
            setIsFile(true);
            setFileName(file.name);
            setFileData(file);
          }}
        // ref={fileRef}
        />
          {
            isFile ? <>
              <div>
                <h1>{fileName}</h1><LoadingButton
                  // disabled={isButtonDisabled}
                  loading={isLoading}
                  size='large'
                  variant='contained'
                  sx={{ mr: 1, mt: 1 }}
                  onClick={() => {
                    // setIsHidden(true);
                    setIsLoading(true);
                    const formData = new FormData();
                    formData.append('file', fileData as Blob);
                    fetch('api/file', {
                      method: 'POST',
                      body: formData
                    }).then(e => e.json()).then(e => {
                      const ReceivedResult: ReceivedResultType[] = [];
                      // toggle('上传成功');
                      handleToastOpen({ severity: 'success', alertText: '上传成功' });
                      for (let i = 0; i < e.dcm_filenames.length; i++) {
                        ReceivedResult.push({ filePath: e.dcm_filenames[i].replace('\\', '/'), Artifact: e.predictoutput[i][0], checked: false });
                      }
                      setReceivedResult([...ReceivedResult]);
                      setIsHidden(false);

                    }).catch(() => {
                      handleToastOpen({ severity: 'error', alertText: '对不起, 上传失败' });
                    }).then(() => {
                      handleClose();
                      setFileValue('');
                      setIsLoading(false);
                      // if (!fileRef?.current) return;
                      // fileRef.current.value = '';
                    });
                  }}
                >
                  {'提交'}
                </LoadingButton>
                <Button
                  size='large'
                  variant='contained'
                  sx={{ ml: 1, mt: 1 }}
                  onClick={() => {
                    setIsFile(false);
                    setFileName('');
                    setFileValue('');
                    // if (!fileRef?.current) return;
                    // fileRef.current.value = '';
                  }}
                >
                  {'取消'}
                </Button>
              </div>

            </> :

              <>
                <label htmlFor='file'>
                  <DialogActions>
                    {/* <Button
                size='large'
                variant='contained'
              > */}
                    {'点击选择文件'}
                    {/* </Button> */}
                  </DialogActions>
                </label>
                <p>{'或将文件拖到这里'}</p></>}
        </Box>
      </DialogContent>
      {/* <DialogActions>
        <Button onClick={handleClose}></Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions> */}
    </Dialog >
  );
}
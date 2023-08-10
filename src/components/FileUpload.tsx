/* eslint-disable sort-vars */
/* eslint-disable id-length */
/* eslint-disable sort-keys */
/* eslint-disable max-statements */
/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable no-magic-numbers */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/forbid-component-props */

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import styleModule from '@/style/FileUpload.module.scss';
import {
  // useRef,
  useState
} from 'react';
interface ReceivedResultType {
  filePath: string;
  artifact: number;
  checked: boolean;
}
type severityType = 'error' | 'info' | 'success' | 'warning';
interface propsType {
  FileUploadOpen: boolean;
  handleClose: () => void;
  setIsHidden: (bool: boolean) => void;
  setReceivedResult: (rec: ReceivedResultType[]) => void;
  handleToastOpen: (obj: { severity: severityType; alertText: string; }) => void;
}
interface ResponseType {
  dcm_filenames: string[];
  predictoutput: number[][];
}
export default function FileUpload (props: propsType): React.ReactElement {

  const { FileUploadOpen, handleClose, setReceivedResult, handleToastOpen, setIsHidden } = props,
    [
      isFile,
      setIsFile
    ] = useState(false),
    [
      fileName,
      setFileName
    ] = useState(''),
    [
      fileData,
      setFileData
    ] = useState<File>(),
    [
      fileValue,
      setFileValue
    ] = useState(''),
    [
      isLoading,
      setIsLoading
    ] = useState(false),
    // const fileRef = useRef<HTMLInputElement>(null);
    // const getLastSegment = (t: string, e: string): string => { const n = e.split(t); return n[n.length - 1] as string; };
    // const [FileUploadOpen, setFileUploadOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //   setFileUploadOpen(true);
    // };

    // const handleClose = () => {
    //   setFileUploadOpen(false);
    // };
    upload: () => Promise<void> = async () => {

      setIsLoading(true);
      const formData = new FormData();
      formData.append('file', fileData as Blob);
      try {

        const ReceivedResult: ReceivedResultType[] = [],
          res = await fetch('api/file', {
            'method': 'POST',
            'body': formData
          }),
          response: ResponseType = await res.json() as ResponseType;
        // toggle('上传成功');
        handleToastOpen({
          'severity': 'success',
          'alertText': '上传成功'
        });
        for (let i = 0; i < response.dcm_filenames.length; i += 1) {

          ReceivedResult.push({
            'filePath': response.dcm_filenames[i]?.replace('\\', '/') ?? '',
            'artifact': response.predictoutput[i]?.[0] ?? 0,
            'checked': false
          });

        }
        setReceivedResult([...ReceivedResult]);
        setIsHidden(false);

      } catch (error: unknown) {

        handleToastOpen({
          'severity': 'error',
          'alertText': '对不起, 上传失败'
        });

      }
      handleClose();
      setFileValue('');
      setIsLoading(false);

    },
    handleUpload = (): void => {

      upload().catch(() => {

        handleToastOpen({
          'severity': 'error',
          'alertText': '对不起, 上传失败'
        });

      });

    };
  return (
    <Dialog
      aria-describedby="alert-dialog-description"
      aria-labelledby="alert-dialog-title"
      onClose={handleClose}
      open={FileUploadOpen}
    >
      <DialogTitle>
        上传文件
      </DialogTitle>

      <DialogContent
        className={styleModule['FileUpload'] ?? ''}
      >
        <Box>
          <input
            accept=".zip"
            id="file"
            style={{
              'display': isFile
                ? 'none'
                : 'block'
            }}
            type="file"
            value={fileValue}
            onChange={(event): void => {

              if (!event.target.files) {

                return;

              }
              const [file] = event.target.files;
              if (!file) {

                return;

              }
              if (!file.name.endsWith('.zip') || !(file.type === 'application/x-zip-compressed')) {

                // FileList object or undefined 描述如何获取到文件列表或选择的

                return;

              }

              setFileValue(event.target.value);
              setIsFile(true);
              setFileName(file.name);
              setFileData(file);

            }}
          // ref={fileRef}
          />

          {
            isFile
              ? <div>
                <h1>
                  {fileName}
                </h1>

                <LoadingButton
                  // disabled={isButtonDisabled}
                  loading={isLoading}
                  onClick={handleUpload}
                  variant="contained"
                >
                  提交
                </LoadingButton>

                <Button
                  onClick={(): void => {

                    setIsFile(false);
                    setFileName('');
                    setFileValue('');
                    // if (!fileRef?.current) return;
                    // fileRef.current.value = '';

                  }}
                  size="large"
                  sx={{
                    'ml': 1,
                    'mt': 1
                  }}
                  variant="contained"
                >
                  取消
                </Button>
              </div>

              : <>
                <label htmlFor="file">
                  <DialogActions>
                    {/* <Button
                size='large'
                variant='contained'
              > */}
                    点击选择文件

                    {/* </Button> */}
                  </DialogActions>
                </label>

                <p>
                  或将文件拖到这里
                </p>
              </>
          }
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

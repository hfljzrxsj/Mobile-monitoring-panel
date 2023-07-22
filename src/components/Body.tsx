'use strict';
import * as React from 'react';
import styleModule from '../style/Body.module.scss';
import {
  // useRef,
  useState, useEffect, useCallback
} from 'react';
import {
  Checkbox, Button, Dialog, DialogContent, DialogTitle, Divider,
  // Select
} from '@mui/material';
// import LoadingButton from '@mui/lab/LoadingButton';
import SnackbarAlert from './SnackbarAlert';
import FormControlLabel from '@mui/material/FormControlLabel';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import type { SelectChangeEvent } from '@mui/material/Select';
import FileUpload from './FileUpload';
import CustomizedTables from './CustomizedTables';
type severityType = 'success' | 'info' | 'warning' | 'error';
interface ReceivedResultType {
  filePath: string;
  Artifact: number;
  checked: boolean;
}

export default function Body(): JSX.Element {
  const numberOfGridContainers = 2;
  // const fileRef = useRef<HTMLInputElement>(null);
  // const [isButtonDisabled, setButtonIsDisabled] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  // const [iscircleParentHidden, setIscircleParentHidden] = useState(false);
  const [FlexContainers, setFlexContainers] = useState<Array<React.ReactNode>>([]);
  const [imgOpen, setImgOpen] = useState(false);
  const [altTextCurrent, setAltTextCurrent] = useState('');
  const [ToastOpen, setToastOpen] = useState(false);
  const [ToastText, setToastText] = useState<{ severity: severityType; alertText: string; }>({ severity: 'error', alertText: '对不起, 你上传的不是zip压缩文件' });
  const [modelDialogOpen, setModelDialogOpen] = useState(false);
  const handleToastOpen = (obj: { severity: severityType; alertText: string; }) => {
    setToastText(obj);
    setToastOpen(true);
  };
  // const [model, setModel] = React.useState(1);
  const [FileUploadOpen, setFileUploadOpen] = React.useState(false);

  const downloadFetch = useCallback((params: string[]) => {
    if (params.length === 0) {
      handleToastOpen({ severity: 'error', alertText: '请先选择要下载的文件' });
      return;
    }
    fetch('api/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fileList: params }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('下载失败');
        }
        return response.text();
      })
      .then((data) => {
        open(data.substring(2));
        handleToastOpen({ severity: 'success', alertText: '下载成功' });
      })
      .catch(() => {
        handleToastOpen({ severity: 'error', alertText: '下载失败' });
        // console.log(error);
      });
  }, []);

  const [ReceivedResult, setReceivedResult] = useState<ReceivedResultType[]>([]);
  // const fileInput = () => {
  //   if (!fileRef?.current?.files) return;
  //   const file = fileRef.current.files[0];
  //   if (file && file.name.endsWith('.zip') && file.type === 'application/x-zip-compressed') {
  //     setButtonIsDisabled(false);
  //   } else {
  //     // toggle('对不起, 你上传的不是zip压缩文件');
  //     handleToastOpen({ severity: 'error', alertText: '对不起, 你上传的不是zip压缩文件' });
  //     fileRef.current.value = '';
  //   }
  // };
  const getLastSegment = (t: string, e: string): string => { const n = e.split(t); return n[n.length - 1] as string; };
  const getLastSubstring = (t: string, n: string) => { const i = n.split(t); return i.slice(0, i.length - 1).join(t); };
  useEffect(() => {

    const ArtifactText = ['有', '无'];
    setTimeout(() => {
      const FlexContainers: Array<Array<React.ReactNode>> = [];
      for (let i = 0; i < numberOfGridContainers; i++) {
        FlexContainers.push([]);
      }
      ReceivedResult.forEach((i, index) => {

        const altText = getLastSegment('/', i.filePath);
        const src = `static/${getLastSubstring('.', altText)}.jpg`;
        FlexContainers[i.Artifact ^ 1]?.push(
          <div>
            <Checkbox
              checked={i.checked}
              onChange={() => {
                setReceivedResult(ReceivedResult.map((e, c) => (index === c && (e.checked = !e.checked), e)));
              }}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 58 } }}
            />
            <img
              src={src}
              onClick={() => (setAltTextCurrent(altText), setImgOpen(true))}
            />
            <Button
              onClick={() => downloadFetch([i.filePath])}
              variant="contained"
              size="large"
            >
              {'下载'}
            </Button>
          </div>
        );
      });
      setFlexContainers(
        FlexContainers.map((i: Array<React.ReactNode>, index: number) =>
        (<div
          key={index}
        >
          <p>{`${ArtifactText[index]}伪影`}</p>
          <hr />
          <div
            className={styleModule['grid-container']}
          >
            {i}
          </div>
        </div>))

      );
    });
  }, [ReceivedResult, imgOpen, downloadFetch]);

  return (
    <React.StrictMode>
      <div
        className={styleModule['Body']}
      >
        <div
          className={styleModule['fileButton']}
        >

          {/* <input
            type='file'
            accept='.zip'
            className={styleModule['fileInput']}
            multiple
            onChange={fileInput}
            ref={fileRef}
          /> */}
          <Button
            onClick={() => setFileUploadOpen(true)}
            variant="contained"
            size="large"
          >{'上传文件'}
          </Button>
          <FileUpload
            FileUploadOpen={FileUploadOpen}
            handleClose={() => setFileUploadOpen(false)}
            setReceivedResult={setReceivedResult}
            handleToastOpen={handleToastOpen}
            setIsHidden={setIsHidden}
          />
          {/* <br />
          <label
            htmlFor='fileUpload'
            style={{ display: isButtonDisabled ? 'inline-block' : 'none' }}
          >
            {'请上传zip压缩文件'}
          </label> */}
          <br />
          {/* <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">{'选择模型'}</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              value={model.toString()}
              onChange={handleChange}
              autoWidth
              label="选择模型"
            >
              <MenuItem value={1}>{'模型1'}</MenuItem>
              <MenuItem value={2}>{'模型2'}</MenuItem>
              <MenuItem value={3}>{'模型3'}</MenuItem>
              <MenuItem value={4}>{'模型4'}</MenuItem>
            </Select>
          </FormControl> */}
          {/* <LoadingButton
            disabled={isButtonDisabled}
            onClick={upload}
            loading={iscircleParentHidden}
            variant='contained'
          >
            {'提交'}
          </LoadingButton> */}

          <div
            className={styleModule['result']}
            style={{ display: isHidden ? 'none' : 'block' }}
          >
            <Divider />
            <p
              className={styleModule['resultTitle']}
            >{'识别结果'}
            </p>

            <Button
              onClick={() => downloadFetch(ReceivedResult.filter(e => e.checked).map(e => e.filePath))}
              variant="contained"
              size="large"
            >{'批量下载'}
            </Button>
            <div>
              <FormControlLabel
                label={ReceivedResult.every(e => e.checked) ? '全不选' : '全选'}
                control={
                  <Checkbox
                    indeterminate={ReceivedResult.some((e) => e.checked) && !ReceivedResult.every((e) => e.checked)}
                    onChange={() => ReceivedResult.every(e => e.checked) ? setReceivedResult(ReceivedResult.map(e => (e.checked = !1, e))) : setReceivedResult(ReceivedResult.map(e => (e.checked = !0, e)))}
                    checked={ReceivedResult.every((e) => e.checked)}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 58 } }}
                  />}
                className={styleModule['checkbox'] as string}
              /><FormControlLabel
                label="反选"
                control={<Checkbox
                  indeterminate={ReceivedResult.some((e) => e.checked) && !ReceivedResult.every((e) => e.checked)}
                  onChange={() => setReceivedResult(ReceivedResult.map((e) => (e.checked = !e.checked, e)))}
                  checked={ReceivedResult.every((e) => e.checked)}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 58 } }}
                />}
                className={styleModule['checkbox'] as string}
              />
            </div>
            <div
              className={styleModule['flex-container']}
            >
              {FlexContainers}
            </div>
            <Button
              onClick={() => setModelDialogOpen(true)}
            >{'点我查看模型准确率'}</Button>
            <Dialog
              open={modelDialogOpen}
              onClose={() => setModelDialogOpen(false)}
            >
              <DialogTitle>{'模型准确率'}</DialogTitle>
              <DialogContent>
                <CustomizedTables />
              </DialogContent>

            </Dialog>
          </div>
        </div>
      </div>
      {imgOpen && <Dialog
        open={imgOpen}
        onClose={() => setImgOpen(false)}
      >
        <DialogTitle>{altTextCurrent}</DialogTitle>
        <DialogContent>
          <img
            src={`static/${getLastSubstring('.', altTextCurrent)}.jpg`}
            alt={altTextCurrent}
            style={{ maxWidth: '100%', minWidth: '560px' }}
          />
        </DialogContent>
      </Dialog>}
      <SnackbarAlert
        ToastOpen={ToastOpen}
        setToastOpen={setToastOpen}
        severity={ToastText.severity}
        alertText={ToastText.alertText}
      />
    </React.StrictMode>);
}
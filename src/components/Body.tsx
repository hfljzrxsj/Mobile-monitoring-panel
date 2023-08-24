/* eslint-disable sort-imports */
// /* eslint-disable one-var */
/* eslint-disable sort-vars */
/* eslint-disable react/forbid-component-props */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable id-length */
/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable max-statements */
import {
  // UseRef,
  useCallback,
  useEffect,
  useState,
  type ReactElement,
  type ReactNode
} from 'react';
import {
  Checkbox, Button, Dialog, DialogContent, DialogTitle, Divider
  // Select
} from '@mui/material';
// import LoadingButton from '@mui/lab/LoadingButton';
import styleModule from '../style/Body.module.scss';
import SnackbarAlert from './SnackbarAlert';
import FormControlLabel from '@mui/material/FormControlLabel';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import type { SelectChangeEvent } from '@mui/material/Select';
import FileUpload from '@/components/FileUpload';
import CustomizedTables from './CustomizedTables';
import * as React from 'react';
type SeverityType = 'error' | 'info' | 'success' | 'warning';
type ReadonlyReactNode = Readonly<ReactNode>;
interface ToastType {
  readonly severity: SeverityType;
  readonly alertText: string;
}
interface ReceivedResultType {
  readonly filePath: string;
  readonly artifact: number;
  checked: boolean;
}
type CSSModuleClasses = Readonly<Record<string, string>>;
interface BodyType {
  readonly styleModuleClassName?: CSSModuleClasses;
}
export default function Body (props: BodyType): ReactElement {

  const {
    styleModuleClassName = styleModule as CSSModuleClasses
  } = props,
    zero = 0,
    numberOfGridContainers = 2,
    // const fileRef = useRef<HTMLInputElement>(null);
    // const [isButtonDisabled, setButtonIsDisabled] = useState(true);
    [
      isHidden,
      setIsHidden
    ] = useState(true),
    // const [iscircleParentHidden, setIscircleParentHidden] = useState(false);
    [
      flexContainers,
      setFlexContainers
    ] = useState<ReactNode[]>([]),
    [
      imgOpen,
      setImgOpen
    ] = useState(false),
    [
      altTextCurrent,
      setAltTextCurrent
    ] = useState(''),
    [
      toastOpen,
      setToastOpen
    ] = useState(false),
    [
      toastText,
      setToastText
    ] = useState<{ severity: SeverityType; alertText: string; }>({
      'alertText': '对不起, 你上传的不是zip压缩文件',
      'severity': 'error'
    }),
    [
      modelDialogOpen,
      setModelDialogOpen
    ] = useState(false),
    handleToastOpen: (obj: ToastType) => void = (obj: ToastType) => {

      setToastText(obj);
      setToastOpen(true);

    },
    // const [model, setModel] = React.useState(1);
    [
      fileUploadOpen,
      setFileUploadOpen
    ] = useState(false),
    downloadFetch = useCallback(async (params: (readonly string[])) => {

      if (params.length === zero) {

        handleToastOpen({
          'alertText': '请先选择要下载的文件',
          'severity': 'error'
        });
        return;

      }
      try {

        const response = await fetch('api/download', {
          'body': JSON.stringify({ 'fileList': params }),
          'headers': {
            'Content-Type': 'application/json'
          },
          'method': 'POST'
          // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
        }).then((res) => {

          if (!res.ok) {

            throw new Error('下载失败');

          }
          return res;

        }
        ),
          two = 2,
          data = await response.text();
        open(data.substring(two));
        handleToastOpen({
          'alertText': '下载成功',
          'severity': 'success'
        });

      } catch (error: unknown) {

        handleToastOpen({
          'alertText': '下载失败',
          'severity': 'error'
        });

      }
      // .then(async (response) => {
      //   if (!response.ok) {
      //     throw new Error('下载失败');
      //   }
      //   return response.text();
      // }).then((data) => {
      //   const two = 2;
      //   open(data.substring(two));
      //   handleToastOpen({
      //     'alertText': '下载成功',
      //     'severity': 'success'
      //   });
      // }).catch(() => {
      //   handleToastOpen({
      //     severity: 'error',
      //     alertText: '下载失败'
      //   });
      //   // console.log(error);
      // });

    }, []),
    [
      receivedResult,
      setReceivedResult
    ] = useState<ReceivedResultType[]>([]),
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
    getLastSegment = (kid: string, parent: string): string => {

      const res = parent.split(kid);
      if (res.length > 1) {

        const result = res[res.length - 1];
        if (typeof result === 'string') {

          return result;

        }

      }
      return '';

    },
    getLastSubstring: (t: string, n: string) => string = (t: string, n: string) => {

      const i = n.split(t);
      return i.slice(0, i.length - 1).join(t);

    };
  useEffect(() => {

    const ArtifactText = [
      '有',
      '无'
    ];
    setTimeout(() => {

      const FlexContainers: Readonly<ReactNode>[][] = [];
      for (let i = 0; i < numberOfGridContainers; i += 1) {

        FlexContainers.push([]);

      }
      receivedResult.forEach((i: Readonly<ReceivedResultType>, index) => {

        const altText = getLastSegment('/', i.filePath),
          src = `static/${getLastSubstring('.', altText)}.jpg`;
        FlexContainers[i.artifact ^ 1]?.push(
          <React.StrictMode>
            <div>
              <Checkbox
                checked={i.checked}
                onChange={(): void => {

                  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
                  setReceivedResult(receivedResult.map((e, c) => {

                    if (index === c) {

                      e.checked = !e.checked;

                    }
                    return e;

                  }));

                }}
                sx={{ '& .MuiSvgIcon-root': { 'fontSize': 58 } }}
              />

              <img
                onClick={(): void => {

                  setAltTextCurrent(altText);
                  setImgOpen(true);

                }}
                src={src}
              />

              <Button
                onClick={(): void => {

                  downloadFetch([i.filePath]).catch(() => {

                    throw new Error('下载失败');

                  });

                }}
                size="large"
                variant="contained"
              >
                下载
              </Button>
            </div>
          </React.StrictMode>);

      });
      setFlexContainers(
        // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
        FlexContainers.map((i: ReadonlyReactNode[], index: number) =>
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            <p>
              {`${ArtifactText[index] ?? ''}伪影`}
            </p>

            <hr />

            <div
              className={styleModuleClassName['grid-container']}
            >
              {i}
            </div>
          </div>
        )
      );

    });

  }, [
    receivedResult,
    imgOpen,
    downloadFetch,
    styleModuleClassName
  ]
  );
  return (
    <React.StrictMode>
      <div
        className={styleModuleClassName['Body']}
      >
        <div
          className={styleModuleClassName['fileButton']}
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
            onClick={(): void => {

              setFileUploadOpen(true);

            }}
            size="large"
            variant="contained"
          >
            上传文件
          </Button>

          <FileUpload
            FileUploadOpen={fileUploadOpen}
            handleClose={(): void => {

              setFileUploadOpen(false);

            }}
            handleToastOpen={handleToastOpen}
            setIsHidden={setIsHidden}
            setReceivedResult={setReceivedResult}
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
            className={styleModuleClassName['result']}
            style={{
              'display': isHidden
                ? 'none'
                : 'block'
            }}
          >
            <Divider />

            <p
              className={styleModuleClassName['resultTitle']}
            >
              识别结果
            </p>

            <Button
              onClick={(): void => {

                downloadFetch(receivedResult.filter((e: Readonly<ReceivedResultType>) => e.checked).map((e: Readonly<ReceivedResultType>) => e.filePath)).catch(() => {

                  throw new Error('下载失败');

                });

              }}
              size="large"
              variant="contained"
            >
              批量下载
            </Button>

            <div>
              <FormControlLabel
                className={styleModuleClassName['checkbox'] ?? ''}
                control={
                  <Checkbox
                    checked={receivedResult.every((e: Readonly<ReceivedResultType>) => e.checked)}
                    indeterminate={receivedResult.some((e: Readonly<ReceivedResultType>) => e.checked) && !receivedResult.every((e: Readonly<ReceivedResultType>) => e.checked)}
                    onChange={(): void => {

                      receivedResult.every((e: Readonly<ReceivedResultType>) => e.checked);
                      if (receivedResult.every((e: Readonly<ReceivedResultType>) => e.checked)) {

                        // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
                        setReceivedResult(receivedResult.map((e) => {

                          e.checked = false;
                          return e;

                        }));

                      } else {

                        // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
                        setReceivedResult(receivedResult.map((e) => {

                          e.checked = true;
                          return e;

                        }));

                      }

                    }}
                    sx={{ '& .MuiSvgIcon-root': { 'fontSize': 58 } }}
                  />
                }
                label={receivedResult.every((e: Readonly<ReceivedResultType>) => e.checked)
                  ? '全不选'
                  : '全选'}
              />

              <FormControlLabel
                className={styleModuleClassName['checkbox'] ?? ''}
                control={<Checkbox
                  checked={receivedResult.every((e: Readonly<ReceivedResultType>) => e.checked)}
                  indeterminate={receivedResult.some((e: Readonly<ReceivedResultType>) => e.checked) && !receivedResult.every((e: Readonly<ReceivedResultType>) => e.checked)}
                  onChange={(): void => {

                    // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
                    setReceivedResult(receivedResult.map((e) => {

                      e.checked = !e.checked;
                      return e;

                    }));

                  }}
                  sx={{ '& .MuiSvgIcon-root': { 'fontSize': 58 } }}
                />}
                label="反选"
              />
            </div>

            <div
              className={styleModuleClassName['flex-container']}
            >
              {flexContainers}
            </div>

            <Button
              onClick={(): void => {

                setModelDialogOpen(true);

              }}
            >
              点我查看模型准确率
            </Button>

            <Dialog
              onClose={(): void => {

                setModelDialogOpen(false);

              }}
              open={modelDialogOpen}
            >
              <DialogTitle>
                模型准确率
              </DialogTitle>

              <DialogContent>
                <CustomizedTables />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {imgOpen
        ? <Dialog
          onClose={(): void => {

            setImgOpen(false);

          }}
          open={imgOpen}
        >
          <DialogTitle>
            {altTextCurrent}
          </DialogTitle>

          <DialogContent>
            <img
              alt={altTextCurrent}
              src={`static/${getLastSubstring('.', altTextCurrent)}.jpg`}
              style={{
                'maxWidth': '100%',
                'minWidth': '560px'
              }}
            />
          </DialogContent>
        </Dialog>
        : null}

      <SnackbarAlert
        ToastOpen={toastOpen}
        alertText={toastText.alertText}
        setToastOpen={setToastOpen}
        severity={toastText.severity}
      />
    </React.StrictMode>);

}
Body.defaultProps = {
  'styleModuleClassName': styleModule as CSSModuleClasses
};

import * as React from 'react';
import {
  type RRNState,
  enumActionName,
  enumSeverity,
  enumSnackbarAlert,
  useTypedSelector
} from '@/store';
import type {
  RRN_,
  // RRNReactElementGenericity,
  RRNboolean,
  // RRNnumber,
  RRNstring,
  anyReactElementGenericity
} from '@/types';
import axios, { type AxiosResponse } from 'axios';
import {
  // type ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { Button } from '@mui/material';
import SnackbarAlert from './SnackbarAlert';
import TextAnnotationDetail from './TextAnnotationDetail';
import styleModule from '../style/TextAnnotation.module.scss';
import { useDispatch } from 'react-redux';
import Json from '@/json/test.json';
// import useBoolean from 'ahooks/lib/useBoolean';
// import { useBoolean } from 'ahooks';
// import usesnackbarAlertOpen from '@/actions';
interface TextAnnotationDivElement extends HTMLDivElement {
  readonly isEditing: RRNboolean;
}
type RRN_TextAnnotationDivElement = RRN_<TextAnnotationDivElement>;
// eslint-disable-next-line no-shadow
enum leftright {
  left = 'left',
  right = 'right'
}
interface queryType {
  readonly [leftright.left]: RRNstring;
  readonly [leftright.right]: RRNstring;
}
type RN_AxiosResponse<T> = Readonly<NonNullable<AxiosResponse<T>>>;

/**
+ * Renders a text annotation component.
+ *
+ * @return {ReactElement} The rendered text annotation component.
+ */
export default function TextAnnotation (): anyReactElementGenericity {
  // console.log('Json:', Json);
  const [
    isloading,
    setIsloading
  ] = useState(false),
    //   [
    //   open,
    //   { toggle }
    // ] = useBoolean(false),
    dispatch = useDispatch(),
    host = 'http://127.0.0.1:',
    // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
    { MODE } = useTypedSelector((state) => state),
    isDEV = MODE === 'dev',
    // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
    { 'LEFT': left, 'RIGHT': right, PORT = '1392' } = useTypedSelector((state) => state),
    leftRef = useRef<RRN_TextAnnotationDivElement>(null),
    rightRef = useRef<RRN_TextAnnotationDivElement>(null),
    // const [leftRef, rightRef] = new Array(2).fill(useRef<HTMLDivElement>(null));
    // const [leftRef, rightRef] = Array.apply(null, Array(2)).map(Number.prototype.valueOf, useRef<HTMLDivElement>(null));
    snackbarAlertOpen = useCallback((alertText: RRNstring, severity: RRN_<enumSeverity>): void => {

      // console.log(' :', open);
      dispatch({
        'type': enumActionName.OPENTRUE,
        [enumActionName.SnackbarAlert]: {
          [enumSnackbarAlert.alertText]: alertText,
          [enumSnackbarAlert.severity]: severity,
          [enumSnackbarAlert.open]: true
        }
      });

    }, [dispatch]),
    // eslint-disable-next-line sort-vars, @typescript-eslint/prefer-readonly-parameter-types
    notification = (title: RRNstring, options?: RRN_<NotificationOptions>): void => {

      if (!('Notification' in window)) {

        throw new Error('This browser does not support desktop notification');

      } else if (Notification.permission === 'granted') {

        // If it's okay let's create a notification
        // eslint-disable-next-line no-new
        new Notification(title, {
          'body': 'By HJX',
          'icon': '/assets/react_ts.png',
          'tag': 'HJX',
          ...options
        });

      } else if (Notification.permission !== 'denied') {

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Notification.requestPermission().then((permission) => {

          // If the user accepts, let's create a notification
          if (permission === 'granted') {

            notification(title, options);

          }

        });

      }

    };
  useEffect(
    () => {

      // document.addEventListener('visibilitychange', () => {
      //   let leaveNotification: Notification | null = null;
      //   if (document.visibilityState === 'hidden') {
      //     leaveNotification = new Notification('快回来', {
      //       'tag': 'leave'
      //     });
      //   } else if (leaveNotification) {
      //     leaveNotification.close();
      //   }
      // });
      // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
      axios.get('/public/properties.json').then((data: RN_AxiosResponse<RRNState>) => {

        const properties = data.data;
        // console.info(data.data);
        // alert(data.data.a);
        dispatch({
          'type': enumActionName.MODE,
          [enumActionName.MODE]: properties[enumActionName.MODE]
        });
        dispatch({
          'type': enumActionName.FONTSIZE,
          [enumActionName.FONTSIZE]: properties[enumActionName.FONTSIZE]
        });
        dispatch({
          'type': enumActionName.PORT,
          [enumActionName.PORT]: properties[enumActionName.PORT]
        });
        // dispatch({
        //   'type': enumActionType.OPEN,
        //   [enumActionType.OPEN]: properties[enumActionType.FONTSIZE]
        // });

      }).catch(() => {

        snackbarAlertOpen('配置文件不存在！', enumSeverity.error);

      });
      // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
      axios.get(`${host}${PORT}/api/query`).then((data: RN_AxiosResponse<RRN_<queryType>>) => {

        // eslint-disable-next-line no-magic-numbers, @typescript-eslint/no-magic-numbers
        if (data.status !== 200) {

          snackbarAlertOpen('获取数据失败！', enumSeverity.error);
          return;

        }
        const { [leftright.left]: leftText, [leftright.right]: rightText } = data.data;
        dispatch({
          'type': enumActionName.LEFT,
          [enumActionName.LEFT]: leftText
        });
        dispatch({
          'type': enumActionName.RIGHT,
          [enumActionName.RIGHT]: rightText
        });

      }).catch((error) => {

        // console.log(' e.toString():', error.toString());
        if (error instanceof Error && error.toString() === 'Error: Network Error') {

          snackbarAlertOpen('网络错误！', enumSeverity.error);
          return;

        }
        throw error;

      });

    }
    , [
      dispatch,
      snackbarAlertOpen,
      PORT
    ]);
  return (
    <React.StrictMode>
      <div
        className={styleModule['text-annotation']}
      >
        <TextAnnotationDetail
          classNameString="text-annotation-left"
          ref={leftRef}
          text={left}
        />

        <TextAnnotationDetail
          classNameString="text-annotation-right"
          ref={rightRef}
          text={right}
        />
      </div>

      {isDEV
        ? <Button
          disabled={isloading}
          // eslint-disable-next-line max-statements
          onClick={(): void => {

            setIsloading(true);
            const { 'current': leftCurrent } = leftRef,
              { 'current': rightCurrent } = rightRef;
            // run().catch(console.dir);
            if (!leftCurrent || !rightCurrent) {

              return;

            }
            if (leftCurrent.isEditing || rightCurrent.isEditing) {

              notification('请先将所有编辑框设为只读状态');
              snackbarAlertOpen('请先将所有编辑框设为只读状态', enumSeverity.warning);
              setIsloading(false);
              return;

            }
            if (!(leftCurrent.innerHTML || left) && !(rightCurrent.innerHTML || right)) {

              notification('两个编辑框都是空的');
              snackbarAlertOpen('两个编辑框都是空的', enumSeverity.warning);
              setIsloading(false);
              return;

            }
            axios.post(`${host}${PORT}/api/modify`, {
              'left': leftCurrent.innerHTML || left,
              'right': rightCurrent.innerHTML || right
              // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
            }).then((data) => {

              // eslint-disable-next-line no-magic-numbers, @typescript-eslint/no-magic-numbers
              if (data.status === 200) {

                notification('保存成功');
                snackbarAlertOpen('保存成功', enumSeverity.success);

              } else {

                throw new Error('保存失败');

              }

            }).catch(() => {

              notification('保存失败');
              snackbarAlertOpen('保存失败', enumSeverity.error);

            }).finally(() => {

              setIsloading(false);

            });

          }}
          size="large"
          variant="contained"
        >
          {isloading
            ? <span
              className={styleModule['loading']}
            />
            : '保存'}
        </Button>
        : null}

      <SnackbarAlert />
    </React.StrictMode>
  );

}

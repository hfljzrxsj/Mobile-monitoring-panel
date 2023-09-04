/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {
  type RRNState,
  enumActionName,
  enumSeverity,
  enumSnackbarAlert,
  useTypedSelector
} from '@/store/index.mjs';
import type {
  RRN_,
  RRNReactElementGenericity,
  RRNboolean,
  // RRNnumber,
  RRNstring,
  anyReactElementGenericity
} from '@/types/index.mjs';
import axios, { type AxiosResponse } from 'axios';
import {
  // type ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { Button, ButtonGroup } from '@mui/material';
// import SnackbarAlert from './SnackbarAlert';
// import TextAnnotationDetail from './TextAnnotationDetail';
// import styleModule from '../style/TextAnnotation.module.scss';
import { useDispatch } from 'react-redux';
interface ButtonGroupsProps {

}
type RRN_ButtonGroupsProps = RRN_<ButtonGroupsProps>;
export default function ButtonGroups (props: RRN_ButtonGroupsProps): RRNReactElementGenericity<RRN_ButtonGroupsProps> {

  return (
    <React.StrictMode>
      <ButtonGroup
        size="large"
        variant="contained"
      >
        <Button>
          Left
        </Button>

        <Button>
          Middle
        </Button>

        <Button>
          Right
        </Button>
      </ButtonGroup>


    </React.StrictMode>);

}

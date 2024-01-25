
import * as React from 'react';
// import { Provider } from 'react-redux';
// import IndexedDBtest from '@/indexedDBPlay';
import { StrictMode } from 'react';
// import WebWorker from '@/components/webworker';
// import Wasm from './components/wasm';
// import SVG from '@/assets/AcceptDatePassedClock.svg';
// import { ReactComponent as ReactLogo } from '@/assets/AcceptDatePassedClock.svg';
// import Head from '@/components/Head';
// import Side from '@/components/Side';
// import styleModule from './APP.module.scss';
// import Body from '@/components/Body';
// import Counter from './Counter';
// import TextAnnotation from '@/components/TextAnnotation';
// import store from '@/store';
import MyRoute from './Route';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import SnackbarAlert from './components/SnackbarAlert';
// import Manager from '@/components/Manager';
// import Login from './components/Login';

export default function APP () {
  //@ts-expect-error
  return (<StrictMode><Provider store={store}>
    <BrowserRouter>
      <MyRoute />
    </BrowserRouter>
    <SnackbarAlert />
  </Provider>
  </StrictMode>);
}


import * as React from 'react';
// import { Provider } from 'react-redux';
// import IndexedDBtest from '@/indexedDBPlay';
import { StrictMode } from 'react';
// import WebWorker from '@/components/webworker';
import Wasm from './components/wasm';
// import Head from '@/components/Head';
// import Side from '@/components/Side';
// import styleModule from './APP.module.scss';
// import Body from '@/components/Body';
// import Counter from './Counter';

// import TextAnnotation from '@/components/TextAnnotation';
// import store from '@/store';


// import Manager from '@/components/Manager';
// import Login from './components/Login';

export default function APP (): React.ReactElement {

  // const [
  //   isIframeShow,
  //   setIsIframeShow
  // ] = useState(false),
  //   [
  //     iframeSrc,
  //     setIframeSrc
  //   ] = useState('');

  return (
    <StrictMode>
      {/* <IndexedDBtest /> */}
      <Wasm />

      {/* <Head /> */}

      {/* <Login /> */}
      {/* <div
        className={styleModule['APP']}
      >
        <Side
          setIframeSrc={setIframeSrc}
          setIsIframeShow={setIsIframeShow}
        />

        {isIframeShow
          ? <iframe
            sandbox="allow-popups"
            src={iframeSrc}
          />
          : <Body />} */}

      {/* <Manager /> */}
      {/* </div> */}
      {/* <TextAnnotation /> */}

      {/* <Provider store={store}>
        <TextAnnotation />
      </Provider> */}

    </StrictMode>);

}


import * as React from 'react';
import { useState } from 'react';

// import Head from '@/components/Head';
// import Side from '@/components/Side';
// import styleModule from './APP.module.scss';
// import Body from '@/components/Body';
import TextAnnotation from '@/components/TextAnnotation';

/*
 * Import Manager from '@/components/Manager';
 * import Login from './components/Login';
 */
export default function APP (): React.ReactElement {

  const [
    isIframeShow,
    setIsIframeShow
  ] = useState(false),
    [
      iframeSrc,
      setIframeSrc
    ] = useState('');

  return (
    <React.StrictMode>
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
      <TextAnnotation />
    </React.StrictMode>);

}

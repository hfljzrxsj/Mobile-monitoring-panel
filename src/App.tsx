'use strict';
import * as React from 'react';
import { useState } from 'react';

import Head from './components/Head';
import Side from './components/Side';
import styleModule from './APP.module.scss';
import Body from './components/Body';

// import Manager from './components/Manager';
// import Login from './components/Login';
export default function APP(): JSX.Element {
  const [isIframeShow, setIsIframeShow] = useState(false);
  const [iframeSrc, setIframeSrc] = useState('');

  return (
    <React.StrictMode>
      <Head />
      {/* <Login /> */}
      <div
        className={styleModule['APP']}
      >
        <Side
          setIsIframeShow={setIsIframeShow}
          setIframeSrc={setIframeSrc}
        />
        {isIframeShow ? <iframe
          src={iframeSrc} /> : <Body />}

        {/* <Manager /> */}
      </div>

    </React.StrictMode>);
}
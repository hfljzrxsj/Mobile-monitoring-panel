'use strict';
import * as React from 'react';
import styleModule from '../style/Head.module.scss';
export default function Head(): JSX.Element {
  return (
    <React.StrictMode>
      <div
        className={styleModule['head']}
      >
        <span>{'医学影像识别'}</span>
        <span>{localStorage['username']}</span>
      </div>
    </React.StrictMode>);
}
/* eslint-disable one-var */
/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
/* eslint-disable no-console */
import * as React from 'react';
import { Button } from '@mui/material';
import { type ReactElement } from 'react';
import workerScript from './webworker';
export default function WebWorker (): ReactElement {

  const worker = new Worker(workerScript);

  const startWorker = (): void => {

    if (typeof Worker === 'undefined') {

      console.log('浏览器不支持 Web Workers.');
      return;

    }

    // 使用 webworker.js 文件创建 Web Worker
    // worker = new Worker('webworker.js');

    // 监听 Web Worker 返回的消息
    worker.onmessage = (event: MessageEvent<string>): void => {

      const { lastEventId, origin, ports, source, data } = event;
      console.log('接收到来自 Web Worker 的消息:', lastEventId, origin, ports, source, data);

    };

    // 向 Web Worker 发送消息
    worker.postMessage('Hello from main thread!');

  };
  const stopWorker = (): void => {

    // if (worker) {

    // 终止 Web Worker
    worker.terminate();
    console.log('终止 Web Worker.');

    // }

  };
  return (
    <React.StrictMode>
      <Button
        onClick={startWorker}
        variant="contained"
      >
        开始 Web Worker
      </Button>

      <Button
        onClick={stopWorker}
        variant="contained"
      >
        停止 Web Worker
      </Button>
    </React.StrictMode>
  );

}

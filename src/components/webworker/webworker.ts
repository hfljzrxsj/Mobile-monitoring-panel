/* eslint-disable one-var */
/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
// webworker.js

// 监听主线程发送的消息
const workercode = (): void => {

  self.onmessage = (event: MessageEvent<string>): void => {

    const workerResult = `主线程发来的: ${event.data}`;
    console.log(workerResult);
    self.postMessage('子线程返回的：zzz');

  };

};

const code = workercode.toString();
// code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));

console.log(' :', String(workercode), workercode.toString());

const workerScript = URL.createObjectURL(new Blob([code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'))], { 'type': 'application/javascript' }));
console.log(' code:', workerScript);
export default workerScript;


import * as React from 'react';
import type { ReactElement } from 'react';
import { fib } from '../assembly/releases/release.js';
export default function Wasm (): ReactElement {

  console.log(Object.create(globalThis), import.meta.url);
  return (
    <React.StrictMode>
      <div>
        {fib(10)}
      </div>
    </React.StrictMode>);

}

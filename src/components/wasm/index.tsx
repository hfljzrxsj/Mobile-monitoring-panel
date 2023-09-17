/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable no-magic-numbers */
import * as React from 'react';
import type { ReactElement } from 'react';
import { fib } from '../assembly/releases/release.js';
import getAuth from '@/components/base64Play';
export default function Wasm (): ReactElement {

  console.log(Object.create(globalThis),
    import.meta.url,
    import.meta.env
    // process
  );

  console.log('getAuth :',
    getAuth('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmdWxsTmFtZSI6ImNmMiwgY2YyIiwiYXV0aG9yaXRpZXMiOlsiYWRtaW46d3JpdGUiLCJjYXRyZXBvcnQ6cmVhZCIsImNoaW5hX21hcmtldGluZzpyZWFkIiwiZ2U6ZXhwb3J0IiwiZ2U6cmVhZCIsImdlOndyaXRlIiwiam91cm5hbCIsIm9wdDphcHByb3ZhbCIsIm9wdDppbiIsIm9wdDpvdXQiLCJyZXBvcnQ6cmVhZCIsInJlcG9ydDpyZWFkbGltaXRlZCIsInNpOmV4cG9ydCIsInNpOnJlYWQiLCJzaTp3cml0ZSIsInNpcDpyZWFkIiwic2lwOndyaXRlLWhhbmRsaW5nLWNlIiwic2lwOndyaXRlLWpwYSJdLCJ1c2VybmFtZSI6IjI1MTMxNTE5MTFAcXEuY29tIiwiaWF0IjoxNjk0MTkxMTA3LCJleHAiOjE2OTQxOTgzMDcsIm5iZiI6MTY5NDE5MTEwN30.XNF83mVYEPcqqTzr6BiXVVpCiuhdiBlfB4qvf3NGX0A'));
  // console.log('getAuth :',
  //   getAuth('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmdWxsTmFtZSI6ImNmMiwgY2YyIiwiYXV0aG9yaXRpZXMiOlsiYWRtaW46d3JpdGUiLCJjYXRyZXBvcnQ6cmVhZCIsImNoaW5hX21hcmtldGluZzpyZWFkIiwiZ2U6ZXhwb3J0IiwiZ2U6cmVhZCIsImdlOndyaXRlIiwiam91cm5hbCIsIm9wdDphcHByb3ZhbCIsIm9wdDppbiIsIm9wdDpvdXQiLCJyZXBvcnQ6cmVhZCIsInJlcG9ydDpyZWFkbGltaXRlZCIsInNpOmV4cG9ydCIsInNpOnJlYWQiLCJzaTp3cml0ZSIsInNpcDpyZWFkIiwic2lwOndyaXRlLWhhbmRsaW5nLWNlIiwic2lwOndyaXRlLWpwYSJdLCJ1c2VybmFtZSI6IjI1MTMxNTE5MTFAcXEuY29tIiwiaWF0IjoxNjk0MTkxMTA3LCJleHAiOjE2OTQxOTgzMDcsIm5iZiI6MTY5NDE5MTEwN30.XNF83mVYEPcqqTzr6BiXVVpCiuhdiBlfB4qvf3NGX0A'));
  return (
    <React.StrictMode>
      <div>
        {
          // import.meta.env.MODE === 'development' &&
          fib(10)
        }
      </div>
    </React.StrictMode>);

}

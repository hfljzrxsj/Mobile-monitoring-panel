/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable no-magic-numbers */
// import { decode } from 'base-64';

const base64Urldecode = (inp: string): string => {

  // Replace non-url compatible chars with base64 standard chars
  let input = inp.replace(/-/ug,
    '+').replace(/_/gu,
      '/');

  // Pad out with standard base64 required padding characters
  const pad = input.length % 4;
  if (pad) {

    if (pad === 1) {

      throw new Error(
        'InvalidLengthError: Input base64url string is the wrong length to determine padding'
      );

    }
    input += new Array(5 - pad).join('=');

  }

  return input;

};

export default function getAuth (authToken: string): string {

  const authArr = authToken.split('.'),
    [, str = ''] = authArr,
    dec = atob(base64Urldecode(str)),
    info = JSON.parse(dec) as { authorities: string[]; },
    [result] = info.authorities;
  console.log('info :',
    dec);
  return result ?? '';

}


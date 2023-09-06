export function fib (n: i32): string {

  // return 'dXNlclBlcm1pc3Npb25z';
  let a = 0,
    b = 1;
  if (n > 0) {

    while (--n) {

      const t = a + b;
      a = b;
      b = t;

    }
    return b.toString();

  }
  return a.toString();

}

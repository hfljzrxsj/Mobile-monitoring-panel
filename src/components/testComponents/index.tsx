import { useState } from "react";

export default function test () {
  let [a, setA] = useState([1, 2, 3]);
  return (
    <div>
      <div
        style={{ color: a[0] > 5 ? 'red' : 'blue' }}
      >{a.join(',')}</div>
      <button
        onClick={() => {
          a[Math.round(Math.random())] = Math.round(Math.random()) * 10;
        }}
      >click</button>
    </div>
  );
}
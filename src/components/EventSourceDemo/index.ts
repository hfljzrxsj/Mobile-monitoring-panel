/* eslint-disable no-console */
/* eslint-disable padded-blocks */
// import { useEffect } from "react";
export default function EventSourceDemo (): void {
  // useEffect(() => {
  // addEventListener("DOMContentLoaded", function () {
  const evsrc = new EventSource('http://[fe80::841c:4ec3:8058:656a]:8000/api/EventSourceTest',
    { 'withCredentials': false });
  evsrc.onopen = function (): void {
    console.log('start');
  };
  evsrc.onmessage = function (ev: MessageEvent<string>) {
    // document.body.insertAdjacentHTML("beforeend", "<li>" + ev.data + "</li>");
    console.log(ev.data);
  };
  // evsrc.addEventListener("message", msgEvent)
  evsrc.onerror = function (ev) {
    console.log(ev);
  };
  // });
  // }, []);
}

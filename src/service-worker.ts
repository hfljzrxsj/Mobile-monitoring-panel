/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */
import { } from "module";
declare const self: ServiceWorkerGlobalScope;
self.addEventListener('install', event => {
  console.info('install', event);
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  console.info('activate', event);
  event.waitUntil(self.clients.claim());
});

// self.addEventListener('fetch', event => {
//   console.info('fetch', event);
//   event.respondWith(fetch(event.request));
// });

self.addEventListener('message', (event) => {
  console.info('message', event);
  if (event?.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
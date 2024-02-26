const { location, process, addEventListener } = window ?? self ?? globalThis ?? this;
const PUBLIC_URL = (process?.env?.PUBLIC_URL ?? import.meta.env?.BASE_URL)?.replace('/', '');
// console.log(PUBLIC_URL, import.meta?.env?.BASE_URL, import.meta.env.BASE_URL);
const publicUrl = new URL(PUBLIC_URL, location?.href);
const { serviceWorker } = navigator;
const swUrl = `${PUBLIC_URL}/service-worker.js`;
export const register = (config?: {
  readonly onSuccess?: (registration: ServiceWorkerRegistration) => void;
  readonly onUpdate?: (registration: ServiceWorkerRegistration) => void;
}) => {
  if (publicUrl?.origin !== location?.origin || !serviceWorker || PUBLIC_URL === undefined) {
    return;
  }
  addEventListener('load', () => {
    fetch(swUrl, {
      headers: { 'Service-Worker': 'script' },
    })
      .then((response) => {
        const contentType = response.headers.get('Content-Type');
        if (response.status === 404 || (contentType && contentType !== ('application/javascript'))) {
          return;
        }
        serviceWorker?.register(swUrl)?.then((registration) => {
          registration.onupdatefound = () => {
            const { installing } = registration;
            if (!installing) {
              return;
            }
            installing.onstatechange = () => {
              if (installing?.state === 'installed') {
                if (serviceWorker?.controller) {
                  config?.onUpdate?.(registration);
                } else {
                  config?.onSuccess?.(registration);
                }
              }
            };
          };
        })?.catch((error) => {
          console?.error('Error during service worker registration:', error);
        });
      });
  });
};
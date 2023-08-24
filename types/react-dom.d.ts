import type { ReactElement } from 'react';

declare module 'react-dom' {
  interface ReactDOM {
    createRoot (container: DocumentFragment | Element | null): {
      render (element: ReactElement): void;
      unmount (): void;
    };
  }

  const ReactDOM: ReactDOM;
  export default ReactDOM;
}

import { ReactElement } from 'react';

declare module 'react-dom' {
  interface ReactDOM {
    createRoot(container: Element | DocumentFragment | null): {
      render(element: ReactElement): void;
      unmount(): void;
    };
  }

  const ReactDOM: ReactDOM;
  export default ReactDOM;
}

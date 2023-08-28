import './index.css';
import * as React from 'react';
import App from './App';
import { render } from 'react-dom';
// import { createRoot } from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
const container = document.getElementById('root');
// root = createRoot(container);
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

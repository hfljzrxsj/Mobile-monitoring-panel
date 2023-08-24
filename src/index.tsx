import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById('root')!);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

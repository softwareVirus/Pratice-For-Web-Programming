import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
let value = false;
ReactDOM.render(
  <React.StrictMode>
    <App value={value}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals()
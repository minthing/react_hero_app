import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Potato from './Potato';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Potato />
  </React.StrictMode>,
  document.getElementById('root')
);
//app.js의 컴포넌트를 index.html의 root 안에 밀어넣음
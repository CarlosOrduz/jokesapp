import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Marvel from './Marvel';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Marvel/>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.register();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

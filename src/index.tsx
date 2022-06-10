import './index.css';
import 'dayjs/locale/zh-cn';

import * as dayjs from 'dayjs';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
dayjs.locale('zh-cn');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

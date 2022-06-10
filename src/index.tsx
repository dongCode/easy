import '@/styles/index.less';
import 'dayjs/locale/zh-cn';

import * as dayjs from 'dayjs';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from '@/pages/app';

dayjs.locale('zh-cn');
const container = document.getElementById('root');
if (container === null) throw new Error('Root container missing in index.html');

const root = ReactDOM.createRoot(container);

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

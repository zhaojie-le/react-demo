import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// 导入ClickCounter组件，组件的命名首字母必须大写
// import ClickCounter from './ClickCounter'
import ControlPanel from './example1/ControlPanel'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<ControlPanel />, 
document.getElementById('root')
);
registerServiceWorker();

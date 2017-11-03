import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';
import './index.css';
// import App from './App';
// 导入ClickCounter组件，组件的命名首字母必须大写
// import ClickCounter from './ClickCounter'
// import ControlPanel from './example1/ControlPanel'

import Weather from './example-ajax/Weather.js'
// exapmle-redux-context
// import store from './example-redux-context/Store.js'
// import Provider from './example-redux-context/Provider.js'
// import ControlPanel from './example-react-redux/views/ControlPanel'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
/* <ControlPanel />,  */
/*
<Provider store={store}>
  <ControlPanel />
</Provider>,
*/
<Weather/>,
document.getElementById('root')
);
registerServiceWorker();

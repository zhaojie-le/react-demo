import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import {syncHistoryWithStore} from 'react-router-redux';

import App from './App.js';
import Home from './example-router/pages/Home.js';
import About from './example-router/pages/About.js';
import NotFound from './example-router/pages/NotFound.js';
import store from './example-router/Store.js';
/**
 * 使用router的createElement属性，给createElement传递一个函数
 * @param {*} Component  router对应的组件
 * @param {*} props      传入组件的属性参数
 */
const createElement = (Component, props) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

const history = syncHistoryWithStore(browserHistory, store);
//const history = browserHistory;

const Routes = () => (
  <Router history={history} createElement={createElement}>
    <Route path="/" component={App}>
      {/* 默认路由 */}
      <IndexRoute component={Home} /> 
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;

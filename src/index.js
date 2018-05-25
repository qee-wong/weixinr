import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import Root from './routes'
import store from './store'
import 'todomvc-app-css/index.css'




ReactDOM.render(
     <Root store={store} />,
  document.getElementById('root')
);

// ReactDOM.render(
//      <App />,
//   document.getElementById('root')
// );


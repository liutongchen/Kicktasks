/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/style.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

window.jQuery = window.$ = require('jquery/dist/jquery.min');
require('bootstrap/dist/js/bootstrap.min.js');
const store = configureStore();

render(
  <Provider store={store}>
     <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);

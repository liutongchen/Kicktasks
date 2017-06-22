/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import TaskListPage from './components/TaskList/TaskListPage';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
     <TaskListPage />
  </Provider>,
  document.getElementById('app')
);

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/Home/HomePage';
import TaskListPage from './containers/TaskListPage'; //eslint-disable-line import/no-named-as-default
import TimerPage from './containers/ManageTimerPage'; //eslint-disable-line import/no-named-as-default

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="task" component={TaskListPage}/>
        <Route path="timer" component={TimerPage}/>
    </Route>
);


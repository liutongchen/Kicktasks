import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage/HomePage';
import TaskListPage from './components/TaskList/TaskListPage'; //eslint-disable-line import/no-named-as-default

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="task" component={TaskListPage}/>
    </Route>
);


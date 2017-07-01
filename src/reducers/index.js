import { combineReducers } from 'redux';
import taskList from './taskListReducer';
import timer from './timerReducer';

const rootReducer = combineReducers({
    taskList,
    timer
});

export default rootReducer;

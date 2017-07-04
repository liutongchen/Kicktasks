import { combineReducers } from 'redux';
import taskList from './taskListReducer';

const rootReducer = combineReducers({
    taskList,
});

export default rootReducer;

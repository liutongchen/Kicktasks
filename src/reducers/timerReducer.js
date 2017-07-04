/*
import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function timerReducer(state=initialState.timer, action) {
    switch(action.type) {
        case types.UPDATE_WORK_DURATION: {
            return [...state]; //TODO: find the corresponding task and update the time
        }

        case types.RECORD_TASK: {
            for (let task in state) {
                if (action.task === task) {
                    return [...state];
                }
            }
            return [...state, {task: action.task, totalCostTime:""}];
        }

        default: {
            return state;
        }
    }
}
*/
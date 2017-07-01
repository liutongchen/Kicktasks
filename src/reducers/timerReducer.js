import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function timerReducer(state=initialState.timer, action) {
    switch(action.type) {
        case types.UPDATE_WORK_DURATION: {
            return [...state, {workDuration: action.workDuration, breakDuration:"", totalCostTime: "", task: ""}];
        }

        default: {
            return state;
        }
    }
}
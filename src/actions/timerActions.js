import * as types from './actionTypes';

export const updateWorkDuration = (workDuration) => {
    return {
        type: types.UPDATE_WORK_DURATION,
        workDuration
    };
};

export const recordTask = (task) => {
    return {
        type: types.RECORD_TASK,
        task
    }
};
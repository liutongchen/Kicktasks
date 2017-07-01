import * as types from './actionTypes';

export const updateWorkDuration = (workDuration) => {
    return {
        type: types.UPDATE_WORK_DURATION,
        workDuration
    };
};
import * as types from './actionTypes';

export const addTodo = todo => {
    return {
        type: types.ADD_TODO,
        todo
    };
};

export const updateTodo = todo => {
    return {
        type: types.UPDATE_TODO,
        todo
    };
};



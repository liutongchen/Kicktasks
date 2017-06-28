import * as types from './actionTypes';

let nextTodoId = 0;

export const addTodo = text => {
    return {
        type: types.ADD_TODO,
        id: nextTodoId++,
        text
    };
};

export const updateTodoStatus = (todoId, status) => {
    return {
        type: types.UPDATE_TODO_STATUS,
        todoId,
        status
    };
};




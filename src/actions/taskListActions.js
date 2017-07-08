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

export const updateTodoDuration = (todoId, duration) => {
    return {
        type: types.UPDATE_TODO_DURATION,
        duration,
        todoId
    };
};

export const editTask = (todoId, title, duration, status) => {
    return {
        type: types.EDIT_TASK,
        todoId,
        title,
        duration,
        status
    };
};

export const deleteTask = (todoId) => {
    return {
        type: types.DELETE_TASK,
        todoId
    };
};
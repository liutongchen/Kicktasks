import * as types from './actionTypes';

let nextTodoId = 0;

export const addTodo = text => {
    return {
        type: types.ADD_TODO,
        id: nextTodoId++,
        text
    };
};

export const moveToDoingList = todoId => {
    return {
        type: types.MOVE_TO_DOING_LIST,
        todoId
    };
};

export const moveToDoneList = todoId => {
    return {
        type: types.MOVE_TO_DONE_LIST,
        todoId
    };
};




import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function taskReducer(state=initialState.todoList, action) {
    switch(action.type) {
        case types.ADD_TODO: {
            return [...state, {id: action.id, text: action.text, status: "todo"}];
        }

        case types.UPDATE_TODO_STATUS: {
            const after = state.slice(action.todoId + 1);
            const before = state.slice(0, action.todoId);
            const clickedTodo = Object.assign({}, state[action.todoId]);

            clickedTodo.status = action.status;
            return [...before, clickedTodo, ...after];
        }

        default: {
            return state;
        }
    }
}

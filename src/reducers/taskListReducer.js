import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function taskReducer(state=initialState.todoList, action) {
    switch(action.type) {
        case types.ADD_TODO: {
            return [...state, {id: action.id, text: action.text, doing: false, done: false}];
        }

        case types.MOVE_TO_DOING_LIST: {
            const after = state.slice(action.todoId + 1);
            const before = state.slice(0, action.todoId);
            const clickedTodo = Object.assign({}, state[action.todoId]);

            clickedTodo["doing"] = true;
            clickedTodo["done"] = false;
            return [...before, clickedTodo, ...after];
        }

        case types.MOVE_TO_DONE_LIST: {
            const after = state.slice(action.todoId + 1);
            const before = state.slice(0, action.todoId);
            const clickedTodo = Object.assign({}, state[action.todoId]);

            clickedTodo["doing"] = false;
            clickedTodo["done"] = true;
            return [...before, clickedTodo, ...after];
        }

        default: {
            return state;
        }
    }
}



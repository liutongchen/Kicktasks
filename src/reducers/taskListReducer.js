import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function taskReducer(state=initialState.todoList, action) {
    switch(action.type) {
        case types.ADD_TODO: {
            return [...state, Object.assign({}, action.todo)];
        }

        case types.UPDATE_TODO: {
            const newState = [];
            state.forEach(eachTodo => {
                eachTodo.id === action.id ?
                    newState.push(Object.assign({}, action.todo)) :
                    newState.push(eachTodo);
            });
            return newState;
        }

        default: {
            return state;
        }
    }
}

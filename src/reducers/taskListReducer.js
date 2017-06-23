import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function taskReducer(state=initialState.todoList, action) {
      switch(action.type) {
        case types.ADD_TODO: {
          return [...state, Object.assign({}, action.todo)];
        }

        default: {
          return state;
        }
      }
}

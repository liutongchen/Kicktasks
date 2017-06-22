
import initialState from './initialState';
//import * as types from '../actions/actionTypes';

export default function taskReducer(state=initialState.task, action) {
  switch(action.type) {
    /*
    case types.ADD_TO_DO: {
      const toDoList = state.toDoList;
      const updatedToDoList = [...toDoList, Object.assign({}, action.taskItem)];
      const newState = Object.assign({}, state);
      newState.toDoList = updatedToDoList;
      return newState;
    }
    */
    default: {
      return state;
    }
  }
}

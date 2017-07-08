import initialState from './initialState';
import * as types from '../actions/actionTypes';
import {getDurationNum} from '../constants/helperFunctions';
import toastr from 'toastr';

export default function taskReducer(state=initialState.todoList, action) {
    switch(action.type) {
        case types.ADD_TODO: {
            let hasExisted = false;
            state.forEach((todo) => {
               if (todo.text === action.text) {
                   toastr.error("Oops! You have inserted two exact same tasks.");
                   return hasExisted = true;
               }
            });
            if (hasExisted) { return [...state]; }
            else {
                return [...state, {id: action.id, text: action.text, status: "todo", duration: "0min"}];
            }
        }

        case types.UPDATE_TODO_STATUS: {
            action.todoId = parseInt(action.todoId);
            const after = state.slice(action.todoId + 1);
            const before = state.slice(0, action.todoId);
            const clickedTodo = Object.assign({}, state[action.todoId]);

            clickedTodo.status = action.status;
            return [...before, clickedTodo, ...after];
        }

        case types.UPDATE_TODO_DURATION: {
            action.todoId = parseInt(action.todoId);
            const after = state.slice(action.todoId + 1);
            const before = state.slice(0, action.todoId);
            const completedTodo = Object.assign({}, state[action.todoId]);

            let durationNumBefore = getDurationNum(completedTodo.duration);
            let newDurationNum = getDurationNum(action.duration);
            let durationNumAfter = durationNumBefore + newDurationNum;

            completedTodo.duration = durationNumAfter + "min";
            return [...before, completedTodo, ...after];
        }

        case types.EDIT_TASK: {
            action.todoId = parseInt(action.todoId);
            const after = state.slice(action.todoId + 1);
            const before = state.slice(0, action.todoId);
            const editedTodo = Object.assign({}, state[action.todoId]);

            editedTodo.text = action.title;
            editedTodo.duration = action.duration;
            editedTodo.status = action.status;
            return [...before, editedTodo, ...after];
        }

        case types.DELETE_TASK: {
            action.todoId = parseInt(action.todoId);
            const after = state.slice(action.todoId + 1);
            const before = state.slice(0, action.todoId);
            const deletedTodo = Object.assign({}, state[action.todoId]);

            deletedTodo.text = "";
            deletedTodo.status = "deleted";
            deletedTodo.duration = "0min";

            return [...before, deletedTodo, ...after];
        }

        default: {
            return state;
        }
    }
}

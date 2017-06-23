import React from 'react';
import PropTypes from 'prop-types';
import EnterTask from './EnterTask';
import ToDoList from './ToDoList';
import {connect} from 'react-redux';
import * as taskActions from '../../actions/taskListActions';
import {bindActionCreators} from 'redux';

let nextTodoId = 0;

export class TaskListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: Object.assign({}, this.props.todo)
        };
        this.addTodo = this.addTodo.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.todo.id !== nextProps.todo.id) {
            this.setState({todo: Object.assign({}, nextProps.todo)});
        }
    }

    addTodo(event) {
        event.preventDefault();
        const text = document.getElementById("taskInput").value;
        const todo = this.state.todo;
        todo["text"] = text;
        this.setState({todo: todo});
        this.props.actions.addTodo(this.state.todo);
    }

    render() {
        console.log(this.props.todoList); //test
        return (
          <div className="container">
            <EnterTask onClick={this.addTodo}/>

            <ToDoList todos={this.props.todoList}/>

            <ul className="nav nav-pills nav-justified row">
              <li className="nav-item active">
                <a className="nav-link" href="#toDo">To Do</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Doing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Done</a>
              </li>
            </ul>
          </div>
    );
  }
}

TaskListPage.propTypes = {
    todo: PropTypes.object.isRequired,
    todoList: PropTypes.array,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    let todo = {id: nextTodoId++, text: "", doing: false, done: false};
    return {
        todo: todo,
        todoList: state.taskList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(taskActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskListPage);

import React from 'react';
import PropTypes from 'prop-types';
import EnterTask from './EnterTask';
import ToDoList from './ToDoList';
import DoingList from './DoingList';
import DoneList from './DoneList';
import {connect} from 'react-redux';
import * as taskActions from '../../actions/taskListActions';
import {bindActionCreators} from 'redux';

let nextTodoId = 0;

export class TaskListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: Object.assign({}, this.props.todo),
            filter: "todoList"
        };
        this.addTodo = this.addTodo.bind(this);
        this.tabClickHandler = this.tabClickHandler.bind(this);
        this.taskDoneHandler = this.taskDoneHandler.bind(this);
        this.taskDoingHandler = this.taskDoingHandler.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        if (this.props.todo.id !== nextProps.todo.id) {
            this.setState({todo: Object.assign({}, nextProps.todo)});
        }
    }

    //----------helper functions----------------
    addTodo(event) {
        event.preventDefault();
        const text = document.getElementById("taskInput").value;
        const todo = this.state.todo;
        todo["text"] = text;
        this.setState({todo: todo});
        this.props.actions.addTodo(this.state.todo);

    }

    taskDoingHandler() { //TODO: need to find the one that is clicked
        event.preventDefault();
        const todo = this.state.todo;
        todo["doing"] = true;
        todo["done"] = false;
        this.setState({todo: todo});
        this.props.actions.updateTodo(this.state.todo);
        console.log("this.state.todo: ", this.state.todo); //test
    }

    taskDoneHandler() { //TODO: need to find the one that is clicked
        event.preventDefault();
        const todo = this.state.todo;
        todo["done"] = true;
        todo["doing"] = false;
        this.setState({todo: todo});
        this.props.actions.updateTodo(this.state.todo);
    }

    tabClickHandler(event) {
        //toggle tab
        const clickedTab = event.target;
        const clickedTabParent = clickedTab.parentNode;
        const clickedTabParentSiblings = clickedTabParent.parentNode.childNodes;

        clickedTabParentSiblings.forEach((each) => {
            each.classList.remove("active");
        });
        clickedTabParent.className += " active";

        //toggle content
        const clickedElement = clickedTab.getAttribute("href").slice(1);
        let filter = this.state.filter;

        filter = clickedElement;
        this.setState({filter: filter});
    }
    //-----------------------------------------

    render() {
        return (
            <div className="container col-md-offset-2 col-md-8">
                <EnterTask onClick={this.addTodo} />

                {
                    this.state.filter === "todoList" ?
                        <ToDoList
                            id="todoList"
                            todos={this.props.todoList}
                            taskDoingHandler={this.taskDoingHandler}
                            taskDoneHandler={this.taskDoneHandler}/> :
                        this.state.filter === "doingList" ?
                            <DoingList id="doingList" todos={this.props.todoList}/> :
                            <DoneList id="doneList" />
                }


                <ul className="nav nav-pills nav-justified row" onClick={this.tabClickHandler}>
                    <li className="nav-item active" >
                        <a className="nav-link" href="#todoList">To Do</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#doingList">Doing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#doneList">Done</a>
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

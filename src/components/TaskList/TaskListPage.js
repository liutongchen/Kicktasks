import React from 'react';
import PropTypes from 'prop-types';
import EnterTask from './EnterTask';
import ToDoList from './ToDoList';
import DoingList from './DoingList';
import DoneList from './DoneList';
import {connect} from 'react-redux';
import * as taskActions from '../../actions/taskListActions';
import {bindActionCreators} from 'redux';
import {findClickedTodo} from '../../constants/helperFunctions';

export class TaskListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "todoList",
        };
        this.addTodo = this.addTodo.bind(this);
        this.tabClickHandler = this.tabClickHandler.bind(this);
        this.taskDoneHandler = this.taskDoneHandler.bind(this);
        this.taskDoingHandler = this.taskDoingHandler.bind(this);

    }


    //----------helper functions----------------
    addTodo(event) {
        event.preventDefault();
        const text = document.getElementById("taskInput").value;
        this.props.actions.addTodo(text);
    }

    taskDoingHandler(event) {
        const clickedTodoId = findClickedTodo(event);
        this.props.actions.moveToDoingList(clickedTodoId);
    }

    taskDoneHandler(event) { //TODO: need to find the one that is clicked
        const clickedTodoId = findClickedTodo(event);
        this.props.actions.moveToDoneList(clickedTodoId);
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
                <EnterTask onSubmit={this.addTodo}/>

                {
                    this.state.filter === "todoList"?
                        <ToDoList
                            id="todoList"
                            todos={this.props.todoList}
                            taskDoingHandler={this.taskDoingHandler}
                            taskDoneHandler={this.taskDoneHandler}/> :
                        this.state.filter === "doingList" ?
                            <DoingList id="doingList" todos={this.props.todoList}/> :
                            <DoneList id="doneList" todos={this.props.todoList}/>
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
    todoList: PropTypes.array,
    actions: PropTypes.object.isRequired
};

TaskListPage.contextTypes = {

};

function mapStateToProps(state) {
    console.log("mapStateToProps!"); //test
    return {
        todoList: state.taskList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(taskActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskListPage);

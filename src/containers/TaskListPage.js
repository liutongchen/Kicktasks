import React from 'react';
import PropTypes from 'prop-types';
import EnterTask from '../components/TaskList/EnterTask';
import ToDoList from '../components/TaskList/ToDoList';
import DoingList from '../components/TaskList/DoingList';
import DoneList from '../components/TaskList/DoneList';
import SideBar from '../components/TaskList/SideBar';
import ProgressBar from '../components/TaskList/ProgressBar';
import {connect} from 'react-redux';
import * as taskActions from '../actions/taskListActions';
import {bindActionCreators} from 'redux';
import {findClickedTodo} from '../constants/helperFunctions';

export class TaskListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "todoList",
        };
        this.addTodo = this.addTodo.bind(this);
        this.sideBarClickHandler = this.sideBarClickHandler.bind(this);
        this.updateTodoStatus = this.updateTodoStatus.bind(this);
        this.updateProgressBar = this.updateProgressBar.bind(this);
    }


    //----------helper functions----------------
    addTodo(event) {
        event.preventDefault();
        const text = document.getElementById("taskInput").value;
        this.props.actions.addTodo(text);

        const addTodoForm = document.getElementById("addTodoForm");
        addTodoForm.reset();
    }

    updateTodoStatus(event, status) {
        const clickedTodoId = findClickedTodo(event);
        this.props.actions.updateTodoStatus(clickedTodoId, status);
    }

    sideBarClickHandler(event) {
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

    updateProgressBar() {
        let totalTaskNum = this.props.todoList.length;
        let doingTaskNum = 0;
        let doneTaskNum = 0;

        if (totalTaskNum === 0) {
            return {
                doingTaskPercent: 0 + "%",
                doneTaskPercent: 0 + "%"
            };
        }
        this.props.todoList.forEach((todo) => {
            if (todo.status === "doing") {
                doingTaskNum += 1;
            } else if(todo.status === "done") {
                doneTaskNum += 1;
            }
        });

        return {
            doingTaskPercent: Math.floor((doingTaskNum / totalTaskNum) * 100) + "%",
            doneTaskPercent: Math.floor((doneTaskNum / totalTaskNum) * 100) + "%"
        };
    }

    //-----------------------------------------

    render() {
        return (
            <div id="taskPage" className="container col-md-offset-2 col-md-8">
                <SideBar sideBarClickHandler={this.sideBarClickHandler}/>
                <ProgressBar
                    doneTaskPercent={this.updateProgressBar().doneTaskPercent}
                    doingTaskPercent={this.updateProgressBar().doingTaskPercent}/>
                <EnterTask onSubmit={this.addTodo}/>

                {
                    this.state.filter === "todoList"?
                        <ToDoList
                            id="todoList"
                            todos={this.props.todoList}
                            taskDoingHandler={(event) => this.updateTodoStatus(event, "doing")}
                            taskDoneHandler={(event) => this.updateTodoStatus(event, "done")}/> :
                        this.state.filter === "doingList" ?
                            <DoingList
                                id="doingList"
                                todos={this.props.todoList}
                                taskDoneHandler={(event) => this.updateTodoStatus(event, "done")}
                                moveTaskToPrevStatus={(event) => this.updateTodoStatus(event, "todo")}/> :
                            <DoneList
                                id="doneList"
                                todos={this.props.todoList}
                                moveToPrevStatus={(event) => this.updateTodoStatus(event, "doing")}/>
                }


            </div>
        );
    }
}

TaskListPage.propTypes = {
    todoList: PropTypes.array,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
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

import React from 'react';
import PropTypes from 'prop-types';
import EnterTask from '../components/TaskList/EnterTask';
import ToDoList from '../components/TaskList/ToDoList';
import DoingList from '../components/TaskList/DoingList';
import DoneList from '../components/TaskList/DoneList';
import SideBar from '../components/TaskList/SideBar';
import ProgressBar from '../components/TaskList/ProgressBar';
import EditTaskWindow from '../components/TaskList/EditTaskWindow';
import {connect} from 'react-redux';
import * as taskActions from '../actions/taskListActions';
import {bindActionCreators} from 'redux';
import {findClickedTodo, isTimerValid, isTitleValid, moveTab} from '../constants/helperFunctions';
import toastr from 'toastr';

export class TaskListPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            filter: "todoList",
            toEdit: false
        };
        this.addTodo = this.addTodo.bind(this);
        this.sideBarClickHandler = this.sideBarClickHandler.bind(this);
        this.updateTodoStatus = this.updateTodoStatus.bind(this);
        this.updateProgressBar = this.updateProgressBar.bind(this);
        this.openEditWindow = this.openEditWindow.bind(this);
        this.closeEditWindow = this.closeEditWindow.bind(this);
        this.saveEditedTask = this.saveEditedTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.moveToTimerPage = this.moveToTimerPage.bind(this);

        this.editedTaskId = null;
    }


    //----------helper functions----------------
    addTodo(event) {
        event.preventDefault();
        const text = document.getElementById("taskInput").value;
        if (text === "") {toastr.error("Please tell me what you want to do first"); return;}
        this.props.actions.addTodo(text);

        const addTodoForm = document.getElementById("addTodoForm");
        addTodoForm.reset();
    }

    updateTodoStatus(event, status) {
        const clickedTodoId = findClickedTodo(event);
        this.props.actions.updateTodoStatus(clickedTodoId, status);
    }

    moveToTimerPage() {
        moveTab("timerTab");
        this.context.router.push("/timer");
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
        let totalTaskNum = 0;
        let doingTaskNum = 0;
        let doneTaskNum = 0;
        let todoTaskNum = 0;
        let doingTaskPercentNum;
        let doneTaskPercentNum;
        let initialProgress = {
            todoTaskPercent: 0 + "%",
            doingTaskPercent: 0 + "%",
            doneTaskPercent: 0 + "%",
        };

        this.props.todoList.forEach((todo) => {
            if (todo.status === "todo" || todo.status === "doing" || todo.status === "done") {
                totalTaskNum += 1;
            }
            if (todo.status === "doing") {
                doingTaskNum += 1;
            } else if(todo.status === "done") {
                doneTaskNum += 1;
            } else if (todo.status === "todo") {
                todoTaskNum += 1;
            }
        });
        if (totalTaskNum === 0) {
            return initialProgress;
        } else {
            doingTaskPercentNum = Math.round((doingTaskNum / totalTaskNum) * 100);
            doneTaskPercentNum = Math.round((doneTaskNum / totalTaskNum) * 100);
            return {
                todoTaskPercent: (100 - doingTaskPercentNum - doneTaskPercentNum) + "%",
                doingTaskPercent: doingTaskPercentNum + "%",
                doneTaskPercent: doneTaskPercentNum + "%"
            };
        }
    }

    openEditWindow(event) {
        this.setState({toEdit: true});
        this.editedTaskId = event.target.parentNode.getAttribute("id");
    }

    closeEditWindow() {
        this.setState({toEdit: false});
        $("#taskEditModal" ).modal("hide");
    }

    saveEditedTask() {
        const editedTitle = document.getElementById("editTitle").value;
        const editedDuration = document.getElementById("editDuration").value;
        const editedStatus = document.getElementById("editStatus").value;
        const editedTaskId = this.editedTaskId;

        if (!isTimerValid(+editedDuration) || (!isTitleValid(this.props.todoList, editedTaskId, editedTitle)) ){
            toastr.error("Duration has to be number greater than and there can't be duplicate title.");
            return;
        } else {
            this.props.actions.editTask(editedTaskId, editedTitle, editedDuration + "min", editedStatus);
            this.closeEditWindow();
        }
    }

    deleteTask() {
        this.props.actions.deleteTask(this.editedTaskId);
        this.closeEditWindow();
    }

    //-----------------------------------------

    render() {
        return (
            <div>
                <div id="sideBar" className="container">
                    <SideBar sideBarClickHandler={this.sideBarClickHandler}/>
                </div>
                <div id="taskPage" className="container col-md-offset-3 col-md-9">

                    <EnterTask onSubmit={this.addTodo}/>
                    <ProgressBar
                        todoTaskPercent={this.updateProgressBar().todoTaskPercent}
                        doneTaskPercent={this.updateProgressBar().doneTaskPercent}
                        doingTaskPercent={this.updateProgressBar().doingTaskPercent}/>

                    {
                        this.state.filter === "todoList"?
                            <ToDoList
                                id="todoList"
                                todos={this.props.todoList}
                                startBtnHandler={this.moveToTimerPage}
                                taskDoneHandler={(event) => this.updateTodoStatus(event, "done")}
                                handleEditClick={(event) => this.openEditWindow(event)}/> :
                            this.state.filter === "doingList" ?
                                <DoingList
                                    id="doingList"
                                    todos={this.props.todoList}
                                    taskDoneHandler={(event) => this.updateTodoStatus(event, "done")}
                                    moveTaskToPrevStatus={(event) => this.updateTodoStatus(event, "todo")}
                                    handleEditClick={(event) => this.openEditWindow(event)}/> :
                                <DoneList
                                    id="doneList"
                                    todos={this.props.todoList}
                                    moveToPrevStatus={(event) => this.updateTodoStatus(event, "doing")}
                                    handleEditClick={(event) => this.openEditWindow(event)}/>
                    }
                    {this.state.toEdit ? <EditTaskWindow
                        deleteTask={this.deleteTask}
                        closeWindow={this.closeEditWindow}
                        taskEditSaveBtn={this.saveEditedTask}/> : null}

                </div>
            </div>
        );
    }
}

TaskListPage.propTypes = {
    todoList: PropTypes.array,
    actions: PropTypes.object.isRequired
};

TaskListPage.contextTypes = {
    router: PropTypes.object
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

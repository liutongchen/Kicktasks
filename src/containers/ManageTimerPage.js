import React from 'react';
import PropTypes from 'prop-types';
import TimerPage from '../components/Timer/TimerPage';
import RecordTaskPopUp from '../components/Timer/RecordTaskPopUp';
import {bindActionCreators} from 'redux';
import * as taskActions from '../actions/taskListActions';
import {connect} from 'react-redux';
import initialState from '../reducers/initialState';
import {isTimerValid} from '../constants/helperFunctions';
import toastr from 'toastr';

function getInitialTimer() {
    return initialState.initialWorkDuration + " : " + "00";
}

export class ManageTimerPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            timer: getInitialTimer(),
            isRunning: false,
            isTimerComplete: false
        };
        this.startTimer = this.startTimer.bind(this);
        this.stopWorkTimer = this.stopWorkTimer.bind(this);
        this.endTimer = this.endTimer.bind(this);
        this.closePopUp = this.closePopUp.bind(this);
        this.handleSaveTaskBtn = this.handleSaveTaskBtn.bind(this);

        this.currentDurationInMin = null;
        this.countdown = null;
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.todoList.length < nextProps.todoList.length) {
            nextProps.actions.updateTodoStatus(nextProps.todoList.length-1, "doing"); //assume the newly added task is the last one in todolist
            nextProps.actions.updateTodoDuration(nextProps.todoList.length-1, this.currentDurationInMin + "min");
            this.startTimer("breakDurationInp", "break");
        }
    }
    //-------helper functions------------

    endTimer() {
        //update store
        clearInterval(this.countdown);
        this.setState({
            timer: getInitialTimer(),
            isRunning: false,
            isTimerComplete: true
        });
    }

    closePopUp() {
        this.setState({
            isTimerComplete: false
        });
        $("#taskInpModal").modal("hide");
    }

    handleSaveTaskBtn() {
        let selectedVal = document.getElementById("taskOptions").value;
        let status = "doing";
        let duration = this.currentDurationInMin + "min";
        let todoId;

        if (!selectedVal || selectedVal === "") {
            //if newly added, update the status and duration in componentDidReceiveProps
            let newlyAddedVal = prompt("Please enter the task you just did: ");
            if (newlyAddedVal) {this.props.actions.addTodo(newlyAddedVal);}
            this.closePopUp();
            return;
        } else {
            //if already exist, directly update the status and duration
            this.props.todoList.forEach(todo => {
                if (todo.text === selectedVal) {
                    todoId = todo.id;
                    return;
                }
            });
            this.props.actions.updateTodoDuration(todoId, duration);
            this.props.actions.updateTodoStatus(todoId, status);
            this.startTimer("breakDurationInp", "break");
        }
        this.closePopUp();
    }
    
    startTimer(timerId, action) {
        if (this.state.isRunning === true) { return ;}
            const timerDurationInp = document.getElementById(timerId);
            let timerDuration = timerDurationInp.value === "" ? timerDurationInp.getAttribute("placeholder") : timerDurationInp.value;
            let timerDurationInSec = (+timerDuration) * 60;

        if (!isTimerValid(timerDurationInSec)) { toastr.error("Please check your input!"); return; }
        this.countdown = setInterval(() => {
            if (timerDurationInSec === 0) {
                if (action === "work") {
                    this.endTimer();
                    this.currentDurationInMin = timerDuration;
                } else if (action === "break") {
                    clearInterval(this.countdown);
                    this.setState({
                        isRunning: false,
                        timer: getInitialTimer()
                    });
                    this.redirect();
                }
             } else {
                let min = Math.floor(timerDurationInSec / 60);
                let sec = timerDurationInSec % 60;

                min = min < 10 ? "0" + min : min;
                sec = sec < 10 ? "0" + sec : sec;

                this.setState({
                    timer: min + " : " + sec,
                    isRunning: true
                });

                timerDurationInSec -= 1;
            }
        }, 1);
    }

    stopWorkTimer() {
        clearInterval(this.countdown);
        this.setState({
            timer: getInitialTimer(),
            isRunning: false
        });
    }

    redirect() {
        this.context.router.push("/task");
    }
    //-----------------------------------

    render() {
        return (
            <div>
                <TimerPage timer={this.state.timer} startWorkTimer={() => this.startTimer("workDurationInp", "work")} stopWorkTimer={this.stopWorkTimer}/>
                {this.state.isTimerComplete ?
                    <RecordTaskPopUp
                        todoList={this.props.todoList}
                        closePopUp={this.closePopUp}
                        handleSaveTaskBtn={this.handleSaveTaskBtn}/> : null}
            </div>
        );
    }
}

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

ManageTimerPage.propTypes = {
    todoList: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageTimerPage.contextTypes = {
    router: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageTimerPage);
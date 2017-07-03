import React from 'react';
import PropTypes from 'prop-types';
import TimerPage from '../components/Timer/TimerPage';
import RecordTaskPopUp from '../components/Timer/RecordTaskPopUp';
import {bindActionCreators} from 'redux';
import * as timerActions from '../actions/timerActions';
import {connect} from 'react-redux';
import initialState from '../reducers/initialState';
import {isTimerValid} from '../constants/helperFunctions';

function getInitialTimer() {
    return initialState.initialWorkDuration + " : " + "00";
}

export class ManageTimerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: getInitialTimer(),
            isRunning: false,
            isTimerComplete: false
        };
        this.startWorkTimer = this.startWorkTimer.bind(this);
        this.stopWorkTimer = this.stopWorkTimer.bind(this);
        this.endTimer = this.endTimer.bind(this);
        this.closePopUp = this.closePopUp.bind(this);
        this.countdown = null;
    }

    //-------helper functions------------

    endTimer(duration) {
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
    }

    startWorkTimer() {
        if (this.state.isRunning === true) { return ;}
        const workDurationInp = document.getElementById("workDurationInp");
        let workDuration = workDurationInp.value === "" ? workDurationInp.getAttribute("placeholder") : workDurationInp.value;
        let workDurationInSec = (+workDuration) * 60;

        if (!isTimerValid(workDurationInSec)) { return; }
        this.countdown = setInterval(() => {
            if (workDurationInSec === 0) {
                this.endTimer(workDurationInSec);
            } else {
                let min = Math.floor(workDurationInSec / 60);
                let sec = workDurationInSec % 60;

                min = min < 10 ? "0" + min : min;
                sec = sec < 10 ? "0" + sec : sec;

                this.setState({
                    timer: min + " : " + sec,
                    isRunning: true
                });

                workDurationInSec -= 1;
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
    //-----------------------------------

    render() {
        return (
            <div>
                <TimerPage timer={this.state.timer} startWorkTimer={this.startWorkTimer} stopWorkTimer={this.stopWorkTimer}/>
                {this.state.isTimerComplete ?
                    <RecordTaskPopUp
                        todoList={this.props.todoList}
                        closePopUp={this.closePopUp}/> : null}
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
        actions: bindActionCreators(timerActions, dispatch)
    };
}

ManageTimerPage.propTypes = {
    todoList: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageTimerPage);
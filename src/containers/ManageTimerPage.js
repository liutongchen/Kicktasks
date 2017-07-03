import React from 'react';
import TimerPage from '../components/Timer/TimerPage';
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
            isRunning: false
        };
        this.startWorkTimer = this.startWorkTimer.bind(this);
        this.stopWorkTimer = this.stopWorkTimer.bind(this);
        this.endTimer = this.endTimer.bind(this);
        this.countdown = null;
    }

    //-------helper functions------------

    endTimer(duration) {
        //update store
        clearInterval(this.countdown);
        this.setState({
            timer: getInitialTimer(),
            isRunning: false
        });
        console.log(duration);
    }

    this.recordTask() {

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
                this.recordTask();
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
        console.log(this.state.timer);//test
        return (
            <div>
                <TimerPage timer={this.state.timer} startWorkTimer={this.startWorkTimer} stopWorkTimer={this.stopWorkTimer}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todolist: state.taskList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(timerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTimerPage);
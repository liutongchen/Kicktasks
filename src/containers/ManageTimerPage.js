import React from 'react';
import TimerPage from '../components/Timer/TimerPage';
import {bindActionCreators} from 'redux';
import * as timerActions from '../actions/timerActions';
import {connect} from 'react-redux';
import initialState from '../reducers/initialState';

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
    }

    //-------helper functions------------

    startWorkTimer() {
        if (this.state.isRunning === true) { return ;}
        debugger;
        const workDurationInp = document.getElementById("workDurationInp");
        let workDuration = workDurationInp.value === "" ? workDurationInp.getAttribute("placeholder") : workDurationInp.value;
        let workDurationInSec = parseInt(workDuration) * 60;

        const countdown = setInterval(() => {
            if (workDurationInSec === 0) {
                //update store
                clearInterval(countdown);
                this.setState({
                    timer: getInitialTimer(),
                    isRunning: false
                });
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
        }, 100);
    }

    stopWorkTimer() {
        console.log("stopped");
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
        timer: state.timer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(timerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTimerPage);
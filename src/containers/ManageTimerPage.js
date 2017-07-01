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
            timer: getInitialTimer()
        };
        this.startWorkTimer = this.startWorkTimer.bind(this);
    }

    //-------helper functions------------

    startWorkTimer() {
        //debugger;
        const workDurationInp = document.getElementById("workDurationInp");
        let workDuration = workDurationInp.value === "" ? workDurationInp.getAttribute("placeholder") : workDurationInp.value;
        let workDurationInSec = parseInt(workDuration) * 60;

        setInterval(() => {
            if (workDurationInSec === 0) {
                //update store
                clearInterval();
                this.setState({ timer: getInitialTimer() });
                alert("what were you doing?");
            } else {
                let min = Math.floor(workDurationInSec / 60);
                let sec = workDurationInSec % 60;

                min = min < 10 ? "0" + min : min;
                sec = sec < 10 ? "0" + sec : sec;

                this.setState({ timer: min + " : " + sec });

                workDurationInSec -= 1;
            }
        }, 1);
    }

    stopWorkTimer() {
        console.log("stopped");
    }
    //-----------------------------------

    render() {
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
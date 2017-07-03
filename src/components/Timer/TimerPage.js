import React from 'react';
import PropTypes from 'prop-types';
import initialState from '../../reducers/initialState';
import {changeTimer} from '../../constants/helperFunctions';

const TimerPage = ({startWorkTimer, stopWorkTimer, timer}) => {
  return(
      <div>
          <div id="adjustMenu">
              <div id="workTimeAdjust">
                  <h3>Work Time</h3>
                  <button className="glyphicon glyphicon-minus" onClick={() => changeTimer("workDurationInp", "-")}/>
                  <input id="workDurationInp" type="text" placeholder={initialState.initialWorkDuration} style={{textAlign: "center"}}/>
                  <button className="glyphicon glyphicon-plus" onClick={() => changeTimer("workDurationInp", "+")}/>
              </div>

              <div id="breakTimeAdjust">
                  <h3>Break Time</h3>
                  <button className="glyphicon glyphicon-minus" onClick={() => changeTimer("breakDurationInp", "-")}/>
                  <input id="breakDurationInp" type="text" placeholder={initialState.initialBreakDuration} style={{textAlign: "center"}}/>
                  <button className="glyphicon glyphicon-plus" onClick={() => changeTimer("breakDurationInp", "+")}/>
              </div>
          </div>

          <div id="timerDisplay">
              <h1 id="timer">{timer}</h1>
          </div>

          <div id="timerControlMenu">
              <div onClick={startWorkTimer} className="btn glyphicon glyphicon-play"/>
              <div onClick={stopWorkTimer} className="btn glyphicon glyphicon-stop"/>
          </div>
      </div>
  );
};

TimerPage.propTypes = {
    startWorkTimer: PropTypes.func.isRequired,
    stopWorkTimer: PropTypes.func.isRequired,
    timer: PropTypes.string.isRequired
};

export default TimerPage;
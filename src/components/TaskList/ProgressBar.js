import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({doneTaskPercent, doingTaskPercent, todoTaskPercent}) => {
    return (
            <div className="progress">
                <div className="progress-bar progress-bar-success" role="progressbar" style={{width:doneTaskPercent}}>
                    {doneTaskPercent + " done"}
                </div>
                <div className="progress-bar progress-bar-warning" role="progressbar" style={{width: doingTaskPercent}}>
                    {doingTaskPercent + " doing"}
                </div>
                <div className="progress-bar progress-bar-info" role="progressbar" style={{width:todoTaskPercent}}>
                    {todoTaskPercent + " todo"}
                </div>
            </div>

    );
};

ProgressBar.propTypes = {
    doneTaskPercent: PropTypes.string,
    doingTaskPercent: PropTypes.string,
    todoTaskPercent: PropTypes.string
};

export default ProgressBar;
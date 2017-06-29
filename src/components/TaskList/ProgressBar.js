import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({doneTaskPercent, doingTaskPercent}) => {
    function percentToWidth(percentString) {
        return parseInt(percentString.slice(0, -1));
    }
    return (
            <div className="progress">
                <div className="progress-bar progress-bar-success" role="progressbar" style={{width:percentToWidth(doneTaskPercent)}}>
                    {doneTaskPercent}
                </div>
                <div className="progress-bar progress-bar-warning" role="progressbar" style={{width: percentToWidth(doingTaskPercent)}}>
                    {doingTaskPercent}
                </div>
            </div>

    );
};

ProgressBar.propTypes = {
    doneTaskPercent: PropTypes.string,
    doingTaskPercent: PropTypes.string
};

export default ProgressBar;
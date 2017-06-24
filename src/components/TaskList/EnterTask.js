import React from 'react';
import PropTypes from 'prop-types';

const EnterTask = ({onClick}) => {
    return (
        <form>
            <input
                className="col-md-8"
                id="taskInput"
                type="text"
                placeholder="watch Wonder Woman"/>
            <div className="divider"></div>
            <label
                htmlFor="taskInput"
                className="btn btn-primary"
                onClick={onClick}>Add</label>
        </form>
    );
};

EnterTask.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default EnterTask;

import React from 'react';
import PropTypes from 'prop-types';

const EnterTask = ({onSubmit}) => {
    return (
        <form className="list-group" id="addTodoForm" onSubmit={onSubmit}>
            <input
                className="list-group-item col-md-11"
                id="taskInput"
                type="text"
                placeholder="Add a to-do..."/>
            <div className="divider" />
            <input type="submit" id="addTaskBtn" htmlFor="taskInput" className="btn btn-primary" value="Add"/>
        </form>
    );
};

EnterTask.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default EnterTask;

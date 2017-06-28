import React from 'react';
import PropTypes from 'prop-types';

const EnterTask = ({onSubmit}) => {
    return (
        <form id="addTodoForm" onSubmit={onSubmit}>
            <input
                className="col-md-8"
                id="taskInput"
                type="text"
                placeholder="Add a to-do..."/>
            <div className="divider" />
            <label htmlFor="taskInput" className="btn btn-primary">Add</label>
        </form>
    );
};

EnterTask.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default EnterTask;

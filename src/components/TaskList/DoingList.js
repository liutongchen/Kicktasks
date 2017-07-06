import React from 'react';
import PropTypes from 'prop-types';

const DoingList = ({todos, taskDoneHandler, moveTaskToPrevStatus, handleEditClick}) => {
    const listItem = todos.map(todo => {
        if (todo.status === "doing") {
            return (
                <li key={todo.id} id={todo.id} className="list-group-item">
                    {todo.text}
                    <span className="durationInTaskPage">{"Time Spent: " + todo.duration}</span>
                    <a href="#" className="glyphicon glyphicon-check" onClick={taskDoneHandler}/>
                    <a href="#" className="glyphicon glyphicon-pause" onClick={moveTaskToPrevStatus}/>
                    <a href="#" className="glyphicon glyphicon glyphicon-pencil" onClick={handleEditClick}/>
                </li>
            );
        }
    });
    return (
        <ul className="list-group">
            {listItem}
        </ul>
    );
};

DoingList.propTypes = {
    todos: PropTypes.array.isRequired,
    taskDoneHandler: PropTypes.func.isRequired,
    moveTaskToPrevStatus: PropTypes.func.isRequired,
    handleEditClick: PropTypes.func.isRequired
};

export default DoingList;

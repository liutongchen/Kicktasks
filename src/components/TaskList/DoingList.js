import React from 'react';
import PropTypes from 'prop-types';

const DoingList = ({todos, taskDoneHandler, moveTaskToPrevStatus}) => {
    const listItem = todos.map(todo => {
        if (todo.status === "doing") {
            return (
                <li key={todo.id} id={todo.id} className="list-group-item">
                    {todo.text}
                    <span className="durationInTaskPage">{"Time Spent: " + todo.duration}</span>
                    <a href="#" className="glyphicon glyphicon-check" onClick={taskDoneHandler}/>
                    <a href="#" className="glyphicon glyphicon-pause" onClick={moveTaskToPrevStatus}/>
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
    todos: PropTypes.array,
    taskDoneHandler: PropTypes.func,
    moveTaskToPrevStatus: PropTypes.func
};

export default DoingList;

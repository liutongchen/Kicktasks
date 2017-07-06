import React from 'react';
import PropTypes from 'prop-types';

const DoneList = ({todos, moveToPrevStatus, handleEditClick}) => {
    const listItem = todos.map(todo => {
        if (todo.status === "done") {
            return (
                <li key={todo.id} id={todo.id} className="list-group-item">
                    {todo.text}
                    <span className="durationInTaskPage">{"Time Spent: " + todo.duration}</span>
                    <a href="#" className="glyphicon glyphicon-arrow-left" onClick={moveToPrevStatus}/>
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

DoneList.propTypes = {
    todos: PropTypes.array.isRequired,
    moveToPrevStatus: PropTypes.func.isRequired,
    handleEditClick: PropTypes.func.isRequired
};

export default DoneList;

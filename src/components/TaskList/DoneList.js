import React from 'react';
import PropTypes from 'prop-types';

const DoneList = ({todos, moveToPrevStatus}) => {
    const listItem = todos.map(todo => {
        if (todo.status === "done") {
            return (
                <li key={todo.id} id={todo.id} className="list-group-item">
                    {todo.text}
                    <a href="#" className="glyphicon glyphicon-arrow-left" onClick={moveToPrevStatus}/>
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
    todos: PropTypes.array,
    moveToPrevStatus: PropTypes.func.isRequired
};

export default DoneList;

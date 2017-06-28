import React from 'react';
import PropTypes from 'prop-types';

const DoneList = ({todos}) => {
    const listItem = todos.map(todo => {
        if (todo.done === true && todo.doing === false) {
            return (
                <li key={todo.id} className="list-group-item">
                    {todo.text}
                    <a href="#" className="glyphicon glyphicon-arrow-left" />
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
    todos: PropTypes.array
};

export default DoneList;

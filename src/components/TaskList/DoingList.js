import React from 'react';
import PropTypes from 'prop-types';

const DoingList = ({todos}) => {
    const listItem = todos.map(todo => {
        if (todo.doing === true && todo.done === false) {
            return (
                <li key={todo.id} className="list-group-item">
                    {todo.text}
                    <a href="#" className="glyphicon glyphicon-check"/>
                    <a href="#" className="glyphicon glyphicon-pause"/>
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
    todos: PropTypes.array
};

export default DoingList;

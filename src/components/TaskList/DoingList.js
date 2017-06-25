import React from 'react';
import PropTypes from 'prop-types';

const doingList = ({todos}) => {
    const listItem = todos.map(todo => {
        <li key={todo.id} className="list-group-item">
            {(todo.doing === true && todo.done === false) ? todo.text : {}}
            <a href="#" className="glyphicon glyphicon-check"/>
            <a href="#" className="glyphicon glyphicon-pause"/>
        </li>;
    });
    return (
        <ul className="list-group">
            {listItem}
        </ul>
    );
};

doingList.propTypes = {
    todos: PropTypes.array
};

export default doingList;

/*
<ul className="list-group">
    <li className="list-group-item">
        Doing One
        <a href="#" className="glyphicon glyphicon-check"></a>
        <a href="#" className="glyphicon glyphicon-pause"></a>
    </li>
    <li className="list-group-item">
        Doing Two
        <a href="#" className="glyphicon glyphicon-check"></a>
        <a href="#" className="glyphicon glyphicon-pause"></a>
    </li>
</ul>

 */
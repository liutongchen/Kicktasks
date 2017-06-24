import React from 'react';
import PropTypes from 'prop-types';

const ToDoList = ({todos, style}) => {
    const listItems = todos.map(todo =>
        <li key={todo.id} className="list-group-item">
            {todo.text}
            <a href="#" className="glyphicon glyphicon-check"></a>
            <a href="#" className="glyphicon glyphicon-wrench"></a>
        </li>);

    return (
      <ul className="list-group" style={style}>
          {listItems}
      </ul>
    );
};

ToDoList.propTypes = {
    todos: PropTypes.array
};

export default ToDoList;

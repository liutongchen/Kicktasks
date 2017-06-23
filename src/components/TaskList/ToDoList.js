import React from 'react';
import PropTypes from 'prop-types';

const ToDoList = ({todos}) => {
    const listItems = todos.map(todo => <li key={todo.id} className="list-group-item">{todo.text}</li>);

    return (
      <ul className="list-group">
          {listItems}
      </ul>
    );
};

ToDoList.propTypes = {
    todos: PropTypes.array
};

export default ToDoList;

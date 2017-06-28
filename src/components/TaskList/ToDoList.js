import React from 'react';
import PropTypes from 'prop-types';

const ToDoList = ({todos, taskDoneHandler, taskDoingHandler}) => {

    const listItems = todos.map(todo => {
        if (todo.status === "todo") {
            return (
                <li key={todo.id} id={todo.id} className="list-group-item">
                    {todo.text}
                    <a href="#" className="glyphicon glyphicon-check" onClick={taskDoneHandler}/>
                    <a href="#" className="glyphicon glyphicon-play" onClick={taskDoingHandler}/>
                </li>
            );
        }
    });

    return (
      <ul className="list-group">
          {listItems}
      </ul>
    );
};

ToDoList.propTypes = {
    todos: PropTypes.array,
    taskDoneHandler: PropTypes.func.isRequired,
    taskDoingHandler: PropTypes.func.isRequired
};

export default ToDoList;

import React from 'react';
import EnterTask from './EnterTask';
import ToDoList from './ToDoList';


export default class TaskListPage extends React.Component {
  render() {
    return (
      <div className="container">
        <EnterTask onChange={()=>{alert("changed")}} onClick={() => alert("clicked")}/>



        <ToDoList id="toDo"/>

        <ul className="nav nav-pills nav-justified row">
          <li className="nav-item active">
            <a className="nav-link" href="#toDo">To Do</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Doing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Done</a>
          </li>
        </ul>
      </div>
    );
  }
}

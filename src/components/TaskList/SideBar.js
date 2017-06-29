import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({sideBarClickHandler}) => {
    return (
        <div className="col-sm-2" id="taskPageSideBar">
            <nav className="nav-sidebar">
                <ul className="nav" onClick={sideBarClickHandler}>
                    <li className="active"><a href="#todoList">To Do</a></li>
                    <li><a href="#doingList">Doing</a></li>
                    <li><a href="#doneList">Done</a></li>
                    <li className="nav-divider"/>
                    <li><a href="#"><span className="glyphicon glyphicon-off"/> Sign in</a></li>
                </ul>
            </nav>
        </div>
    );
};

SideBar.propTypes = {
    sideBarClickHandler: PropTypes.func.isRequired
};

export default SideBar;
import React from 'react';

const doingList = ({style}) => {
    return (
        <ul className="list-group" style={style}>
            <li className="list-group-item">
                Doing One
                <a href="#" className="glyphicon glyphicon-check"></a>
                <a href="#" className="glyphicon glyphicon-wrench"></a>
            </li>
            <li className="list-group-item">
                Doing Two
                <a href="#" className="glyphicon glyphicon-check"></a>
                <a href="#" className="glyphicon glyphicon-wrench"></a>
            </li>
        </ul>
    );
};

export default doingList;

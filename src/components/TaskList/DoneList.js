import React from 'react';

const doneList = ({style}) => {
    return (
        <ul className="list-group" style={style}>
            <li className="list-group-item">
                Done One
                <a href="#" className="glyphicon glyphicon-check"></a>
                <a href="#" className="glyphicon glyphicon-wrench"></a>
            </li>
            <li className="list-group-item">
                Done Two
                <a href="#" className="glyphicon glyphicon-check"></a>
                <a href="#" className="glyphicon glyphicon-wrench"></a>
            </li>
        </ul>
    );
};

export default doneList;

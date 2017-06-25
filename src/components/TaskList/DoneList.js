import React from 'react';

const doneList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                Done One
                <a href="#" className="glyphicon glyphicon-arrow-left"></a>
            </li>
            <li className="list-group-item">
                Done Two
                <a href="#" className="glyphicon glyphicon-arrow-left"></a>
            </li>
        </ul>
    );
};

export default doneList;

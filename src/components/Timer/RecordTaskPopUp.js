import React from 'react';
import PropTypes from 'prop-types';

const RecordTaskPopUp = ({todoList, closePopUp}) => {
    const options = [];
    todoList.forEach(eachTodo => {
        options.push(<option value={eachTodo}>{eachTodo}</option>);
    });
    console.log("!");//TEST
  return (
      <div className="modal fade">
          <div className="modal-dialog" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title">What have you done: </h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true" onClick={closePopUp}>&times;</span>
                      </button>
                  </div>
                  <div className="modal-body">
                      <select>{options}</select>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-primary">Save changes</button>
                      <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closePopUp}>Close</button>
                  </div>
              </div>
          </div>
      </div>
  );
};

RecordTaskPopUp.propTypes = {
    todoList: PropTypes.array.isRequired,
    closePopUp: PropTypes.func.isRequired
};

export default RecordTaskPopUp;
import React from 'react';
import PropTypes from 'prop-types';

class RecordTaskPopUp extends React.Component {

    componentDidMount() {
        $("#taskInpModal" ).modal("show");
        console.log($("#taskInpModal"));//test
    }

    render() {
        debugger;
        const todoList = this.props.todoList;
        const closePopUp = this.props.closePopUp;
        const options = [];
        todoList.forEach(eachTodo => {
            options.push(eachTodo.text);
        });
        const optionsList = options.map(todo => {
            return <option value={todo}>{todo}</option>;
        });
        return (
          <div className="modal fade" id="taskInpModal" tabIndex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title">What have you done: </h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true" onClick={closePopUp}>&times;</span>
                          </button>
                      </div>
                      <div className="modal-body">
                          <select>{optionsList}</select>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-primary">Save changes</button>
                          <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closePopUp}>Close</button>
                      </div>
                  </div>
              </div>
          </div>
    );}
}

RecordTaskPopUp.propTypes = {
    todoList: PropTypes.array.isRequired,
    closePopUp: PropTypes.func.isRequired
};

export default RecordTaskPopUp;
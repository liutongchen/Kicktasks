import React from 'react';
import PropTypes from 'prop-types';
import {chooseOther} from '../../constants/helperFunctions';

class RecordTaskPopUp extends React.Component {

    componentDidMount() {
        $("#taskInpModal" ).modal("show");
        chooseOther("taskOptions");
    }

    render() {
        const todoList = this.props.todoList;
        const closePopUp = this.props.closePopUp;
        const options = [];
        todoList.forEach(eachTodo => {
            options.push(eachTodo.text);
        });
        const optionsList = options.map(todo => {
            return <option key={todo} value={todo}>{todo}</option>;
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
                          <select id="taskOptions">{optionsList}</select>

                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-primary" onClick={this.props.handleSaveTaskBtn}>Save</button>
                          <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closePopUp}>Close</button>
                      </div>
                  </div>
              </div>
          </div>
    );}
}

RecordTaskPopUp.propTypes = {
    todoList: PropTypes.array.isRequired,
    closePopUp: PropTypes.func.isRequired,
    handleSaveTaskBtn: PropTypes.func.isRequired
};

export default RecordTaskPopUp;
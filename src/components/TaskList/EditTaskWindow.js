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
        let closePopUp = function() {};

        return (
            <div className="modal fade" id="taskInpModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit task</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" onClick={closePopUp}>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="editForm">
                                <label htmlFor="editTitle">Title: </label>
                                <input type="text" id="editTitle"/>

                                <label htmlFor="editDuration">Time Spent: </label>
                                <input type="text" id="editDuration"/>

                                <label htmlFor="editStatus">Status: </label>
                                <input type="text" id="editStatus"/>
                            </form>
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
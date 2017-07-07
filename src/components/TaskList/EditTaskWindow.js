import React from 'react';
import PropTypes from 'prop-types';


class EditTaskWindow extends React.Component {

    componentDidMount() {
        $("#taskEditModal" ).modal("show");
    }

    render() {
        return (
            <div className="modal fade"  data-backdrop="false" id="taskEditModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" onClick={this.props.closeWindow}>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="editForm">
                                <label htmlFor="editTitle">Title: <input type="text" id="editTitle"/></label>
                                <br />

                                <label htmlFor="editDuration">Time Spent: <input type="text" id="editDuration"/></label>
                                <br />

                                <label htmlFor="editStatus">Status: <span/>
                                    <select id="editStatus">
                                        <option>todo</option>
                                        <option>doing</option>
                                        <option>done</option>
                                    </select>
                                </label>
                                <br/>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={this.props.deleteTask}>Delete</button>
                            <button type="button" className="btn btn-primary" onClick={this.props.taskEditSaveBtn}>Save</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.closeWindow}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );}
}


EditTaskWindow.propTypes = {
    deleteTask: PropTypes.func.isRequired,
    closeWindow: PropTypes.func.isRequired,
    taskEditSaveBtn: PropTypes.func.isRequired
};


export default EditTaskWindow;
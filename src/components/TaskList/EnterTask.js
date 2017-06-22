import React from 'react';
import PropTypes from 'prop-types';

const EnterTask = ({onClick}) => {
  return (
    <form>
      <input
        id="taskInput"
        type="text"
        placeholder="watch Wonder Woman"/>
      <label
        htmlFor="taskInput"
        className="btn btn-primary"
        onClick={onClick}>Add</label>
    </form>
  );
};

EnterTask.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default EnterTask;

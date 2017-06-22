import React from 'react';
import PropTypes from 'prop-types';

const EnterTask = ({onChange, onClick}) => {
  return (
    <form>
      <input
        id="taskInput"
        type="text"
        placeholder="watch Wonder Woman"
        onChange= {onChange}/>
      <label
        htmlFor="taskInput"
        className="btn btn-primary"
        onClick={onClick}>Add</label>
    </form>
  );
};

EnterTask.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default EnterTask;

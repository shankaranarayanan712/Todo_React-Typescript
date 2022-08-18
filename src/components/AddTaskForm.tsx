/* eslint-disable jsx-a11y/aria-role */
import React, { MouseEventHandler } from "react";

type AddFormProps = {
  newTask: string,
  setNewTask: Function,
  addTask: MouseEventHandler<HTMLButtonElement>
}
const AddTaskForm = ({ newTask, setNewTask, addTask }:AddFormProps) => {
  return(
    <>
      {/* Add Task */}
      <div className="row" role="addTask">
        <div className="col">
          <input 
            role="value"
            value={newTask}
            onChange={ (e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto" >
          <button
            role="addBtn"
            data-testid="addButton"
            onClick={addTask}
            className="btn btn-lg btn-primary"
          >Add Task</button>
        </div>
      </div>
      <br />
    </>
  )
}

export default AddTaskForm;
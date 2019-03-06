import React from 'react'

const TaskInput = (props) => {
  return (
    <div>
      <input data-testid='task-input' placeholder='add a task' value={props.inputVal} onChange={props.change} />
      <button>Submit</button>
    </div>
  )
}

export default TaskInput
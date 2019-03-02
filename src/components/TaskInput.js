import React from 'react'

const TaskInput = () => {
  return (
    <div>
      <input data-testid='task-input' placeholder='add a task' />
      <button>Submit</button>
    </div>
  )
}

export default TaskInput
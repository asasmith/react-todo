import React from 'react'

const TodoInput = (props) => {
  return (
    <form>
      <input data-testid='todo-input' placeholder='add a task' value={props.inputVal} onChange={props.onChange} />
      <button tupe='button' onClick={props.onSubmit}>Submit</button>
    </form>
  )
}

export default TodoInput
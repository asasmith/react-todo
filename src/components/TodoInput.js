import React from 'react'

const TodoInput = (props) => {
  return (
    <form>
      <input data-testid='todo-input' placeholder='add a task' value={props.inputVal} onChange={props.change} />
      <button tupe='button' onClick={props.submit}>Submit</button>
    </form>
  )
}

export default TodoInput
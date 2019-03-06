import React from 'react'

const TodoList = (props) => {
  return(
    <ul>
      {props.todos.map((todo, index) => {
        return (
            <li key={index} data-testid='todo-item'>{todo.text} <span>{todo.isCompleted}</span></li>
          )
        })
      }
    </ul>
  )
}

export default TodoList
import React, { Component } from 'react'

const TodoListItem = (props) => {
  const { text, isCompleted } = props.value
  return(
    <li onClick={props.onClick} data-complete={isCompleted}>{ text }</li>
  )
}

export default TodoListItem
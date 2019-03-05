import React, { Component } from 'react'
import TaskInput from './components/TaskInput'
import TodoList from './components/TodoList'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          text: 'testing',
          isCompleted: false,
        },
      ],
      taskInputVal: '',
    }
  }

  render () {
    return (
      <div>
        <TaskInput />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}
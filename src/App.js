import React, { Component } from 'react'
import TaskInput from './components/TaskInput'
import TodoList from './components/TodoList'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoInputVal: '',
      todos: [
        {
          text: 'testing',
          isCompleted: false,
        },
      ],
      taskInputVal: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({todoInputVal: e.target.value})
  }

  render () {
    return (
      <div>
        <TaskInput inputVal={this.state.todoInputVal} change={this.handleChange} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}
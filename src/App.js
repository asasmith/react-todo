import React, { Component } from 'react'
import TodoInput from './components/TodoInput'
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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({todoInputVal: e.target.value})
  }

  handleSubmit(e) {
    const newTodo = {
      text: e.target.previousElementSibling.value,
      isCompleted: false,
    }
    console.log(e.target)
    e.preventDefault()
    this.setState(
      {
        todoInputVal: '',
        todos: [...this.state.todos, newTodo]
      }
    )
  }

  render () {
    return (
      <div>
        <TodoInput inputVal={this.state.todoInputVal} change={this.handleChange} submit={this.handleSubmit} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}
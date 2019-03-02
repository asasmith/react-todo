import React, { Component } from 'react'
import TaskInput from './components/TaskInput'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          text: 'testing',
          isComplete: false,
        },
      ],
      taskInputVal: '',
    }
  }

  render () {
    return (
      <div>
        <TaskInput />
      </div>
    )
  }
}
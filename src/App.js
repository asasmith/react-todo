import React, { Component } from 'react'
import TodoInput from './components/TodoInput'
import TodoListItem from './components/TodoListItem'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoInputVal: '',
      todos: [
        {
          text: 'testing',
          isCompleted: true,
        },
        {
          text: 'another test',
          isCompleted: false,
        },
      ],
      taskInputVal: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputSubmit = this.handleInputSubmit.bind(this)
    this.handleToggleCompleted = this.handleToggleCompleted.bind(this)
  }

  handleInputChange(e) {
    this.setState({todoInputVal: e.target.value})
  }

  handleInputSubmit(e) {
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

  handleToggleCompleted(i) {
    const todos = [...this.state.todos]
    
    todos[i].isCompleted = !todos[i].isCompleted
    this.setState({
      todos: [...todos],
    })
  }

  // statically render items in state
  // convert this to dynamically render instead of using .map in the render method?
  renderListItems(i) {
    return (
      <TodoListItem
        value={this.state.todos[i]}
        onClick={() => this.handleToggleCompleted(i)} 
      />
    )
  }

  render () {
    return (
      <div>
        <TodoInput inputVal={this.state.todoInputVal} onChange={this.handleInputChange} onSubmit={this.handleInputSubmit} />
        <ul>
          {/* not sure how I feel about this being here */}
          {/* move this logic to a method like renderListItems? */}
          {/* or move it to the child component? */}
          {this.state.todos.map((todo, index) => {
            return <TodoListItem value={todo} key={index} onClick={() => this.handleToggleCompleted(index)} />
          })}
        </ul>
      </div>
    )
  }
}
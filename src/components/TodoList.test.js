import React from 'react'
import { render, getAllByTestId } from 'react-testing-library'
import TodoList from './TodoList'

const items = [
  {
    text: 'one',
  },
  {
    text: 'two',
  },
  {
    text: 'three',
  },
]

test('<TodoItem />', () => {
  const { getByTestId, getAllByTestId } = render(<TodoList todos={items}/>)

  const todoItems = getAllByTestId('todo-item')

  expect(todoItems.length).toEqual(items.length)
})
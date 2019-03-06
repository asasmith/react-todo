import React from 'react'
import { render } from 'react-testing-library'
import TodoInput from './TodoInput'

test('<TodoInput />', () => {
  const { getByTestId } = render(<TodoInput />)
  const todoInput = getByTestId('todo-input')

  expect(todoInput.tagName).toBe('INPUT')
})
import React from 'react'
import { render } from 'react-testing-library'
import TaskInput from './TaskInput'

test('<TaskInput />', () => {
  const { getByTestId } = render(<TaskInput />)
  const taskInput = getByTestId('task-input')

  expect(taskInput.tagName).toBe('INPUT')
})
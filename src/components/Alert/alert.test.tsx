import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Alert, { AlertProps } from './alert'

const defaultProps: AlertProps = {
  description: 'test'
}

const testProps: AlertProps = {
  description: 'test title',
  message: 'alert title'
}

const closeProps: AlertProps = {
  description: 'test title',
  message: 'alert title',
  closeable: true
}

describe('test Alert Components', () => {
  it('should render the corrent default alert', () => {
    const wrapper = render(<Alert {...defaultProps}/>)
    const element = wrapper.getByText('test')
    expect(element).toBeTruthy()
    expect(element).toHaveClass('alert-description')
  })
  it('should render the alert contain title', () => {
    const wrapper = render(<Alert {...testProps}/>)
    const element = wrapper.getByText('alert title')
    expect(element).toBeTruthy()
    expect(element).toHaveClass('alert-message')
  })
  it('should render the alert has close button', () => {
    const wrapper = render(<Alert {...closeProps}/>)
    const element = wrapper.getByText('关闭')
    expect(element).toBeTruthy()
    fireEvent.click(element)
    // TODO: click ?? not.toBeInTheDocument
    expect(element).not.toBeInTheDocument()
  })
})
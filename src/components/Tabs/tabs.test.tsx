import React from 'react'
import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import Tabs, { TabsProps } from './tabs'
import TabItem from './TabItem'

const testProps: TabsProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'tab-test'
}

const testCardProps: TabsProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'tab-test',
  type: 'card'
}

const generateTabs = (props: TabsProps) => {
  return (
    <Tabs {...props}>
      <TabItem label="active">this is card one</TabItem>
      <TabItem label="card" disabled>this is card two</TabItem>
      <TabItem label="second" className="test">this is card three</TabItem>
    </Tabs>
  )
}

let wrapper: RenderResult, tabElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test Tabs and TabItem component', () => {
  beforeEach(() => {
    wrapper = render(generateTabs(testProps))
    tabElement = wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('card')
  })
  it('should render corrent Tabs and TabItem based on default props', () => {
    expect(tabElement).toBeInTheDocument()
    expect(tabElement).toHaveClass('tabs-nav')
    expect(tabElement.querySelectorAll(':scope > li').length).toEqual(3)
    expect(activeElement).toHaveClass('tabs-tab-item is-active')
    expect(disabledElement).toHaveClass('tabs-tab-item is-disabled')
  })
  it('click items should change active and call the right callback', () => {
    const secondItem = wrapper.getByText('second')
    fireEvent.click(secondItem)
    expect(secondItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith(2)
    // fireEvent.click(disabledElement)
    // expect(disabledElement).not.toHaveClass('is-active')
    // expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
  })
  it('should render card type when type is set to card', () => {
    cleanup()
    const wrapper = render(generateTabs(testCardProps))
    const menuElement = wrapper.getByTestId('test-menu-type')
    expect(menuElement).toHaveClass('tabs-card')
  })
})
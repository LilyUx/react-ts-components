import React, { useState } from 'react'
import classNames from 'classnames'
import { TabItemProps } from './TabItem'

type TabsType = 'line' | 'card'
type SelectCallback = (selectIndex: number) => void
export interface TabsProps {
  defaultIndex?: number,
  className?: string,
  style?: React.CSSProperties,
  onSelect?: SelectCallback,
  type?: TabsType
}

const Tabs: React.FC<TabsProps> = (props) => {
  const {
    defaultIndex,
    className,
    style,
    type,
    onSelect,
    children
  } = props

  const [currentAction, setActive] = useState(defaultIndex)
  const classes = classNames('tabs', className, {
    'tabs-card': type === 'card'
  })

  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const renderTabsLabel = React.Children.map(children, (child, index) => {
    const childElement = child as React.FunctionComponentElement<TabItemProps>
    const { label, disabled } = childElement.props
    const classes = classNames('tabs-tab-item', {
      'is-disabled': disabled,
      'is-active': currentAction === index
    })
    
    return (
      <li className={classes} onClick={() => handleClick(index)}>
        {label}
      </li>
    )
  })

  const renderTabsContent = React.Children.map(children, (child, index) => {
    const childElement = child as React.FunctionComponentElement<TabItemProps>
    const { children, className } = childElement.props
    const classes = classNames('tabs-tab-content', className)
    return (
      currentAction === index ?
      <div className={classes}>
        {children}
      </div> : <></>
    )
  })

  return (
    <div className={classes} style={style} data-testid="test-menu-type">
      <ul className="tabs-nav" data-testid="test-menu">
        {renderTabsLabel}
      </ul>
      <div className="tabs-content">
        {renderTabsContent}
      </div>
    </div>
  )
}

Tabs.defaultProps = {
  defaultIndex: 0
}

export default Tabs
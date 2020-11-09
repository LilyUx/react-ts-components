import React from 'react'

export interface TabItemProps {
  label: React.ReactNode;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode
}

const TabItem: React.FC<TabItemProps> = (props) => {
  const {
    children,
    ...restProps
  } = props

  return (
    <div {...restProps}>
      {children}
    </div>
  )
}

export default TabItem
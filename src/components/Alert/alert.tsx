/**
 * 实现Alert组件
 * <Alert
      ={message} 标题
      description={description} 提示信息
      type={'success' | 'default' | 'danger' | 'warning'} 主题颜色
      onClose={onClose} 关闭回调
      closeable={true} 是否显示关闭按钮
    />
 * 
 */

import React, { useState } from 'react'
import classnames from 'classnames'

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
  className?: string;
  type?: AlertType;
  description: string;
  closeable?: boolean;
  message?: string;
}

const Alert:React.FC<AlertProps> = (props) => {
  const {
    type,
    description,
    closeable,
    message,
    className
  } = props
  const classes = classnames('alert', className, {
    [`alert-${type}`]: type
  })
  const [isShow, setShow] = useState<boolean>(true)
  return (
    isShow ? 
      <div className={classes}>
        {message && <span className="alert-message">{message}</span>}
        <span className="alert-description">{description}</span>
        {closeable && <span className="alert-close-btn" onClick={() => {setShow(false)}}>关闭</span>}
      </div>
      : <></>
  )
}

Alert.defaultProps = {
  type: 'default'
}

export default Alert
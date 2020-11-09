import React from 'react'
import classNames from 'classnames'

// export type ButtonSize = 'lg' | 'sm'

// export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  btnType?: ButtonType;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    size,
    disabled,
    children,
    href,
    ...restProps
  } = props
  // btn btn-lg btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })

  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >{children}</a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >{children}</button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button
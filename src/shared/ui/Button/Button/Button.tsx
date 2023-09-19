import React from 'react'
import styles from './button.scss'

interface IButtonProps {
  className?: string
  onClick?: () => void
  showBorder?: boolean
  children: React.ReactNode
}

export const Button: React.FC<IButtonProps> = ({
  onClick,
  showBorder,
  className,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        borderBottom: showBorder ? '1px solid #ECECEC' : 'none',
        paddingBottom: showBorder ? '12px' : '0',
      }}
    >
      {children}
    </button>
  )
}

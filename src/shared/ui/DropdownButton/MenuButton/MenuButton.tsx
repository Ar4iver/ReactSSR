import React from 'react'
import styles from './menubutton.scss'

interface MenuButtonProps {
  icon?: React.ReactNode
  text?: string
  className?: string
  onClick?: () => void
  showBorder?: boolean,
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  icon,
  text,
  onClick,
  showBorder,
  className
}) => {
  return (
    <button 
      onClick={onClick}
      className={className}
      style={{
        borderBottom: showBorder ? '1px solid #ECECEC' : 'none',
        paddingBottom: showBorder ? '12px' : '0'
      }}>
      {icon}
      <span>{text}</span>
    </button>
  )
}
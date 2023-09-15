import React from 'react'
import styles from './menubutton.scss'

interface MenuButtonProps {
  icon: React.ReactNode
  text: string
  className?: string
  onClick?: () => void
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  icon,
  text,
  className,
  onClick,
}) => {
  return (
    <button className={`${styles.menuButton} ${className}`} onClick={onClick}>
      {icon}
      <span>{text}</span>
    </button>
  )
}

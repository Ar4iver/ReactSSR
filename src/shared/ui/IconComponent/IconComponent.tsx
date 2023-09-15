import React from 'react'
import styles from './iconcomponent.scss'

interface IconComponentProps {
  width?: string | number
  height?: string | number
  fill?: string
  icon: React.ReactNode
}

export const IconComponent: React.FC<IconComponentProps> = ({
  fill,
  width = '15',
  height = '15',
  icon,
}) => {
  return <span style={{ width, height, fill }}>{icon}</span>
}

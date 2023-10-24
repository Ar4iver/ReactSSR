import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import styles from './style/dropdown.scss'
import { DropdownContent } from './DropdownContent/DropdownContent.tsx'
import { IDropdownProps } from '../../types/types.ts'

const NOOP = () => {}

export function Dropdown({
  button,
  children,
  isOpen,
  dropdownRoot,
  onOpen = NOOP,
  onClose = NOOP,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen)
  const buttonRef = useRef<HTMLDivElement>(null)
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
  useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen])
  const handleOpen = (e: MouseEvent) => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className={styles.container}>
      <div ref={buttonRef} onClick={handleOpen}>
        {button}
      </div>
      {isDropdownOpen && (
        <DropdownContent children={children} dropdownRoot={dropdownRoot} />
      )}
    </div>
  )
}

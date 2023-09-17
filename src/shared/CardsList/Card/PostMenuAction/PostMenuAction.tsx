import React, { useState } from 'react'
import styles from './postmenuaction.scss'
import { CounterPost } from './CounterPost/CounterPost.tsx'
import { Dropdown } from './Dropdown/Dropdown.tsx'
import { DropdownPostMenu } from './DropdownPostMenu/DropdownPostMenu.tsx'
import { DropdownButton } from '../../../ui/DropdownButton/DropdownButton.tsx'

export function PostMenuAction() {
  return (
    <div className={styles.menu}>
      <Dropdown button={<DropdownButton />}>
        <DropdownPostMenu />
      </Dropdown>
      <CounterPost />
    </div>
  )
}

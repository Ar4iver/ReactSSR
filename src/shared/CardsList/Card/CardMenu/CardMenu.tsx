import React from 'react'
import styles from './cardmenu.scss'
import { ActionMenuIcon } from '../../../icons/icons.tsx'
import { Button } from '../../../ui/Button/Button.tsx'
import { Dropdown } from '../../../Dropdown/Dropdown.tsx'
import { DropdownPostMenu } from './DropdownPostMenu/DropdownPostMenu.tsx'

export function CardMenu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <Button
            className={styles.menuButton}
            onClick={() => console.log('Кнопка выпадающего меню')}
          >
            <ActionMenuIcon />
          </Button>
        }
      >
        <div className={styles.dropdown}>
          <DropdownPostMenu postId="1234" />
          <Button showBorder={false} className={styles.closeButton}>
            <span>Закрыть</span>
          </Button>
        </div>
      </Dropdown>
    </div>
  )
}

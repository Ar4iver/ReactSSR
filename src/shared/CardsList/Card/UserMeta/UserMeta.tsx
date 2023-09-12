import React from 'react'
import styles from './usermeta.scss'

export function UserMeta() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src="https://cdn.dribbble.com/users/2404/avatars/mini/76f011cc735f61e076dd85ed584e87a3.png?1616184475"
            alt="avatar"
          />
          <a className={styles.username} href="#user-url">
            Дмитрий Гришин
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>4 часа
          назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Следует отметить, что новая модель организационной деятельности ...
        </a>
      </h2>
    </div>
  )
}

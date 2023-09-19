import React from 'react';
import styles from './cardpreview.scss';

export function CardPreview() {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg}
        src="https://cdn.dribbble.com/userupload/3254049/file/original-0a3258fb4e46c4264a67b9630b555ef0.png?compress=1&resize=400x300&vertical=top"
      />
    </div>
  );
}

import React from 'react';
import styles from './NotFoundBlock.module.css';
export const NotFoundBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.icons}>🙁</div>

        <h1>Ничего не найдено</h1>
      </div>
    </div>
  );
};

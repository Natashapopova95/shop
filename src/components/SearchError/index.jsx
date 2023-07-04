import React from 'react';
import styles from './SearchError.module.css';
export const SearchError = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>По вашему запросу ничего не нашлось.</h1>
    </div>
  );
};

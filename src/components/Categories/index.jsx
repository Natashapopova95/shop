import React from 'react';
import styles from './Categories.module.css';

export const Categories = ({ value, onClickCategory }) => {
  const list = ['All', 'Chair', 'Beds', 'Sofa', 'Lamp'];

  return (
    <div className={styles.categories}>
      <ul>
        <li>
          {list.map((catigoryName, i) => (
            <a
              href="#Product_product__WLXqK"
              key={i}
              onClick={() => onClickCategory(i)}
              id={value === i ? styles.active : ''}
            >
              {catigoryName}
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
};

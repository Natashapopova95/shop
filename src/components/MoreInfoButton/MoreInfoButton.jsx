import React, { useState } from 'react';
import styles from './MoreInfoButton.module.css';
export const MoreInfoButton = ({ text }) => {
  const [price, setPrice] = useState(false);
  return (
    <div className={styles.popups}>
      {price && <div className={styles.text}>{text}</div>}

      <div onClick={() => setPrice(!price)} className={styles.btn}>
        <span>More Info</span>
        <svg
          width="39"
          height="13"
          viewBox="0 0 39 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 6.40024H38M38 6.40024C38 6.40024 33.5119 3.44867 32.6 1.00024M38 6.40024C38 6.40024 34.0324 9.17362 32.6 11.8002"
            stroke="#E58411"
            strokeLinecap="square"
          />
        </svg>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './StarRating.module.css';

export const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              className={styles.input}
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className={styles.star}
              color={ratingValue <= (rating || hover) ? '#F6B76F' : ' rgb(174, 178, 178)'}
              size={18}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

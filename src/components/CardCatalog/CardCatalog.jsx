import React, { useState } from 'react';
import { AiFillMinusCircle } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { addItems, removeItems } from '../../redux/slices/catrSlice';
import { StarRating } from '../StarRating/StarRating';
import styles from './CardCatalog.module.css';

export const CardCatalog = ({ id, price, title, imageUrl }) => {
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  // const cartItems = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
  // const addedCount = cartItems ? cartItems.count : 0;

  const onClickAdd = (e) => {
    e.stopPropagation();
    const item = {
      id,
      price,
      title,
      imageUrl,
    };
    dispatch(addItems(item));
  };

  return (
    <div id={styles.sliderCard}>
      <div className={styles.top}>
        <img className={styles.images} src={imageUrl} alt="Chair"></img>
      </div>
      <div className={styles.bottom}>
        <span>Chair</span>
        <h4 className={styles.title}>{title}</h4>
        <StarRating />
        <div className={styles.price}>
          <span>${price}</span>

          <div onClick={onClickAdd} className={styles.buttonAdd}>
            <svg
              width="49"
              height="50"
              viewBox="0 0 49 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.0195923"
                y="0.838867"
                width="48.743"
                height="48.743"
                rx="24.3715"
                fill="#0D1B39"
              />
              <path
                d="M34.1342 25.2102C34.1342 24.4411 33.5107 23.8176 32.7415 23.8176H25.7782V16.8543C25.7782 16.0851 25.1547 15.4616 24.3856 15.4616V15.4616C23.6164 15.4616 22.9929 16.0851 22.9929 16.8543V23.8176H16.0296C15.2605 23.8176 14.637 24.4411 14.637 25.2102V25.2102C14.637 25.9794 15.2605 26.6029 16.0296 26.6029H22.9929V33.5662C22.9929 34.3353 23.6164 34.9588 24.3856 34.9588V34.9588C25.1547 34.9588 25.7782 34.3353 25.7782 33.5662V26.6029H32.7415C33.5107 26.6029 34.1342 25.9794 34.1342 25.2102V25.2102Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import cart from '../../assets/images/shoppingCart.svg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './CartImages.module.css';
export const CartImages = ({ item }) => {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className={styles.box}>
      <Link to="Cart">
        <img src={cart} alt="" className={styles.cart_img} />
      </Link>
      <span>{totalPrice}</span>
    </div>
  );
};

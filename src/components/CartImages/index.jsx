import React from 'react';
import cart from '../../assets/images/shoppingCart.svg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './CartImages.module.css';
export const CartImages = () => {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <>
      <Link to="Cart">
        <img src={cart} alt="" />
      </Link>
      <span>{totalPrice}</span>
    </>
  );
};

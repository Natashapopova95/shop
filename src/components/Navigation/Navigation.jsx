import React, { useState, useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { IoIosMenu } from 'react-icons/io';
import { GrClose } from 'react-icons/gr';
// import { Link } from 'react-router-dom';

import { CartImages } from '../CartImages/CartImages';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.logo}>
        Panto
      </Link>
      <nav onClick={() => setNav(!nav)}>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
          <li className={styles.item}>
            <Link smooth to="#Advantages_advantages__1HlnI" className={styles.link}>
              Advantages
            </Link>
          </li>
          <li className={styles.item}>
            <a href="#Product_product__hQeO1" className={styles.link}>
              Product
            </a>
          </li>
          <li className={styles.item}>
            <a href="#ProductInformation_productInformation__Xy2S9" className={styles.link}>
              About Us
            </a>
          </li>
          <li className={styles.item}>
            <a href="#Reviews_reviews__n3fdK" className={styles.link}>
              Reviews
            </a>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="ProductCatalog">
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
      <CartImages />
      <div onClick={() => setNav(!nav)} className={styles.menu_burger}>
        {nav ? <GrClose size={40} /> : <IoIosMenu size={40} />}
      </div>
    </div>
  );
};

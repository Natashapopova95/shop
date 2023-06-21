import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { IoIosMenu } from 'react-icons/io';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';

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
            <HashLink smooth to="#Advantages_advantages__Fymwh" className={styles.link}>
              Advantages
            </HashLink>
          </li>
          <li className={styles.item}>
            <HashLink smooth to="#Product_product__WLXqK" className={styles.link}>
              Product
            </HashLink>
          </li>
          <li className={styles.item}>
            <HashLink
              smooth
              to="#ProductInformation_productInformation__Xy2S9"
              className={styles.link}
            >
              About Us
            </HashLink>
          </li>
          <li className={styles.item}>
            <HashLink smooth to="#Reviews_reviews__8nSSV" className={styles.link}>
              Reviews
            </HashLink>
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

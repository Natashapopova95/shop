/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import { Advantages } from '../../components/Advantages';
import { Product } from '../../components/Product';
import { ProductInformation } from '../../components/ProductInformation';
import { Reviews } from '../../components/Reviews';
import { Footer } from '../../components/Footer';

import { motion } from 'framer-motion';
import { Navigation } from '../../components/Navigation';
import { GoTop } from '../../components/GoTop';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <header className={styles.header}>
          <div className={styles.container}>
            <Navigation />
            <div className={styles.description}>
              <h1 className={styles.title}>Make your interior more minimalistic & modern</h1>
              <h4 className={styles.subtitle}>
                Turn your room with panto into a lot more minimalist and modern with ease and speed
              </h4>
            </div>
          </div>
        </header>
        <div className={styles.container}>
          <Advantages />
        </div>
        <Product />
        <ProductInformation />
        <div className={styles.container}>
          <Reviews />
        </div>
        <GoTop />
        <Footer />
      </motion.div>
    </>
  );
};

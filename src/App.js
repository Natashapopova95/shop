/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';
import { Cart } from './pages/Cart/Cart';
import { ProductCatalog } from './pages/ProductCatalog/ProductCatalog';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './styles.module.css';

function App() {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/ProductCatalog/Cart" element={<Cart />} />
          <Route path="/ProductCatalog" element={<ProductCatalog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

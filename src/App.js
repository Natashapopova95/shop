/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';
import { ProductCatalog } from './pages/ProductCatalog';
import { AnimatePresence } from 'framer-motion';

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

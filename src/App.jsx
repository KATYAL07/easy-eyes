import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Heritage from './pages/Heritage';
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';
import { TransitionProvider } from './context/TransitionContext';

export default function App() {
  return (
    <BrowserRouter>
      <TransitionProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="heritage" element={<Heritage />} />
            <Route path="product" element={<Product />} />
            <Route path="about" element={<AboutUs />} />
          </Route>
        </Routes>
      </TransitionProvider>
    </BrowserRouter>
  );
}


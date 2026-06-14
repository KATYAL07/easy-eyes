
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Link from './components/Link';
import LoadingOverlay from './components/LoadingOverlay';
import Login from './pages/Login';

export default function Layout() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="bg-surface text-on-surface font-body-md antialiased min-h-screen">
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <LoadingOverlay />
      <nav className="sticky top-0 w-full bg-surface/80 dark:bg-surface-container-low/80 backdrop-blur-md border-b border-outline-variant/30 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 z-50 transition-colors duration-300">
        <div className="flex-1 flex justify-start">
            <div className="hidden md:flex items-center space-x-12 font-label-caps text-label-caps">
                <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Home</Link>
                <Link to="/shop" className="text-on-surface-variant hover:text-primary transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Shop</Link>
                <Link to="/heritage" className="text-on-surface-variant hover:text-primary transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Heritage</Link>
                <a href="/#about-us" className="text-on-surface-variant hover:text-primary transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">About Us</a>
            </div>
        </div>
        <div className="flex-1 flex justify-center">
            <Link to="/" className="flex items-center">
                <img alt="Easy Eyes Logo" className="h-16 md:h-20 w-auto object-contain mix-blend-multiply" src="/logo.png" />
            </Link>
        </div>
        <div className="flex-1 flex justify-end items-center space-x-6 text-on-surface-variant">
            <button aria-label="search" className="hover:text-primary transition-colors duration-300">
            <span className="material-symbols-outlined">search</span>
            </button>
            <button onClick={() => setIsLoginOpen(true)} aria-label="person" className="hover:text-primary transition-colors duration-300">
            <span className="material-symbols-outlined">person</span>
            </button>
            <button aria-label="shopping_bag" className="hover:text-primary transition-colors duration-300">
            <span className="material-symbols-outlined">shopping_bag</span>
            </button>
        </div>
      </nav>
      
      <main>
        <Outlet />
      </main>

      <footer className="w-full pt-section-gap pb-12 bg-primary-container dark:bg-primary-container mt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop mx-auto mb-16">
            <div className="md:col-span-4 flex flex-col mb-8 md:mb-0">
                <Link to="/" className="block mb-6">
                    <img alt="Easy Eyes Logo" className="h-12 w-auto mb-6 brightness-0 invert" src="/logo.png" />
                </Link>
                <p className="font-body-md text-body-md text-on-primary-container/80 mb-6">
                    Curating timeless eyewear for the modern mover. Excellence in vision, uncompromising in style.
                </p>
                <button onClick={() => setIsLoginOpen(true)} className="flex items-center gap-2 hover:text-secondary-fixed transition-colors duration-300 w-fit">
                    <span className="material-symbols-outlined">person</span>
                    <span className="font-label-caps text-label-caps uppercase tracking-widest">Client Portal</span>
                </button>
            </div>
            <div className="md:col-span-8 flex flex-wrap gap-x-16 gap-y-8 md:justify-end">
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-primary-container uppercase mb-6 tracking-widest">Explore</h4>
                  <nav className="flex flex-col gap-4 font-body-md text-body-md text-on-primary-container/80">
                      <Link to="/shop" className="hover:text-secondary-fixed transition-colors duration-300">Shop by Face Shape</Link>
                      <Link to="/shop" className="hover:text-secondary-fixed transition-colors duration-300">Shop by Frame Shape</Link>
                      <Link to="/shop" className="hover:text-secondary-fixed transition-colors duration-300">Shop by Brand</Link>
                  </nav>
                </div>
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-primary-container uppercase mb-6 tracking-widest">Legal</h4>
                  <nav className="flex flex-col gap-4 font-body-md text-body-md text-on-primary-container/80">
                      <Link to="/" className="hover:text-secondary-fixed transition-colors duration-300">Privacy Policy</Link>
                      <Link to="/" className="hover:text-secondary-fixed transition-colors duration-300">Terms of Service</Link>
                  </nav>
                </div>
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-primary-container uppercase mb-6 tracking-widest">Support</h4>
                  <nav className="flex flex-col gap-4 font-body-md text-body-md text-on-primary-container/80">
                      <Link to="/" className="hover:text-secondary-fixed transition-colors duration-300">Contact Us</Link>
                      <Link to="/" className="hover:text-secondary-fixed transition-colors duration-300">Shipping & Returns</Link>
                  </nav>
                </div>
            </div>
        </div>
        <div className="border-t border-on-primary-container/20 pt-8 px-margin-mobile md:px-margin-desktop mx-auto flex flex-col md:flex-row justify-between items-center text-on-primary-container/60 font-body-md text-sm">
            <p>© 2025 EASY EYES. Curated by Ronak Baweja.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <Link to="/" className="hover:text-secondary-fixed transition-colors duration-300">Instagram</Link>
                <Link to="/" className="hover:text-secondary-fixed transition-colors duration-300">Journal</Link>
            </div>
        </div>
      </footer>
    </div>
  );
}

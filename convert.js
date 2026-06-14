import fs from 'fs';
import path from 'path';

const files = ['home.html', 'shop.html', 'heritage.html', 'product.html'];

fs.mkdirSync(path.join('src', 'pages'), { recursive: true });

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let html = fs.readFileSync(file, 'utf-8');
  
  // Extract body content
  let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  if (!bodyMatch) return;
  let body = bodyMatch[1];

  // Remove tailwind script tag if any
  body = body.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');

  // Convert class to className
  body = body.replace(/class=/g, 'className=');
  // Convert for to htmlFor
  body = body.replace(/for=/g, 'htmlFor=');
  
  // Convert style="..." to style={{...}}
  body = body.replace(/style="([^"]*)"/g, (match, p1) => {
    const styles = p1.split(';').filter(s => s.trim().length > 0);
    const styleObj = {};
    styles.forEach(s => {
      let [key, val] = s.split(':');
      if(key && val) {
          key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          styleObj[key] = val.trim();
      }
    });
    return `style={{${Object.entries(styleObj).map(([k,v]) => `${k}: "${v}"`).join(', ')}}}`;
  });

  // Self closing tags
  const tags = ['img', 'input', 'br', 'hr', 'meta', 'link'];
  tags.forEach(tag => {
    const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'gi');
    body = body.replace(regex, `<${tag}$1 />`);
  });
  
  // Also fix `<img ... >` where `>` is matched above, make sure we don't have `<img ... //>`
  body = body.replace(/\/\s*\/>/g, '/>');

  // Remove HTML comments
  body = body.replace(/<!--[\s\S]*?-->/g, '');

  // React Router Links
  body = body.replace(/<a([^>]*?)href="[^"]*"/g, '<Link$1to="/"');
  body = body.replace(/<\/a>/g, '</Link>');  // Also remove navigation since Layout component will handle it, or we just leave it for now.
  // We can remove <nav> and <footer> since Layout has it.
  body = body.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '');
  body = body.replace(/<header[^>]*class="sticky[^>]*>[\s\S]*?<\/header>/gi, ''); // Shop header
  body = body.replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '');

  const componentName = file.replace('.html', '').charAt(0).toUpperCase() + file.replace('.html', '').slice(1);
  const jsx = `
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ${componentName}() {
  useEffect(() => {
    // Basic IntersectionObserver for elements that have fade-in-section
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    document.querySelectorAll('.fade-in-section').forEach((section) => {
        observer.observe(section);
    });
  }, []);

  return (
    <>
      ${body}
    </>
  );
}
  `;
  
  fs.writeFileSync(path.join('src', 'pages', `${componentName}.jsx`), jsx);
});

// Create Layout component
const layout = `
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="bg-surface text-on-surface font-body-md antialiased min-h-screen">
      <nav className="sticky top-0 w-full bg-surface/80 dark:bg-surface-container-low/80 backdrop-blur-md border-b border-outline-variant/30 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 z-50 transition-colors duration-300">
        <Link to="/" className="flex items-center">
            <img alt="Easy Eyes Logo" className="h-10 w-auto object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATaGZZaPr-N-lcKKwCj2Wg5I-dihjvDIAbe0ER9S2HkOcel5zCY3xptc-0c-HqAiGGzuWCvImdVQrJPXX4AT8sQfSifNB_3usMohHjh8Nnxu66vcXnQ09zEtE1H9J72rt8IhOzj5pdyQazlYJoXvkY4PpTMFMQtbkLHMmgxvsIbsuWpWMz4BU72bpXBFQ3Vwrn-qU88h1iVQ2u1WQPBitB8nHLDHC_z8hiuA7gCSryU72Srwj-6B2r5i2gibmoD_uRsWa9TVB7kUg" />
        </Link>
        <div className="hidden md:flex items-center space-x-12 font-label-caps text-label-caps">
            <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors duration-300">Home</Link>
            <Link to="/shop" className="text-on-surface-variant hover:text-primary transition-colors duration-300">Shop</Link>
            <Link to="/heritage" className="text-on-surface-variant hover:text-primary transition-colors duration-300">Heritage</Link>
            <Link to="/product" className="text-on-surface-variant hover:text-primary transition-colors duration-300">Classic Aviator</Link>
        </div>
        <div className="flex items-center space-x-6 text-on-surface-variant">
            <button aria-label="search" className="hover:text-primary transition-colors duration-300">
            <span className="material-symbols-outlined">search</span>
            </button>
            <button aria-label="person" className="hover:text-primary transition-colors duration-300">
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop mx-auto">
            <div className="md:col-span-4 flex flex-col justify-between mb-8 md:mb-0">
                <Link to="/" className="block mb-6">
                    <img alt="Easy Eyes Logo" className="h-12 w-auto mb-6 brightness-0 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATaGZZaPr-N-lcKKwCj2Wg5I-dihjvDIAbe0ER9S2HkOcel5zCY3xptc-0c-HqAiGGzuWCvImdVQrJPXX4AT8sQfSifNB_3usMohHjh8Nnxu66vcXnQ09zEtE1H9J72rt8IhOzj5pdyQazlYJoXvkY4PpTMFMQtbkLHMmgxvsIbsuWpWMz4BU72bpXBFQ3Vwrn-qU88h1iVQ2u1WQPBitB8nHLDHC_z8hiuA7gCSryU72Srwj-6B2r5i2gibmoD_uRsWa9TVB7kUg" />
                </Link>
                <p className="font-body-md text-body-md text-on-primary-container/80 mt-auto">
                    © 2025 EASY EYES. Curated by Ronak Baweja.
                </p>
            </div>
            <div className="md:col-span-8 flex flex-wrap gap-x-16 gap-y-8 md:justify-end">
                <nav className="flex flex-col gap-4 font-body-md text-body-md text-on-primary-container/80">
                    <Link to="/shop" className="hover:text-secondary-fixed transition-colors duration-300">Shop by Face Shape</Link>
                    <Link to="/shop" className="hover:text-secondary-fixed transition-colors duration-300">Shop by Frame Shape</Link>
                    <Link to="/shop" className="hover:text-secondary-fixed transition-colors duration-300">Shop by Brand</Link>
                </nav>
            </div>
        </div>
      </footer>
    </div>
  );
}
`;
fs.mkdirSync(path.join('src', 'pages'), { recursive: true });
fs.writeFileSync(path.join('src', 'Layout.jsx'), layout);

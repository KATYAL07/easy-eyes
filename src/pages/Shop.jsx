import React, { useState, useMemo, useEffect } from 'react';
import Link from '../components/Link';

const MOCK_PRODUCTS = [
  { id: 1, brand: 'Oliver Peoples', name: 'Gregory Peck', price: 380, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARKxt9nentDQbdjw5jqe3tUs7b4E3GlH3OrpkoBAWapKap_qo5K5l8Py8bnB_48ovowNKEKdUgEv3lXhmBcmsqe6vRbF08vDP4V9ZqcFFL7hfNoUVEyCKEDHTqzYURIZ-aga5tcdyr5AsDvd8Bhk9zplzCwNqfrqGQNX8_LzMnfw5wwatBHxeU-UReUuPzXgVtRtCN5M6xPzKFfjfxh8KH6pFD2hq2AePLc0jQf8Z6p-9xuHIfuS_iM6Fc42TTOXhfxqbp3UY6_-w', tag: 'Bestseller', faceShape: 'oval', frameShape: 'Round' },
  { id: 2, brand: 'Tom Ford', name: 'Marko Aviator', price: 450, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeDzS8I_4jSX4hscrUj6dQNxGvlB6H53sL54gYcGIGic_TSrEpDeuWq6Xp1_sLbKj1i6nIwoHFQdcT5MF_haRzDAFFA9zBkVBB5oFocvRtaoajsC6ewlXBgVIHOOnt3Rg38gp1WuXrC6eirnowUENc4Y-s1VlIL3GHnMWpIh7i-LKRfAUWInrj5TotaV2oVzv39JUxtS7zlseK-9i90d7Wd53XkiiBIee7vmjkCk0u8C7_4UJlP47e71wQGXpUtS5SlgoFKUBH7DE', tag: null, faceShape: 'square', frameShape: 'Aviator' },
  { id: 3, brand: 'Persol', name: 'Steve McQueen', price: 480, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUdzsNlgSh7gj2XAm3h9iKI66ku5syIx_m6Hzh1--C1L6HO0OFe0woWUHIbGtCaSckzUHJWnGOf9ocBp3_qeegHIjkv3mYuvm1I4qaCv6upgwXBE_7tBsKO8LAgdRheM9WNQRUnaf5SG45ONjMiEoE8_v06oZ5s0dCJpNdkyi-P_d-xR7euHF-8fWBjnzkHNHFeQZY-S0pRFO6ShN_iaplZsgCZrqTNMi7mvRO54kO8Q9mJlBFmqsPvbMiFmIBgMyQqQMUYr-ccTQ', tag: 'New Arrival', faceShape: 'round', frameShape: 'Rectangle' },
  { id: 4, brand: 'Ray-Ban', name: 'Round Metal', price: 165, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUANzEdJIOL9c7xjtFPyGIEOQuEZqAs5Wwy9DDBitJTaKXTULMSs6YNyLNhLJ_hhHkY5dcoIdZeKZ7EaMGA0CAXpFdcyTsz1nsqssVqcX7u2Zgi0lb7tv4z2CT8cfAxjmF8Yrv8AVIolSJQ14CAE5y6s-gXP3DM3PEaKtGbS4jWdFHmEuA7NhapEOOXsLCSDklXLvoaUfKj6SndbRAt9hA24H0USZDXa1VmL6ki8-xlpRastZmBn_cdGjGyqBHHu3x1rxT5u-pOMc', tag: null, faceShape: 'heart', frameShape: 'Round' },
  { id: 5, brand: 'Celine', name: 'Triomphe Cat Eye', price: 510, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIeLAoacb3dsb37XOkDv7_MHSQUhIYcSGndukFTvJGD8APwPWYPSHTtwNr7IrICTUbWeCOqG498GQSjzwYMrXPc5weZpNfEM8smrUEraub3W0WIUzTE16WoXvSeHal2oewhGg_Eu1TSKBczNHHvMMze9EXsQtdXEFWpf5ZWP0S1Ac-yrw5ZpHDb-N-FUVFrP2IGvyLylrVRLhhv_YbNv-LW5-9sgQ1p_jf9fccUm9JL2HAPJmZ14LicI180NdXIt-dVVY_xlFmZPk', tag: null, faceShape: 'diamond', frameShape: 'Cat-Eye' },
  { id: 6, brand: 'Moscot', name: 'Lemtosh Crystal', price: 340, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6bbweP1iHH_WPQLC5_4r9lPMmCSn9sIfvyNx9x5cMWzu3Df83xuTYrutFx22f9GqkhCxyvKaM8NuMbRdtyfc8iStRGCMHiIHis7Qp1ZaTkcfPDnsJQZcgSn098TaPoX4M4CGhe3k_aILAM40Fzni39to3lqCPeRyNitmRsV34q4qsqs6CHt_PLVfSOXGtYxrKbQO-ewaEQkMksLv_Kille1uaENTGs5-VS55iiC7Au3omlyiDzSwt1UDrYE3HUjUNJR2jyjKIz5Q', tag: null, faceShape: 'pear', frameShape: 'Geometric' },
  // Duplicate a few to show pagination
  { id: 7, brand: 'Oliver Peoples', name: 'Cary Grant', price: 410, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARKxt9nentDQbdjw5jqe3tUs7b4E3GlH3OrpkoBAWapKap_qo5K5l8Py8bnB_48ovowNKEKdUgEv3lXhmBcmsqe6vRbF08vDP4V9ZqcFFL7hfNoUVEyCKEDHTqzYURIZ-aga5tcdyr5AsDvd8Bhk9zplzCwNqfrqGQNX8_LzMnfw5wwatBHxeU-UReUuPzXgVtRtCN5M6xPzKFfjfxh8KH6pFD2hq2AePLc0jQf8Z6p-9xuHIfuS_iM6Fc42TTOXhfxqbp3UY6_-w', tag: null, faceShape: 'oval', frameShape: 'Wayfarer' },
  { id: 8, brand: 'Tom Ford', name: 'Snowdon', price: 430, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeDzS8I_4jSX4hscrUj6dQNxGvlB6H53sL54gYcGIGic_TSrEpDeuWq6Xp1_sLbKj1i6nIwoHFQdcT5MF_haRzDAFFA9zBkVBB5oFocvRtaoajsC6ewlXBgVIHOOnt3Rg38gp1WuXrC6eirnowUENc4Y-s1VlIL3GHnMWpIh7i-LKRfAUWInrj5TotaV2oVzv39JUxtS7zlseK-9i90d7Wd53XkiiBIee7vmjkCk0u8C7_4UJlP47e71wQGXpUtS5SlgoFKUBH7DE', tag: null, faceShape: 'square', frameShape: 'Oversized' },
  { id: 9, brand: 'Ray-Ban', name: 'Classic Aviator', price: 160, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUdzsNlgSh7gj2XAm3h9iKI66ku5syIx_m6Hzh1--C1L6HO0OFe0woWUHIbGtCaSckzUHJWnGOf9ocBp3_qeegHIjkv3mYuvm1I4qaCv6upgwXBE_7tBsKO8LAgdRheM9WNQRUnaf5SG45ONjMiEoE8_v06oZ5s0dCJpNdkyi-P_d-xR7euHF-8fWBjnzkHNHFeQZY-S0pRFO6ShN_iaplZsgCZrqTNMi7mvRO54kO8Q9mJlBFmqsPvbMiFmIBgMyQqQMUYr-ccTQ', tag: 'Bestseller', faceShape: 'round', frameShape: 'Aviator' },
];

export default function Shop() {
  const [selectedFaces, setSelectedFaces] = useState([]);
  const [selectedFrames, setSelectedFrames] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  const handleFaceChange = (val) => {
    setSelectedFaces(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]);
    setCurrentPage(1);
  };

  const handleFrameChange = (val) => {
    setSelectedFrames(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]);
    setCurrentPage(1);
  };

  const handleBrandChange = (val) => {
    setSelectedBrands(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]);
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const matchFace = selectedFaces.length === 0 || selectedFaces.includes(p.faceShape);
      const matchFrame = selectedFrames.length === 0 || selectedFrames.includes(p.frameShape);
      const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
      return matchFace && matchFrame && matchBrand;
    });
  }, [selectedFaces, selectedFrames, selectedBrands]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      
<main className="min-h-screen px-margin-mobile md:px-margin-desktop py-12 md:py-24">

<div className="mb-16 md:mb-24 max-w-3xl fade-in-section">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Curated Collection</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Discover our hand-selected range of premium eyewear, designed to complement your unique style and facial structure.</p>
</div>
<div className="flex flex-col lg:flex-row gap-gutter">

<aside className="w-full lg:w-1/4 flex-shrink-0 space-y-12 fade-in-section">

<div>
<h3 className="font-label-caps text-label-caps text-primary mb-6 border-b border-outline-variant/30 pb-2">Shop by Face Shape</h3>
<div className="grid grid-cols-2 gap-4">
{['round', 'square', 'oval', 'heart', 'diamond', 'pear'].map(shape => (
  <label key={shape} className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-colors group ${selectedFaces.includes(shape) ? 'border-primary bg-surface-variant' : 'border-outline-variant/50 hover:bg-surface-variant'}`}>
  <input className="sr-only filter-checkbox" name="face_shape" type="checkbox" value={shape} checked={selectedFaces.includes(shape)} onChange={() => handleFaceChange(shape)} />
  <span className="font-label-caps text-label-caps text-on-surface-variant text-center capitalize">{shape}</span>
  </label>
))}
</div>
</div>

<div>
<h3 className="font-label-caps text-label-caps text-primary mb-4 border-b border-outline-variant/30 pb-2">Shop by Frame Shape</h3>
<ul className="space-y-3">
{['Aviator', 'Wayfarer', 'Cat-Eye', 'Round', 'Rectangle', 'Geometric', 'Oversized'].map(frame => (
  <li key={frame}>
  <label className="flex items-center gap-3 cursor-pointer group">
  <input className="form-checkbox text-primary bg-surface border-outline-variant focus:ring-primary rounded-sm h-4 w-4 transition duration-150 ease-in-out filter-checkbox" type="checkbox" checked={selectedFrames.includes(frame)} onChange={() => handleFrameChange(frame)} />
  <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">{frame}</span>
  </label>
  </li>
))}
</ul>
</div>

<div>
<h3 className="font-label-caps text-label-caps text-primary mb-4 border-b border-outline-variant/30 pb-2">Shop by Brand</h3>
<ul className="space-y-3">
{['Tom Ford', 'Oliver Peoples', 'Persol', 'Ray-Ban', 'Celine', 'Moscot'].map(brand => (
  <li key={brand}>
  <label className="flex items-center gap-3 cursor-pointer group">
  <input className="form-checkbox text-primary bg-surface border-outline-variant focus:ring-primary rounded-sm h-4 w-4 transition duration-150 ease-in-out filter-checkbox" type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => handleBrandChange(brand)} />
  <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">{brand}</span>
  </label>
  </li>
))}
</ul>
</div>
</aside>

<div className="w-full lg:w-3/4">
<div className="flex justify-between items-center mb-8 pb-4 border-b border-outline-variant/30">
<span className="font-body-md text-body-md text-on-surface-variant">Showing {filteredProducts.length} results</span>
<div className="flex items-center gap-2">
<span className="font-label-caps text-label-caps text-on-surface-variant">Sort by:</span>
<select className="bg-transparent border-none text-primary font-body-md focus:ring-0 cursor-pointer pr-8">
<option>Featured</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
<option>Newest Arrivals</option>
</select>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
{paginatedProducts.map(product => (
  <div key={product.id} className="group relative flex flex-col hover-zoom fade-in-section is-visible">
  <div className="relative aspect-[4/3] bg-surface-container-low rounded-lg overflow-hidden mb-6 flex items-center justify-center">
  <img alt={product.name} className="object-contain w-[80%] h-[80%] mix-blend-multiply transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500" src={product.image} />
  
  <button className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 rounded hover:bg-primary/90 shadow-sm">
                                  Quick Add
                              </button>
  
  {product.tag && <span className="absolute top-4 left-4 bg-primary text-secondary-fixed font-label-caps text-[10px] px-2 py-1 rounded">{product.tag}</span>}
  </div>
  <div className="text-center space-y-2">
  <p className="font-label-caps text-[10px] text-on-surface-variant tracking-widest uppercase">{product.brand}</p>
  <h3 className="font-headline-md text-[18px] text-primary">{product.name}</h3>
  <p className="font-body-md text-on-surface-variant">₹{product.price}.00</p>
  </div>
  </div>
))}
{paginatedProducts.length === 0 && (
  <div className="col-span-full text-center py-24 text-on-surface-variant">
    No products found matching your filters. Try clearing some selections.
  </div>
)}
</div>

{totalPages > 1 && (
<div className="mt-24 flex justify-center items-center gap-4">
<button 
  className="w-10 h-10 flex items-center justify-center border border-outline-variant/50 rounded hover:border-primary transition-colors disabled:opacity-50 disabled:hover:border-outline-variant/50 cursor-pointer" 
  disabled={currentPage === 1}
  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
>
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>

{Array.from({length: totalPages}).map((_, i) => (
  <button 
    key={i}
    onClick={() => setCurrentPage(i + 1)}
    className={`w-10 h-10 flex items-center justify-center border ${currentPage === i + 1 ? 'bg-primary text-secondary-fixed border-primary' : 'border-outline-variant/50 hover:border-primary'} font-label-caps rounded transition-colors`}
  >
    {i + 1}
  </button>
))}

<button 
  className="w-10 h-10 flex items-center justify-center border border-outline-variant/50 rounded hover:border-primary transition-colors disabled:opacity-50 disabled:hover:border-outline-variant/50 cursor-pointer"
  disabled={currentPage === totalPages}
  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
>
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
)}
</div>
</div>
</main>
    </>
  );
}
import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen pt-section-gap px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto flex flex-col items-center justify-center text-center pb-24">
      <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-8">About Us</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
        Easy Eyes was born from a simple belief: high-quality, timeless eyewear shouldn't be an exclusive luxury. We curate the finest shapes, materials, and styles from the world's most esteemed optical houses, bringing them directly to the modern mover.
      </p>
      <div className="w-16 h-px bg-primary mb-12"></div>
      <p className="font-body-md text-on-surface-variant max-w-xl">
        Every pair in our collection is carefully selected for its uncompromising commitment to craftsmanship and enduring design. Excellence in vision, uncompromising in style.
      </p>
    </div>
  );
}


import React, { useEffect } from 'react';
import Link from '../components/Link';
import { motion } from 'framer-motion';

export default function Heritage() {
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
      



<header className="pt-section-gap pb-content-gap px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<div className="md:col-span-8 md:col-start-3 text-center">
<h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6">CURATED HERITAGE</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                    We partner with the world's most esteemed optical houses. Each brand in our collection is selected for its uncompromising commitment to craftsmanship, materials, and timeless design.
                </p>
</div>
</div>
</header>

<section className="py-8 border-y border-outline-variant/30 bg-surface-container-low overflow-hidden">
<div className="flex w-full group">
<div className="flex shrink-0 animate-marquee items-center justify-around min-w-full space-x-16 pr-16 font-headline-md text-headline-md text-primary opacity-60 group-hover:[animation-play-state:paused]">
<span>TOM FORD</span>
<span className="text-secondary-fixed text-sm">✦</span>
<span>OLIVER PEOPLES</span>
<span className="text-secondary-fixed text-sm">✦</span>
<span>CARTIER</span>
<span className="text-secondary-fixed text-sm">✦</span>
<span>JACQUES MARIE MAGE</span>
<span className="text-secondary-fixed text-sm">✦</span>
<span>PERSOL</span>
<span className="text-secondary-fixed text-sm">✦</span>
<span>GARRETT LEIGHT</span>
<span className="text-secondary-fixed text-sm">✦</span>
</div>
<div aria-hidden="true" className="flex shrink-0 animate-marquee items-center justify-around min-w-full space-x-16 pr-16 font-headline-md text-headline-md text-primary opacity-60 group-hover:[animation-play-state:paused]">
<span>TOM FORD</span>
<span className="text-secondary-fixed text-sm">✦</span>
<span>OLIVER PEOPLES</span>
<span className="text-secondary-fixed text-sm">✦</span>
<span>CARTIER</span>
<span className="text-secondary-fixed text-sm">✦</span>
<span>JACQUES MARIE MAGE</span>
<span className="text-secondary-fixed text-sm">✦</span>
<span>PERSOL</span>
<span className="text-secondary-fixed text-sm">✦</span>
<span>GARRETT LEIGHT</span>
<span className="text-secondary-fixed text-sm">✦</span>
</div>
</div>
</section>

<main className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto space-y-section-gap">

<article className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center group">
<div className="md:col-span-6 relative aspect-[4/5] overflow-hidden rounded bg-surface-container-low">
<img alt="Oliver Peoples frames" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A sophisticated still life of premium tortoiseshell eyeglasses resting on a leather-bound book. The lighting is warm and directional, casting long elegant shadows across a minimalist cream background. The aesthetic is old-money luxury, emphasizing high-quality acetate materials and refined craftsmanship in a sun-drenched, editorial style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiJLh26ihNekEezbyVY3aUN7ZUG2yz9v8Per7uT3LzvtRR9ujPbKjh5cTUi4k_s4iy-zRocSLb6rzN16PZETyIamqJAKIMnDDt7wNVPJ85LC7KiYGW0B8xamnXJdQZjiP30RhQ9LS4wEMeSXEraeUCc11g0jDOq-Z3I1Ug54NHPbImESq9LbsHzuXJFN9wdpIgiYzBAGhmin_0TobXLub12qvPeTqMrT2rcVa8HkfExTdH7o5UaEewGT1yeDwGyDSKNmhXckmZYCw" />
</div>
<div className="md:col-span-5 md:col-start-8 space-y-6 pt-8 md:pt-0">
<span className="font-label-caps text-label-caps text-secondary tracking-[0.2em]">EST. 1987 — LOS ANGELES</span>
<h2 className="font-headline-md text-headline-lg-mobile md:text-headline-lg text-primary">OLIVER PEOPLES</h2>
<div className="w-12 h-px bg-secondary-fixed"></div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Born in the heart of West Hollywood, Oliver Peoples maintains a passion for superior eyewear crafted of the finest materials with careful attention to detailing. Their vintage-inspired aesthetics are iconic, offering a discreet luxury without prominent logos.
                </p>
<div className="pt-4">
<Link className="inline-flex items-center space-x-2 font-label-caps text-label-caps text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors duration-300" to="/">
<span>EXPLORE COLLECTION</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</Link>
</div>
</div>
</article>

<article className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center group">
<div className="md:col-span-5 md:col-start-2 order-2 md:order-1 space-y-6 pt-8 md:pt-0">
<span className="font-label-caps text-label-caps text-secondary tracking-[0.2em]">EST. 2005 — NEW YORK</span>
<h2 className="font-headline-md text-headline-lg-mobile md:text-headline-lg text-primary">TOM FORD</h2>
<div className="w-12 h-px bg-secondary-fixed"></div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Tom Ford eyewear represents a modern, unapologetic approach to glamour. Known for their distinct 'T' logo temple decoration, these frames are designed for those who appreciate bold, architectural shapes and impeccable Italian manufacturing.
                </p>
<div className="pt-4">
<Link className="inline-flex items-center space-x-2 font-label-caps text-label-caps text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors duration-300" to="/">
<span>EXPLORE COLLECTION</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</Link>
</div>
</div>
<div className="md:col-span-6 md:col-start-8 order-1 md:order-2 relative aspect-[4/5] overflow-hidden rounded bg-surface-container-low">
<img alt="Tom Ford frames" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A striking portrait of a confident woman wearing bold, thick-framed black sunglasses. The composition is tight and editorial, resembling a high-end fashion magazine cover. The lighting is dramatic, highlighting the sharp angles of the eyewear against a soft, muted beige backdrop, evoking a sense of modern corporate elegance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhb4EDYPWjnsnizPPXQOJajIgIQrFldXkXmzHgwh8exEEWVRMBReLEtTHuFK82wkFUBbAO81Vr1uObk19c07R9wLlRsXjMJT6rsC5O7qhIckrerveY1QgroqX7ghW_bWez55KeLXr_yaJ02yPNVEzmm6ftUj5Uio5Hhc97ffof_t1WMpwsrzmZaURdiCWdmE5r9tc4oVfhK1yoVW-P32fwB6Lhf88radLqz6c5alOXaQ4zK-xzuq9BOMQa1ylA52yBuZzIQfs7hTM" />
</div>
</article>

<article className="pt-content-gap">
<div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
<span className="font-label-caps text-label-caps text-secondary tracking-[0.2em]">ARTISANAL HERITAGE</span>
<h2 className="font-headline-md text-headline-lg-mobile md:text-headline-lg text-primary">JACQUES MARIE MAGE</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    A Los Angeles-based producer of limited-edition designer goods. JMM frames are micro-produced in Japan and Italy using heritage techniques, resulting in sculptural, heavyweight acetate pieces that function as wearable art.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="aspect-[3/4] overflow-hidden rounded bg-surface-container-low relative group">
<img alt="JMM Detail 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A close-up, detailed shot of premium eyewear hinges and acetate finishing. The image focuses on the intricate metallic details and the thick, polished edge of a rich brown tortoiseshell frame. The macro photography style highlights the artisanal craftsmanship and high-quality materials characteristic of luxury optical houses." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrLCknN6h4JYQn5UI-aSpZow_xN1wfvOqrwURRjHs3TPRlU0Ch5I0Yso0n1TIIqTVgz79H39ELW7ucx8wLMpXb2J0vRy-RkjFfIWMzfVBCMkMAV00u0GcwGihx0oT6Oobf1HFQfC6bF9CGz3UAMbRNnPo9vme80XcbbubwFvGD3rqV4BSEKn_gURvL5Mj9vSpXdgSmpIM4X1kpvvRhM8jwk9oip3T7ZFbR26QL42385UJKjMbjM4Fglzqhb6qPM4LFqm1qajtgWw0" />
</div>
<div className="aspect-[3/4] overflow-hidden rounded bg-surface-container-low relative group md:-translate-y-8">
<img alt="JMM Detail 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A sophisticated editorial shot featuring a pair of chunky, geometric sunglasses resting elegantly on a textured stone surface. Soft, dappled sunlight filters through, creating an interplay of light and shadow that emphasizes the sculptural quality of the frames. The overall tone is warm, minimal, and exceedingly premium." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuA1H7X5m2aLr78iQdo0kbSTB-AS3vxIKGpFab_cN-iMliX_G3TuxyF_-4a8vF4jegtK0-L4iU8jnx_7ZRXenroIABQ21QAKS8TZ3Tt3QI_DH073dFPQmJvgbD23w9KTntrBAlgu10_-5WORyTv_3K7nggZJgXFo6tVn7xNLFwGNCZ7gW2tP_lDEMbvLFwSjzsYMIsXTOeUpMdPpGHB477-RxmedlrclCeXyFIwsQLd1lGlQwkDa_FThqeTECuDg_27AGL-u-3MsU" />
</div>
<div className="aspect-[3/4] overflow-hidden rounded bg-surface-container-low relative group">
<img alt="JMM Detail 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A minimalist composition showing specialized optical tools next to a beautifully crafted pair of eyeglasses. The setting suggests an atelier or workshop environment, clean and focused. The color palette revolves around warm wood tones, polished steel, and the deep espresso color of the frames, communicating heritage and precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoupqNQGDztLv2xDKR4nKynCyWe3aCxIvXG5GGMQFT9w3KTlG--Hl_-fJ3hodMq8kFDLaYkIY-OVp_8vb72wQZbz9cJ1Q5YDLxmLVKHfC_DYw78478SFmfFOdkbRJze1rpCH5Zo82AfLsrkM_JFwSB0g5q5TJIix-JSzCjM1rAPZBz-hHvDc6iH5ZpBYdYup9gt9j_8nPJKsXQmQJvRTh9pDY7XC-oM_DiqYqTG4IoJ-asZi5gykDeZ7H5h2dq0UeG8qS9iQDxsFc" />
</div>
</div>
<div className="text-center mt-12">
<Link className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-label-caps text-label-caps rounded transition-colors duration-300 hover:bg-secondary" to="/">
                    SHOP JACQUES MARIE MAGE
                </Link>
</div>
</article>
</main>



    </>
  );
}
  
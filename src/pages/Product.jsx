
import React, { useEffect } from 'react';
import Link from '../components/Link';
import { motion } from 'framer-motion';

export default function Product() {
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
      



<main className="pt-12 pb-section-gap">

<div className="px-margin-mobile md:px-margin-desktop mb-8">
<div className="flex items-center space-x-2 font-label-caps text-label-caps text-on-surface-variant uppercase">
<Link className="hover:text-primary transition-colors" to="/">Shop</Link>
<span>/</span>
<Link className="hover:text-primary transition-colors" to="/">Sunglasses</Link>
<span>/</span>
<span className="text-primary">The Monaco</span>
</div>
</div>

<section className="px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap">

<div className="md:col-span-7 flex flex-col-reverse md:flex-row gap-4">

<div className="flex md:flex-col gap-4 overflow-x-auto no-scrollbar md:w-24 flex-shrink-0">
<button className="w-20 h-24 md:w-full bg-surface-container-low rounded border border-primary/20 p-1 flex-shrink-0">
<img alt="Thumbnail 1" className="w-full h-full object-cover rounded-sm mix-blend-multiply" data-alt="A close-up studio shot of luxurious, thick-framed black sunglasses resting on a subtle cream textured surface. The lighting is soft and diffused, highlighting the glossy finish of the acetate frames. The aesthetic is clean, minimalist, and editorial, evoking a sense of high-end fashion and old-money elegance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmZSw4aWZlB0A-0DbXB8phbP1vai1GSzT6JNhEcThjE_vkZfm2oovFt7fTKDaOwiK4kCpNQJcr_IyTo66VhzEi7Xh6Y-0BZ2v7-aGv2j671_c-6AJ7Yog36--jJC1KlzItNqcrKQ6IJIzEnjmiWTB-wYNHQdwAC1wRXJOlgo42WCiRXkbghMHFj9CrHmC06edsHrJLgVpEY8HCvoP4AsLoXSezMvvN0CXktil3fa4m8D_DmV4nxf3LB6ZCUh1BHPZoXK2zxfB71Mo" />
</button>
<button className="w-20 h-24 md:w-full bg-surface-container-low rounded border border-transparent hover:border-primary/20 transition-colors p-1 flex-shrink-0 opacity-70 hover:opacity-100">
<img alt="Thumbnail 2" className="w-full h-full object-cover rounded-sm mix-blend-multiply" data-alt="A side-profile view of premium black sunglasses placed diagonally on a beige background. The focus is on the sturdy hinges and the sleek curve of the temples. The lighting casts a gentle, warm shadow, emphasizing the depth and structural integrity of the eyewear. The overall mood is sophisticated and refined." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXa2EEZvLJkHIiWQxEeCHF3TwoZXrNzjwGwFmJas12WEpey1P2YAwOe2-h3kQ1jtoM8FxBT9P_a_T00CYNetoxEi0UGFBL8_Sc_AdRROBsv4Gyg6eOaDebloQc7C1fHJcjZmNgq9GPHBHCr5F3Euq5AjyIUhQnBOlehAVLwyP0LK8bAGPmg8iMF0--SoDPIMl0BOuO6phVc43HVRHJT92txK5Q92L5r4GEe3rKCmaOd5sjXsqpW_I3_VBU4XRnxJnjvZFsSnWng3M" />
</button>
<button className="w-20 h-24 md:w-full bg-surface-container-low rounded border border-transparent hover:border-primary/20 transition-colors p-1 flex-shrink-0 opacity-70 hover:opacity-100">
<img alt="Thumbnail 3" className="w-full h-full object-cover rounded-sm mix-blend-multiply" data-alt="An overhead flat-lay shot of elegant black sunglasses paired with a dark espresso-brown microfiber cleaning cloth featuring a subtle minimalist logo. They are arranged on a pale yellow-cream surface. The composition is highly stylized and asymmetric, fitting for a luxury lifestyle magazine spread." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDebjhDifEomMPm2pHxRdICuUmVxHIt40chlNF0AluxBc-gtHyGmAuf50xvbfhZLfl2d96GWMycxtu25i3XRw_elzETsWJOD7P-vDLOQ-o4fSvuX7ChxsJPYpYjdOI3BL-3IkmGO0p2esNT1rOq9Tp6Nbx7RFMbFTmVpyP2Jq5pPkW_gW3yBvQOb1gx1GSkQ1yl4jwuWnLGQ60CIg3w77Ab8ogcGFlaBvH2FwL3vtfqXbmAbM9u6eMEjanQ5_MSBryfHXMPm8gLE68" />
</button>
</div>

<div className="w-full bg-surface-container-low rounded-xl relative overflow-hidden group flex-grow aspect-square md:aspect-[4/5]">

<img alt="Main Product Image" className="w-full h-full object-cover object-center mix-blend-multiply transition-transform duration-700 group-hover:scale-105" data-alt="A large, striking hero shot of thick, black rectangular sunglasses. The frames have a high-gloss finish, reflecting soft, ambient studio light. They are set against a pristine, soft cream background, creating a high-contrast, luxurious visual. The lighting creates subtle, multi-layered shadows that give the image a lifted, three-dimensional feel without looking artificial." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0SaOH_L_5z6mrmaE465S3pBMb0MgHN2B5wl0CbteqS6B-OlnndF7ngYu4Zf1g4eEyLupP3dmAgcaLT0tXDkJB4Ofik2RgJfw_Jn5IRucqNteXkk_Nio-ZkI9AP5OWOvqD190iGfbg9nOq1ZB7b8QMy-hShkTvO5CxNNEbH4XuwnGdgOLSG6bWqnqnOiZ-k_NC03WsAKLXRDC7Ata_UkNqmptlucnhcI2xUCRzlQyB4nWFwkqTrKx_cenMDoM_Ac3M40Gx4U7whCc" />
<div className="absolute top-4 left-4">
<span className="bg-primary-container text-on-primary font-label-caps text-[10px] px-3 py-1 rounded-sm tracking-widest uppercase">Best Seller</span>
</div>
</div>
</div>

<div className="md:col-span-5 md:pl-8 flex flex-col justify-center">
<div className="mb-6">
<h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2 uppercase">The Monaco</h1>
<p className="font-headline-md text-headline-md text-on-surface-variant font-light">₹245.00</p>
</div>
<div className="mb-8">
<p className="font-body-md text-body-md text-on-surface-variant/80 leading-relaxed">
                        Inspired by the Riviera sun, The Monaco embodies timeless confidence. Handcrafted from premium Italian acetate, these bold rectangular frames offer a structured silhouette that commands attention while remaining quietly elegant.
                    </p>
</div>

<div className="mb-8 border-t border-outline-variant/30 pt-6">
<span className="block font-label-caps text-label-caps text-primary uppercase mb-4">Color: <span className="text-on-surface-variant ml-2">Onyx Black</span></span>
<div className="flex space-x-3">
<button aria-label="Onyx Black" className="w-8 h-8 rounded-full bg-black ring-2 ring-primary ring-offset-2 ring-offset-background"></button>
<button aria-label="Havana Tortoise" className="w-8 h-8 rounded-full bg-[#5C4033] ring-1 ring-outline hover:ring-primary transition-all ring-offset-2 ring-offset-background"></button>
<button aria-label="Champagne" className="w-8 h-8 rounded-full bg-[#F5F5DC] border border-outline-variant ring-1 ring-transparent hover:ring-primary transition-all ring-offset-2 ring-offset-background"></button>
</div>
</div>

<div className="mb-8">
<button className="w-full bg-primary-container text-on-primary font-label-caps text-label-caps py-5 px-6 rounded hover:bg-primary-container/90 transition-colors uppercase tracking-widest flex justify-center items-center group">
<span>Add to Bag</span>
<span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
</button>
<div className="mt-4 flex justify-between text-xs text-on-surface-variant/70 uppercase tracking-wide">
<span className="flex items-center"><span className="material-symbols-outlined text-[16px] mr-1">local_shipping</span> Free Shipping</span>
<span className="flex items-center"><span className="material-symbols-outlined text-[16px] mr-1">sync</span> 30-Day Returns</span>
</div>
</div>

<div className="border-t border-outline-variant/30 divide-y divide-outline-variant/30">
<details className="group py-4" open="">
<summary className="flex justify-between items-center cursor-pointer list-none font-label-caps text-label-caps uppercase text-primary">
                            Details &amp; Fit
                            <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="pt-4 font-body-md text-body-md text-on-surface-variant/80">
<ul className="list-disc pl-5 space-y-2">
<li>Handcrafted Italian Acetate</li>
<li>CR-39 lenses with 100% UVA/UVB protection</li>
<li>5-barrel hinges for maximum durability</li>
<li>Fit: Medium to Wide</li>
<li>Measurements: 52-20-145</li>
</ul>
</div>
</details>
<details className="group py-4">
<summary className="flex justify-between items-center cursor-pointer list-none font-label-caps text-label-caps uppercase text-primary">
                            Face Shape Guide
                            <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="pt-4 font-body-md text-body-md text-on-surface-variant/80">
<p>The structured, angular design of The Monaco provides excellent contrast for <strong>Round</strong> and <strong>Oval</strong> face shapes, helping to define facial features.</p>
</div>
</details>
<details className="group py-4">
<summary className="flex justify-between items-center cursor-pointer list-none font-label-caps text-label-caps uppercase text-primary">
                            Shipping &amp; Returns
                            <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="pt-4 font-body-md text-body-md text-on-surface-variant/80">
<p>Complimentary standard shipping on all orders. Unworn items can be returned within 30 days of delivery for a full refund or exchange. Custom engraved items are final sale.</p>
</div>
</details>
</div>
</div>
</section>

<section className="bg-surface-container-low py-24 mb-section-gap">
<div className="px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-content-gap items-center">
<div className="order-2 md:order-1 flex flex-col justify-center">
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6 uppercase">Uncompromising Quality</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
                        We believe in quiet luxury. Every pair of Easy Eyes is meticulously crafted over a 6-week process, ensuring the acetate cures perfectly for a finish that feels as rich as it looks. The hinges are forged for resilience, designed to endure the test of time and trend.
                    </p>
<Link className="inline-flex items-center font-label-caps text-label-caps text-primary uppercase tracking-widest border-b border-primary pb-1 w-max hover:text-secondary hover:border-secondary transition-colors" to="/">
                        Discover Our Craft <span className="material-symbols-outlined ml-2 text-[18px]">east</span>
</Link>
</div>
<div className="order-1 md:order-2">
<img alt="Craftsmanship detail" className="w-full h-[500px] object-cover rounded-sm shadow-sm" data-alt="A close-up, macro shot of the metal hinge connecting the thick acetate frame and temple of a pair of luxury sunglasses. The lighting is warm and directional, highlighting the brushed gold texture of the metal against the deep brown tortoiseshell pattern of the frame. The background is a soft, out-of-focus beige, creating a sophisticated, high-end editorial feel emphasizing craftsmanship." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuZlWeGgF8sX01Zj51L-G0vQIJAgWtNKwO300A7-kuys93bH5EsA1yYvFJnu0S0O3Ooiu90CzXFbMIspUJG1IUj6e_CerBj82Vbj882-4G0Hxii9eJ56hcIEhpAdPZjpnAA5aFPZzBYqJroNvLU4DycEKgVvJnRA4WllfjrZLkLxgQrHMnE_NnryHITQqNzyiKrswke80UaWjoK6xuTUc_IlgBfyDXl4n1UNDeEGMcGZx2Wcyf8PpNtqzGLAQ1noBGbz_XvLyzgq4" />
</div>
</div>
</section>

<section className="px-margin-mobile md:px-margin-desktop">
<div className="flex justify-between items-end mb-12 border-b border-outline-variant/30 pb-4">
<h3 className="font-headline-md text-headline-md text-primary uppercase">Curated For You</h3>
<Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest hidden md:block" to="/">View All</Link>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group cursor-pointer">
<div className="bg-surface-container-low aspect-square rounded-sm mb-4 relative overflow-hidden transition-colors duration-300 group-hover:bg-surface-container flex items-center justify-center p-6">
<img alt="The Paris" className="w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="A pair of elegant, oversized cat-eye sunglasses with tortoiseshell frames, resting on a clean, light cream surface. Studio lighting creates soft reflections on the lenses. The composition is minimal and sophisticated, fitting a luxury eyewear brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkJBAa3NfnuOv3vgKgimoUv1Y-FWZaRuavD-IYMNmDCRnFx_dWsqba8ZZGessoWTShDzryeBAMqi-jSkJlGtLpC0AW-zkffKZFM2ppfNCuzuot79Dkd8Uff8sUAyytQS0PdAmJ_JEOcHYsRIohY12041fW6WC_j46MSDus6gLQgsSUI9BLWsBdBFzWMP71lvF71VK11j0uf6m976WVWvwftelUIZRfb3uYHToGCmZvzGHIAidHKgloYRZdk_2ITDgxe83Q1t-aC8s" />
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary font-label-caps text-[10px] px-4 py-2 rounded uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            Quick Add
                        </button>
</div>
<div className="text-center">
<h4 className="font-label-caps text-[14px] text-primary uppercase mb-1">The Paris</h4>
<p className="font-body-md text-body-md text-on-surface-variant">₹265.00</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-surface-container-low aspect-square rounded-sm mb-4 relative overflow-hidden transition-colors duration-300 group-hover:bg-surface-container flex items-center justify-center p-6">
<img alt="The Milan" className="w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="Sleek, gold-rimmed aviator sunglasses with dark green lenses, positioned elegantly on a soft beige background. Warm, directional lighting casts subtle shadows, highlighting the thin, refined metalwork. The aesthetic is classic, timeless, and premium." src="https://lh3.googleusercontent.com/aida-public/AB6AXuByonTWlq4A2h-0-CPxBDiKR0Hmd95vnLQ6pc7k0KX-V-uEl9zHz-zr3K_PoXd7lTDOZ8I4Y1Qlzn5npEUIb95JlOa4apAvR-CPZ2Jmc-Q-OCFDTYphS8QzoUKa5OTdaXmD12qPMdi3-30YrLH-ICWu0zAldHxdhLYUECh6DdfulRwHBDsHZwxoPf9Ln-JA2LBJSlK37G04f7ArECDZ8ifUdRzZWUnJ_8KC6176tmZUP3GtCw6YoSb1Mq8vi94Wg6j4kjfoLP0G-zE" />
</div>
<div className="text-center">
<h4 className="font-label-caps text-[14px] text-primary uppercase mb-1">The Milan</h4>
<p className="font-body-md text-body-md text-on-surface-variant">₹285.00</p>
</div>
</div>

<div className="group cursor-pointer hidden md:block">
<div className="bg-surface-container-low aspect-square rounded-sm mb-4 relative overflow-hidden transition-colors duration-300 group-hover:bg-surface-container flex items-center justify-center p-6">
<img alt="Premium Care Kit" className="w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="A luxurious eyewear care kit featuring a dark espresso brown microfiber cloth and a small glass spray bottle, arranged neatly on a pale yellow background. The lighting is soft and diffuse. The setting conveys meticulous care and high-end brand experience." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjCe_JcNmtnK0hnS-0B-WGLF-jX5A4xnm_N0EqipiZnP_laHgm4VJXE_00xjCGzCy74R2NjV_DV8mrAgc4L0ZnwEKdW1idNXSixHQRKyu2hWAZY0LXdmpWZwlN9gz9uFywpN1uIYBE-kotpUB33bbUpvgqOjDrwHky_BsH6C2I0kPsL1y1le_8Ns3Q_hLP5OeebmdW7J_edi8j25eTbvqPmBnl-N5X4V5P_HDa629G0DDm0OIecSPE6AGSiyQJrO9xz-OVx3uhLWU" />
</div>
<div className="text-center">
<h4 className="font-label-caps text-[14px] text-primary uppercase mb-1">Premium Care Kit</h4>
<p className="font-body-md text-body-md text-on-surface-variant">₹45.00</p>
</div>
</div>

<div className="group cursor-pointer hidden lg:block">
<div className="bg-surface-container-low aspect-square rounded-sm mb-4 relative overflow-hidden transition-colors duration-300 group-hover:bg-surface-container flex items-center justify-center p-6">
<img alt="Leather Case" className="w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 filter sepia-[0.3]" data-alt="A structured, rich brown leather sunglasses case closed securely, resting on a smooth cream surface. The texture of the fine leather is visible under warm, inviting light. The image exudes heritage, quality, and understated luxury." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO77cLxWzk20iUsLnvviY_KJcVuZaKpuN_MosnbNXeXzF0l4Hk_v-Lh2UaRN1SoSchDGmTSBIAmfOv0mM1n3H9E_aYsvy2U_G86m4fumoNlDINO5SmOjUHzObKyDPt2asxnTerb11t2nOqbfKYRJ-ypHxVyAIgTxaYP2DTXy8mN-C41wCuTbv8WTDtF68CdRA7H9dLFqeNPx0A3Gvo573b7iM1cwbLpTk2jOBB5-GntefpUnfDely-SMElNHac6J4u5PhTa8vh6uI" />
</div>
<div className="text-center">
<h4 className="font-label-caps text-[14px] text-primary uppercase mb-1">Heritage Leather Case</h4>
<p className="font-body-md text-body-md text-on-surface-variant">₹95.00</p>
</div>
</div>
</div>
</section>
</main>




    </>
  );
}
  
import React, { useEffect } from 'react';
import Link from '../components/Link';
import { motion } from 'framer-motion';

export default function Home() {
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


      <header className="relative w-full h-[870px] flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0 bg-secondary-container mix-blend-multiply opacity-20 z-10"></div>
        <img alt="A high-end fashion editorial shot of a person wearing stylish sunglasses in a sun-drenched architectural setting. Warm golden hour lighting casts sharp, dramatic shadows, conveying timeless luxury and modern confidence. The overarching aesthetic relies on warm earthy tones, deep espresso shadows, and a sophisticated, minimalist composition." className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105 transform origin-center transition-transform duration-700 group-hover:scale-110" data-alt="A high-end fashion editorial shot of a person wearing stylish sunglasses in a sun-drenched architectural setting. Warm golden hour lighting casts sharp, dramatic shadows, conveying timeless luxury and modern confidence. The overarching aesthetic relies on warm earthy tones, deep espresso shadows, and a sophisticated, minimalist composition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTsiSc2RjeoUorN_lg86mF_GLMIglmIyHJV4FBa4CN_AyoQoEN44WsegXM7lR2YQOwovIduuSsmOICgnSGkhQg9fV1H7Kx_b3PSGTClD8qekJYDk68VGyWft6tYKIkZ_0TzPu_3gFxnl8X8JK4pnshYirjlf6jzGCg7B_EcRU247x_lkHaFlOlkrxAH9WXN5ltPyQyMeE5zR0IiuK1jcPZWEcVUQ9k2YOh8k5bUaTGrn1IxMiIa7sqdfQPGSkSOFOjGR4Y8HQjy0E" />
        <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto flex flex-col items-center mt-20">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-8 fade-in-section is-visible">
            At EasyEyes, we believe great vision deserves great style.
          </h1>
          <p className="font-body-lg text-body-lg text-primary-container max-w-2xl mb-12 fade-in-section is-visible" style={{ transitionDelay: "100ms" }}>
            Designed for the modern mover, our sunglasses blend clarity, confidence, and comfort—all at an affordable price.
          </p>
          <Link className="inline-flex items-center justify-center px-10 py-4 bg-primary text-on-primary font-label-caps text-label-caps rounded uppercase tracking-widest hover:bg-tertiary transition-colors duration-300 fade-in-section is-visible" to="/shop" style={{ transitionDelay: "200ms" }}>
            Shop the Collection
          </Link>
        </div>
      </header>
      <main>
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop fade-in-section">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <Link className="group md:col-span-7 h-[600px] relative overflow-hidden flex items-end p-12 bg-surface-container" to="/shop">
              <img alt="A close-up fashion portrait focusing on the elegant structure of a woman's face and the perfect geometric fit of her oversized sunglasses. Studio lighting with warm, subtle beige undertones highlights the premium acetate frames against a minimalist, soft cream background, exuding quiet luxury." className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A close-up fashion portrait focusing on the elegant structure of a woman's face and the perfect geometric fit of her oversized sunglasses. Studio lighting with warm, subtle beige undertones highlights the premium acetate frames against a minimalist, soft cream background, exuding quiet luxury." src="https://lh3.googleusercontent.com/aida-public/AB6AXuASsGokQm9f9hnlQW-byviux2JZWjUBPUA5jGjQghzmJTehk0mXW8O3wHtB-yImPjYw9P7zloU8EI5a9PxxzzqVTLUfCHvnvYW-1PAslIYVU-LA6asv2c93713Oyq8pPgTnSSF4ck8I-5ojhAAEpqlnkoW2z3EFTv1zj4rb48usNtUkiMgEc7UWGDVxjcQn7xsVjC8o0hiVrwbSqER5luLVQfzAEdGdBiB4hR8A9D6dd9ldaE5YMTbtT_ZzlOphEKNiKF5hu1-ASRs" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 mb-4 bg-primary text-on-primary font-label-caps text-label-caps rounded uppercase">Curated Guide</span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary mb-2 inline-block relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-secondary-fixed after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left">Shop by Face Shape</h2>
              </div>
            </Link>
            <div className="md:col-span-5 flex flex-col gap-gutter">
              <Link className="group flex-1 relative overflow-hidden flex items-end p-8 bg-surface-container" to="/shop">
                <img alt="A curated still life composition featuring multiple pairs of high-end designer sunglasses arranged meticulously on a textured, raw linen surface. Soft ambient lighting creates gentle layered shadows, emphasizing the craftsmanship, luxurious materials, and timeless corporate aesthetic of the eyewear collection." className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A curated still life composition featuring multiple pairs of high-end designer sunglasses arranged meticulously on a textured, raw linen surface. Soft ambient lighting creates gentle layered shadows, emphasizing the craftsmanship, luxurious materials, and timeless corporate aesthetic of the eyewear collection." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJjgdeihlQkwzI9fTfO5CHr7Wk_o0GDkj5W8ZQvz9z0l1A-zp9nMEmU1NA7NcoAs9Zs8wDacB21DGcAnYUUo-2t8-IpYjraoD9yNBmcos9FJ1GZnTOkZaANTZMJlQs-1FygH65ho8jmQpToEMPp_u1ZSms116oixT8-qHPbglqt_KvJXJlXzgYqW9jnaJXIAhz8CaCQHmtYdB-W3H2ev6Da2fidlgqa_YYQJ_SVdeJnq9t6PJPr-pjijfHHMScAxixOvrgl9n2Qco" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                <div className="relative z-10 w-full flex justify-between items-center">
                  <h2 className="font-headline-md text-headline-md text-on-primary relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-secondary-fixed after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left">Shop by Brand</h2>
                  <span className="material-symbols-outlined text-on-primary transform group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
                </div>
              </Link>
              <Link className="group flex-1 relative overflow-hidden flex items-end p-8 bg-surface-container" to="/shop">
                <img alt="A sophisticated lifestyle shot capturing a stylish individual walking down a historic European cobblestone street, wearing timeless statement sunglasses. The scene is bathed in warm, sun-drenched golden hour light with a shallow depth of field, perfectly encapsulating an old-money, effortless elegance vibe." className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A sophisticated lifestyle shot capturing a stylish individual walking down a historic European cobblestone street, wearing timeless statement sunglasses. The scene is bathed in warm, sun-drenched golden hour light with a shallow depth of field, perfectly encapsulating an old-money, effortless elegance vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLRT2iJfxOozif8uUbPRy2CW-wiKbfplmxXb6peI02eUWEjNCCILVrhwDZVHJlRxtYQLHK2lGUk32Pg_3gSD6q4lDP4iyTrHWt5If6jgkuRD8jE-rfcvjcsmUwyPY6UCn2czMil7xDXu0R05uBUBAxq-jWqH8_5gz1ubB-xkPNBc_FbtB9qBO9-htWHsJbtwHJKJFA01dHIhKvTnehk80kG2IeG67NsSdPtLr1XDX34M2UL5O2tEUk5GNxT3oDjpI3fI2nrFG7xKI" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                <div className="relative z-10 w-full flex justify-between items-center">
                  <h2 className="font-headline-md text-headline-md text-on-primary relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-secondary-fixed after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left">Shop by Style</h2>
                  <span className="material-symbols-outlined text-on-primary transform group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden fade-in-section">
          <div className="flex justify-between items-end mb-16 border-b border-outline-variant/30 pb-4">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Featured Selection</h2>
            <Link className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1 hidden md:block" to="/shop">View All</Link>
          </div>
          <div className="w-full overflow-hidden py-8 flex group">
            <div className="flex shrink-0 gap-8 px-4 animate-marquee group-hover:[animation-play-state:paused]">
              {/* First Set */}
              <div className="min-w-[280px] md:min-w-[320px] group/item cursor-pointer">
                <div className="aspect-[4/5] bg-surface-container-low mb-6 relative overflow-hidden transition-colors duration-500 group-hover/item:bg-surface-container flex items-center justify-center p-8">
                  <img alt="Minimalist product photography of premium dark tortoise shell sunglasses resting on a subtle, warm-tinted cream background. Soft, diffused lighting creates an elegant, ultra-low opacity multi-layered drop shadow, highlighting the fine polish and heritage design without aggressive elevation." className="w-full h-auto object-contain transform group-hover/item:scale-110 group-hover/item:-translate-y-2 transition-transform duration-500 mix-blend-multiply" data-alt="Minimalist product photography of premium dark tortoise shell sunglasses resting on a subtle, warm-tinted cream background. Soft, diffused lighting creates an elegant, ultra-low opacity multi-layered drop shadow, highlighting the fine polish and heritage design without aggressive elevation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaMMJUX1wzRa7Taw4Vw3wbGEzUdqlQNtieWFTvY_acP1ie-6KqLeFD3eovXK4Kpw5ftJPe3NZO8veCV3WGXh4f0a2G5cD-3U3fArGWYYXn-1NlI29IpOWDtqKkDvKNSkcJj6hkEphSxNRMehGXGfsSYIazefiNI4tg_BkrXCyWuA1JTNvwDuEHQEnsceoi680lLvWd0HJML_qCzcQZ-mmoCzX0YSLwexqHORPE3MA_uNIUWExNp6R8GgdVqUWauX3_sB7tQ76VvSo" />
                  <div className="absolute bottom-4 left-0 w-full flex justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <button className="px-6 py-2 bg-primary text-on-primary font-label-caps text-label-caps rounded uppercase shadow-sm">Quick Add</button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Oliver Peoples</p>
                  <h3 className="font-headline-md text-[18px] text-primary mb-2">The Gregory Peck</h3>
                  <p className="font-body-md text-body-md text-secondary">₹380</p>
                </div>
              </div>
              <div className="min-w-[280px] md:min-w-[320px] group/item cursor-pointer">
                <div className="aspect-[4/5] bg-surface-container-low mb-6 relative overflow-hidden transition-colors duration-500 group-hover/item:bg-surface-container flex items-center justify-center p-8">
                  <img alt="Minimalist product photography of sleek, modern black wireframe sunglasses presented against a warm, sun-drenched beige backdrop. The lighting is controlled to produce a soft ambient shadow, emphasizing the lightweight precision engineering and minimalist corporate aesthetic." className="w-full h-auto object-contain transform group-hover/item:scale-110 group-hover/item:-translate-y-2 transition-transform duration-500 mix-blend-multiply" data-alt="Minimalist product photography of sleek, modern black wireframe sunglasses presented against a warm, sun-drenched beige backdrop. The lighting is controlled to produce a soft ambient shadow, emphasizing the lightweight precision engineering and minimalist corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR207xVTms_5XXaMuZA5pmYEWHoiApI5VG8XDplhaCThedD-eS4natgQw8kksIeJlnAL4_IjhQ96i-7jP5vxwwJw0Vfb7c1jOKh0zCgQIOo-ATJ5QSWXFZAO95mQMswlt98le9SoWqh_xRCk4EdbbIFCBt0oHo0j1Jrqc9uhd9L3VWhu7xjXlupPDeNpykMGLUbey8ec3tZc0f6ipPAGRubLW5F4G8O3FBGaFMUTQFj69PEquG4JfXtNh7FMLP9PiIo9_beNqllbs" />
                  <div className="absolute bottom-4 left-0 w-full flex justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <button className="px-6 py-2 bg-primary text-on-primary font-label-caps text-label-caps rounded uppercase shadow-sm">Quick Add</button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Garrett Leight</p>
                  <h3 className="font-headline-md text-[18px] text-primary mb-2">Kinney Sun</h3>
                  <p className="font-body-md text-body-md text-secondary">₹340</p>
                </div>
              </div>
              <div className="min-w-[280px] md:min-w-[320px] group/item cursor-pointer">
                <div className="aspect-[4/5] bg-surface-container-low mb-6 relative overflow-hidden transition-colors duration-500 group-hover/item:bg-surface-container flex items-center justify-center p-8">
                  <img alt="High-end editorial product shot of classic aviator sunglasses featuring gold frames and green lenses, laid flat on a pristine soft cream surface. Warm, subtle lighting enhances the metallic luster, embodying a timeless, heritage-rich old-money luxury feel." className="w-full h-auto object-contain transform group-hover/item:scale-110 group-hover/item:-translate-y-2 transition-transform duration-500 mix-blend-multiply" data-alt="High-end editorial product shot of classic aviator sunglasses featuring gold frames and green lenses, laid flat on a pristine soft cream surface. Warm, subtle lighting enhances the metallic luster, embodying a timeless, heritage-rich old-money luxury feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmBfA9RQlTn5nduBZzvQ0dm6Rize4sQWozkfRWYkEnTfxKhm65GFlKZNnglWyPbE_4d_O2wSRT15j3s448x_2mGD7CIook3yH-WMo4pLyk6_2wxc608VrmtL0VngDGdyRmRAekyGNq6IKISOjtuyLoBQwqmtQa_Kizr3aTJ6kRQr5puUGCPFhi6WIe0GqHSLV5Q6WRhKj1Ac3_gLgPSmx47jIvChKoVKMOModK2FZW_ww7gaLM0rODRjOEcwliZhR-9-PXn1ObFxI" />
                  <div className="absolute bottom-4 left-0 w-full flex justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <button className="px-6 py-2 bg-primary text-on-primary font-label-caps text-label-caps rounded uppercase shadow-sm">Quick Add</button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Ray-Ban</p>
                  <h3 className="font-headline-md text-[18px] text-primary mb-2">Classic Aviator</h3>
                  <p className="font-body-md text-body-md text-secondary">₹160</p>
                </div>
              </div>
              <div className="min-w-[280px] md:min-w-[320px] group/item cursor-pointer">
                <div className="aspect-[4/5] bg-surface-container-low mb-6 relative overflow-hidden transition-colors duration-500 group-hover/item:bg-surface-container flex items-center justify-center p-8">
                  <img alt="Pristine still-life photograph of chunky, bold acetate sunglasses in a rich espresso brown, positioned precisely on a warm, light beige podium. The lighting is meticulous, creating gentle tonal shifts that highlight the sculpted frames without utilizing heavy, aggressive shadows." className="w-full h-auto object-contain transform group-hover/item:scale-110 group-hover/item:-translate-y-2 transition-transform duration-500 mix-blend-multiply" data-alt="Pristine still-life photograph of chunky, bold acetate sunglasses in a rich espresso brown, positioned precisely on a warm, light beige podium. The lighting is meticulous, creating gentle tonal shifts that highlight the sculpted frames without utilizing heavy, aggressive shadows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtY6qHLEDOO_18Y4SkAuQFPmhhQzq5m1kKMyfke7pR3q0b9boKnGL-iLfHR6gsHpJyYJyz33DOrP_cc32ICrvKhEInAhIb4Ym433k1SoCJuxl6os-1pSIHxODkaqN5U3YAWj6AblqVReR3yEA2j3CoZu8YNQE8HfnvmWpJ9Ld5SSsakc9_68l1Sg2-Y7y5R4VnRGtXOb3xgUCWZAuER1VoIE38F3Nz9PW5zzuDnxlSIgTF1g4BW0EviXMml0cVMpwV33cOCdw6emo" />
                  <div className="absolute bottom-4 left-0 w-full flex justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <button className="px-6 py-2 bg-primary text-on-primary font-label-caps text-label-caps rounded uppercase shadow-sm">Quick Add</button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Tom Ford</p>
                  <h3 className="font-headline-md text-[18px] text-primary mb-2">Snowdon</h3>
                  <p className="font-body-md text-body-md text-secondary">₹420</p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="flex shrink-0 gap-8 px-4 animate-marquee group-hover:[animation-play-state:paused]">
              {/* Duplicate Set for Infinite Scroll */}
              <div className="min-w-[280px] md:min-w-[320px] group/item cursor-pointer">
                <div className="aspect-[4/5] bg-surface-container-low mb-6 relative overflow-hidden transition-colors duration-500 group-hover/item:bg-surface-container flex items-center justify-center p-8">
                  <img alt="Minimalist product photography of premium dark tortoise shell sunglasses resting on a subtle, warm-tinted cream background. Soft, diffused lighting creates an elegant, ultra-low opacity multi-layered drop shadow, highlighting the fine polish and heritage design without aggressive elevation." className="w-full h-auto object-contain transform group-hover/item:scale-110 group-hover/item:-translate-y-2 transition-transform duration-500 mix-blend-multiply" data-alt="Minimalist product photography of premium dark tortoise shell sunglasses resting on a subtle, warm-tinted cream background. Soft, diffused lighting creates an elegant, ultra-low opacity multi-layered drop shadow, highlighting the fine polish and heritage design without aggressive elevation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaMMJUX1wzRa7Taw4Vw3wbGEzUdqlQNtieWFTvY_acP1ie-6KqLeFD3eovXK4Kpw5ftJPe3NZO8veCV3WGXh4f0a2G5cD-3U3fArGWYYXn-1NlI29IpOWDtqKkDvKNSkcJj6hkEphSxNRMehGXGfsSYIazefiNI4tg_BkrXCyWuA1JTNvwDuEHQEnsceoi680lLvWd0HJML_qCzcQZ-mmoCzX0YSLwexqHORPE3MA_uNIUWExNp6R8GgdVqUWauX3_sB7tQ76VvSo" />
                  <div className="absolute bottom-4 left-0 w-full flex justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <button className="px-6 py-2 bg-primary text-on-primary font-label-caps text-label-caps rounded uppercase shadow-sm">Quick Add</button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Oliver Peoples</p>
                  <h3 className="font-headline-md text-[18px] text-primary mb-2">The Gregory Peck</h3>
                  <p className="font-body-md text-body-md text-secondary">₹380</p>
                </div>
              </div>
              <div className="min-w-[280px] md:min-w-[320px] group/item cursor-pointer">
                <div className="aspect-[4/5] bg-surface-container-low mb-6 relative overflow-hidden transition-colors duration-500 group-hover/item:bg-surface-container flex items-center justify-center p-8">
                  <img alt="Minimalist product photography of sleek, modern black wireframe sunglasses presented against a warm, sun-drenched beige backdrop. The lighting is controlled to produce a soft ambient shadow, emphasizing the lightweight precision engineering and minimalist corporate aesthetic." className="w-full h-auto object-contain transform group-hover/item:scale-110 group-hover/item:-translate-y-2 transition-transform duration-500 mix-blend-multiply" data-alt="Minimalist product photography of sleek, modern black wireframe sunglasses presented against a warm, sun-drenched beige backdrop. The lighting is controlled to produce a soft ambient shadow, emphasizing the lightweight precision engineering and minimalist corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR207xVTms_5XXaMuZA5pmYEWHoiApI5VG8XDplhaCThedD-eS4natgQw8kksIeJlnAL4_IjhQ96i-7jP5vxwwJw0Vfb7c1jOKh0zCgQIOo-ATJ5QSWXFZAO95mQMswlt98le9SoWqh_xRCk4EdbbIFCBt0oHo0j1Jrqc9uhd9L3VWhu7xjXlupPDeNpykMGLUbey8ec3tZc0f6ipPAGRubLW5F4G8O3FBGaFMUTQFj69PEquG4JfXtNh7FMLP9PiIo9_beNqllbs" />
                  <div className="absolute bottom-4 left-0 w-full flex justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <button className="px-6 py-2 bg-primary text-on-primary font-label-caps text-label-caps rounded uppercase shadow-sm">Quick Add</button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Garrett Leight</p>
                  <h3 className="font-headline-md text-[18px] text-primary mb-2">Kinney Sun</h3>
                  <p className="font-body-md text-body-md text-secondary">₹340</p>
                </div>
              </div>
              <div className="min-w-[280px] md:min-w-[320px] group/item cursor-pointer">
                <div className="aspect-[4/5] bg-surface-container-low mb-6 relative overflow-hidden transition-colors duration-500 group-hover/item:bg-surface-container flex items-center justify-center p-8">
                  <img alt="High-end editorial product shot of classic aviator sunglasses featuring gold frames and green lenses, laid flat on a pristine soft cream surface. Warm, subtle lighting enhances the metallic luster, embodying a timeless, heritage-rich old-money luxury feel." className="w-full h-auto object-contain transform group-hover/item:scale-110 group-hover/item:-translate-y-2 transition-transform duration-500 mix-blend-multiply" data-alt="High-end editorial product shot of classic aviator sunglasses featuring gold frames and green lenses, laid flat on a pristine soft cream surface. Warm, subtle lighting enhances the metallic luster, embodying a timeless, heritage-rich old-money luxury feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmBfA9RQlTn5nduBZzvQ0dm6Rize4sQWozkfRWYkEnTfxKhm65GFlKZNnglWyPbE_4d_O2wSRT15j3s448x_2mGD7CIook3yH-WMo4pLyk6_2wxc608VrmtL0VngDGdyRmRAekyGNq6IKISOjtuyLoBQwqmtQa_Kizr3aTJ6kRQr5puUGCPFhi6WIe0GqHSLV5Q6WRhKj1Ac3_gLgPSmx47jIvChKoVKMOModK2FZW_ww7gaLM0rODRjOEcwliZhR-9-PXn1ObFxI" />
                  <div className="absolute bottom-4 left-0 w-full flex justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <button className="px-6 py-2 bg-primary text-on-primary font-label-caps text-label-caps rounded uppercase shadow-sm">Quick Add</button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Ray-Ban</p>
                  <h3 className="font-headline-md text-[18px] text-primary mb-2">Classic Aviator</h3>
                  <p className="font-body-md text-body-md text-secondary">₹160</p>
                </div>
              </div>
              <div className="min-w-[280px] md:min-w-[320px] group/item cursor-pointer">
                <div className="aspect-[4/5] bg-surface-container-low mb-6 relative overflow-hidden transition-colors duration-500 group-hover/item:bg-surface-container flex items-center justify-center p-8">
                  <img alt="Pristine still-life photograph of chunky, bold acetate sunglasses in a rich espresso brown, positioned precisely on a warm, light beige podium. The lighting is meticulous, creating gentle tonal shifts that highlight the sculpted frames without utilizing heavy, aggressive shadows." className="w-full h-auto object-contain transform group-hover/item:scale-110 group-hover/item:-translate-y-2 transition-transform duration-500 mix-blend-multiply" data-alt="Pristine still-life photograph of chunky, bold acetate sunglasses in a rich espresso brown, positioned precisely on a warm, light beige podium. The lighting is meticulous, creating gentle tonal shifts that highlight the sculpted frames without utilizing heavy, aggressive shadows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtY6qHLEDOO_18Y4SkAuQFPmhhQzq5m1kKMyfke7pR3q0b9boKnGL-iLfHR6gsHpJyYJyz33DOrP_cc32ICrvKhEInAhIb4Ym433k1SoCJuxl6os-1pSIHxODkaqN5U3YAWj6AblqVReR3yEA2j3CoZu8YNQE8HfnvmWpJ9Ld5SSsakc9_68l1Sg2-Y7y5R4VnRGtXOb3xgUCWZAuER1VoIE38F3Nz9PW5zzuDnxlSIgTF1g4BW0EviXMml0cVMpwV33cOCdw6emo" />
                  <div className="absolute bottom-4 left-0 w-full flex justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <button className="px-6 py-2 bg-primary text-on-primary font-label-caps text-label-caps rounded uppercase shadow-sm">Quick Add</button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest">Tom Ford</p>
                  <h3 className="font-headline-md text-[18px] text-primary mb-2">Snowdon</h3>
                  <p className="font-body-md text-body-md text-secondary">₹420</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-secondary-container py-section-gap px-margin-mobile md:px-margin-desktop fade-in-section">
          <div className="max-w-4xl mx-auto text-center">
            <span className="material-symbols-outlined text-primary text-4xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
            <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-tight mb-8">
              With EasyEyes, you don't just see the world better—you see it in style, backed by a brand built on trust and timeless vision.
            </h2>
            <div className="w-16 h-px bg-primary mx-auto mb-8"></div>
            <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest">Our Heritage</p>
          </div>
        </section>
        <section id="about-us" className="py-section-gap px-margin-mobile md:px-margin-desktop fade-in-section border-t border-outline-variant/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Follow Our Journey</h2>
                <p className="font-body-md text-on-surface-variant">@easyeyes_official</p>
              </div>
              <div className="flex space-x-6 mt-6 md:mt-0">
                <Link className="font-label-caps text-label-caps text-primary uppercase tracking-widest hover:text-secondary transition-colors" to="/">Instagram</Link>
                <Link className="font-label-caps text-label-caps text-primary uppercase tracking-widest hover:text-secondary transition-colors" to="/">Linkedin</Link>
                <Link className="font-label-caps text-label-caps text-primary uppercase tracking-widest hover:text-secondary transition-colors" to="/">Twitter</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square bg-surface-container-low overflow-hidden group">
                <img alt="Aesthetic eyewear photography" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXZSbBxgS0q_DXhvUREyJsWW_bZAw6WkcAWvLsxochijK770YMDmnX8HtNSjk_OnBDUO3x6UuzrDhEWSIFj_eDE2hvyMcHcTabj7Eh784OKFOZwqIJisGN64A1cG6zjaoSXvtE-FEFLwpZiMB4BCNNtwB_K4r2NJUzXeHiW8KMhGE3BHHVtqlZ6S_yZBKGzY_tHMFZGkEjwkM17wM7RSIBdmDGXBEveJXBSvROubWe2pEdIpnDSBH2ofZFVW1jVrXzXDHrUqiAe5Y" />
              </div>
              <div className="aspect-square bg-surface-container-low overflow-hidden group">
                <img alt="Aesthetic eyewear photography" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-azWAk3A9G9UGH6ZHTV-TImqXZjWsKyNkgKF_AJOr-BhXSFCN_ZXzUxFOuFzfH4hE9f5xM73B7uFf-7w2MhQBoZw2sp3B0cStOAsdIxMEm2Q3kxzNKsn8MTiD8lF0RHMPykVhRLcXDbOi-4FwgVtXOZ_FfdsdL4dkQ45XmQCfxvkjM1O31dzF6UeHeASzNVn7Y7RAVfbOPG-vUt1niavrVehaON1vWwAZEiaG21QNJeJaz0gKM5zthftaxGeDVbrhklw0-YNrti8" />
              </div>
              <div className="aspect-square bg-surface-container-low overflow-hidden group">
                <img alt="Aesthetic eyewear photography" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmmOcfKjz4Ov2fvBMLE_gWqd_vWl9ZG5kcbyxuQSDf1BhD86RkKcn8e8fFFWx4dwYFm3f0NQmPYaNDetYFDc63JrWFXFcFtCKYqx6m0VHTZc6C-P60m_gC-p9jGAgK9gsxe8b1K8W0IjxfaCFkr6MCfvFP5LhnzYbLBBlL9aYAMVfEhm7MJVwmze6JQPjPTCwzqwEcLwCYBZosF5aGOFC2oT1n5xaRUIdusgOx6oHCukcRNwoJPgzJqyL0gRww9V9TcrrLeevFt_8" />
              </div>
              <div className="aspect-square bg-surface-container-low overflow-hidden group">
                <img alt="Aesthetic eyewear photography" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKyhPaNcLvyLrgSzD0xnyN81ZugcU1ll_C_HgTVRscA882labig3NMnC5X3f7bq1GhvIRFLW4S7TAwPVLAkyWcGJihwOYpGVjuFOl8iiqdhtVS9jyKmKsPM7NnGQisYAuh8g4RjjCLFzl0jwwK2elMAx1bCPQ8x4IkLhQcprVghmw1hIVDboYt6sBRYqlC1HCyiV8yfUrEUt-wqgcY2k4etk00bZep3ltLctX1nvXcsGsXPfuvfrlzodQ8yQUGlXDTxVTc9pbVBw8" />
              </div>
            </div>
          </div>
        </section>
      </main>



    </>
  );
}

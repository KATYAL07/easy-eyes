import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTransition } from '../context/TransitionContext';

export default function LoadingOverlay() {
  const { isTransitioning, progress } = useTransition();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[9999] bg-primary-container flex flex-col items-center justify-center overflow-hidden"
        >
          <main className="relative z-10 flex flex-col items-center justify-center w-full max-w-md px-margin-mobile md:px-margin-desktop">
            {/* Animated Spectacles Icon Container */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="mb-12 animate-float"
            >
              <img 
                alt="EASY EYES Spectacles Icon" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_4px_12px_rgba(230,207,169,0.1)]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa_4-33zRrDWde-4l89HMRm7U0WRvJFAhfY2opgoCGh4ZFA8iKU11CbJ6lVwl8hPwNghSgW7bcvgAq0D-X_vFsKoaDqv_XqQ1HSj3flN9OcvxhAfuBC9EKLA1tsbfyKij2gzn4XJPGgj3V3I383x_SujuMEARUwxuCedBofWUqJIzOM_6kNd5X0NSs7rpfqhCDoCZkHmmIb7A6sEqmWszhS5WjzbwelcJl7eIbHwcful0jQhBFp2EW15U7ICqEVQpX5SW76Sm-kv4" 
                style={{
                  filter: 'brightness(0) saturate(100%) invert(88%) sepia(19%) saturate(583%) hue-rotate(345deg) brightness(97%) contrast(90%)'
                }}
              />
            </motion.div>

            {/* Elegant Loading Bar */}
            <div className="w-full max-w-[200px] h-[1px] bg-primary/20 relative overflow-hidden rounded-full">
              <div 
                className="absolute top-0 left-0 h-full bg-[#E6CFA9] transition-all duration-75 ease-out" 
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Subtle text for accessibility / added brand feel */}
            <motion.p 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-label-caps text-label-caps text-[#E6CFA9] mt-8 tracking-[0.2em] uppercase"
            >
              Curating
            </motion.p>
          </main>

          {/* Lightweight Atmospheric Effect (Grain) */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.02]" 
            style={{ 
              backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" 
            }} 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

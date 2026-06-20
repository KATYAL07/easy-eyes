import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const TransitionContext = createContext();

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetPath, setTargetPath] = useState(null);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const navigateWithTransition = (to) => {
    // Prevent double transitions or transitions to empty/hash targets
    if (isTransitioning || !to || to.startsWith('#')) return;

    // Normalize target path (if transitioning to current path, we can still show it or transition normally)
    setTargetPath(to);
    setIsTransitioning(true);
    setProgress(0);
  };

  useEffect(() => {
    if (!isTransitioning || !targetPath) return;

    let start = null;
    const duration = 1500; // 1.5 seconds loading sequence matching Stitch design
    let animationFrameId;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const nextProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(nextProgress);

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Complete the progress, route to target page, and fade out transition overlay
        setTimeout(() => {
          navigate(targetPath);
          // Small delay before turning off transition to allow the new page to mount nicely
          setTimeout(() => {
            setIsTransitioning(false);
            setProgress(0);
            setTargetPath(null);
          }, 300);
        }, 100);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isTransitioning, targetPath, navigate]);

  return (
    <TransitionContext.Provider value={{ isTransitioning, progress, navigateWithTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};

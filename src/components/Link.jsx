import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTransition } from '../context/TransitionContext';

export default function Link({ to, onClick, children, ...props }) {
  const { navigateWithTransition } = useTransition();

  const handleClick = (e) => {
    const isExternal = typeof to === 'string' && (to.startsWith('http') || to.startsWith('//'));
    const isAnchor = typeof to === 'string' && to.includes('#');

    // Bypass transition if external, anchor link, or keyboard modifier is pressed
    if (isExternal || isAnchor || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      if (onClick) onClick(e);
      return;
    }

    e.preventDefault();
    if (onClick) onClick(e);
    navigateWithTransition(to);
  };

  return (
    <RouterLink to={to} onClick={handleClick} {...props}>
      {children}
    </RouterLink>
  );
}

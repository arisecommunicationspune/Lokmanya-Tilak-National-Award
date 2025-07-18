// src/components/ScrollToTop.js

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { sharedLenis } from '../hooks/useLenis'; // If using Lenis

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const lenis = sharedLenis;

    // Use Lenis to scroll smoothly to top
    if (lenis) {
      lenis.scrollTo(0, { immediate: true }); // or { offset: 0, duration: 1 }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname]); // Only when path changes

  return null;
};

export default ScrollToTop;

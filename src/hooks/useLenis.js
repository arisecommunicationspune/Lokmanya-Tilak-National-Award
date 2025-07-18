// src/hooks/useLenis.js
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

let sharedLenis = null; // 🎯 shared instance across app

const useLenis = () => {
  const lenisRef = useRef();

  useEffect(() => {
    if (!sharedLenis) {
      sharedLenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      });

      function raf(time) {
        sharedLenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    lenisRef.current = sharedLenis;

    return () => {
      // Optional: only destroy if you want scroll to fully stop after unmounting all
      // sharedLenis?.destroy();
    };
  }, []);

  return lenisRef.current;
};

export default useLenis;
export { sharedLenis }; // 🔁 export to be used in GSAP setup

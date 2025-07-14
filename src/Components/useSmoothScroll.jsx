import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Optional: on scroll callback
    lenis.on('scroll', (e) => {
      // console.log(e)
    })

    return () => {
      lenis.destroy()
    }
  }, [])
}

const lenis = new Lenis();
// On route change:
lenis.scrollTo(0);

export default useSmoothScroll

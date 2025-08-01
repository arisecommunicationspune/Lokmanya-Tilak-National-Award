import React, { useRef, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom'; // ✅ get id from route
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextData } from '../../constant/TextData';

gsap.registerPlugin(ScrollTrigger);

const GallerySection = () => {
  const { id } = useParams(); // ✅ gets id from /gallery/:id
  const PageID = parseInt(id, 10);

  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  const currentData = TextData.find(item => item.id === PageID);
  const sliderData = currentData ? currentData.image.map(img => ({ image: img })) : [];

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const container = containerRef.current;
    const slider = sliderRef.current;

    if (!container || !slider) return;

    const scrollWidth = slider.scrollWidth - window.innerWidth;

    gsap.set(slider, { x: 0 });

    gsap.to(slider, {
      x: -scrollWidth,
      ease: 'none',
      force3D: true,
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: `+=${scrollWidth}`,
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
        id: 'galleryScroll',
      },
    });

    ScrollTrigger.refresh(); // ✅ now called after setup
  }, containerRef);

  return () => ctx.revert();
}, []);


  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-body"
      style={{ margin: 0, padding: 0 }}
    >
      <div
        ref={sliderRef}
        className="flex h-full w-max"
        style={{ marginTop: '20px' }}
      >
        {sliderData.map((item, index) => (
          <div
            key={index}
            className="panel w-screen h-full flex-shrink-0 flex items-center justify-center p-4"
          >
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="h-50 object-cover shadow-lg"
            />
          </div>
        ))}
        <div style={{ width: '100px' }}></div>
      </div>
    </section>
  );
};

export default GallerySection;

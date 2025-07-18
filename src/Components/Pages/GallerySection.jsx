import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import slide1 from '../../assets/images/nominee/Indira_Gandhi.jpg';
import slide2 from '../../assets/images/nominee/pranab-mukherjee1.jpg';
import slide3 from '../../assets/images/nominee/NarendraModi.webp';
import slide4 from '../../assets/images/nominee/Sudha-murthy.jpg';
import slide5 from '../../assets/images/nominee/Narayana-Murthy.jpg';
import slide6 from '../../assets/images/nominee/atal-bihari.webp';
import slide7 from '../../assets/images/nominee/Sudha-murthy.jpg';

gsap.registerPlugin(ScrollTrigger);

const sliderData = [
  { image: slide1 },
  { image: slide2 },
  { image: slide3 },
  { image: slide4 },
  { image: slide5 },
  { image: slide6 },
  { image: slide7 },
];

const GallerySection = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    const container = containerRef.current;
    const slider = sliderRef.current;

    const scrollWidth = slider.scrollWidth - window.innerWidth;

    gsap.set(slider, { x: 0 }); // reset transform

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
          
        ))} <div style={{ width: '100px' }}></div>
      </div>
     

    </section>
  );
};

export default GallerySection;

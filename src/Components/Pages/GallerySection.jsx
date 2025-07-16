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
    const sections = gsap.utils.toArray('.panel');
    const totalPanels = sections.length;

    gsap.to(sliderRef.current, {
      x: () => `-${(totalPanels - 1) * window.innerWidth}`,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${window.innerWidth * totalPanels}`,
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Horizontal Scroll Section */}
      <section ref={containerRef} className="w-full h-screen overflow-hidden bg-gray-100 bg-white">
        <div ref={sliderRef} className="flex w-max h-full mt-[70px]">
          {sliderData.map((item, index) => (
            <div
              key={index}
              className="panel w-screen h-full flex-shrink-0 flex items-center justify-center p-4 "
            >
              <img
                src={item.image}
                alt={`Slide ${index + 1}`}
                className="h-full object-cover shadow-lg"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default GallerySection;

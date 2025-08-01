import React, { useState, useEffect, useRef } from 'react';
import { TextData } from '../../constant/TextData';
import { useParams } from 'react-router-dom';

function DetailPage2() {
  const { id } = useParams();
  const item = TextData.find((item) => item.id === parseInt(id));

  const [expandedSections, setExpandedSections] = useState({});
  const [overflowStates, setOverflowStates] = useState({});

  const paraRefs = useRef({}); // for each paragraph

  useEffect(() => {
    const newOverflowStates = {};
    Object.entries(paraRefs.current).forEach(([index, el]) => {
      if (el) {
        const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
        const maxHeight = 10 * lineHeight;
        newOverflowStates[index] = el.scrollHeight > maxHeight;
      }
    });
    setOverflowStates(newOverflowStates);
  }, [item]);

  const toggleExpand = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (!item) {
    return (
      <div className="text-center mt-24 text-red-500 text-xl">
        Item not found. Please go back and try again.
      </div>
    );
  }

  return (
    <div className="container-fluid bg-white mx-auto px-4 py-10">
      <div className="container text-center mt-24 mb-5">
        <h2 className="mb-8 m-heading text-3xl sm:text-4xl font-bold text-gray-800">
          Timeline
        </h2>
        <hr className="border-t-2 border-gray-300 line mb-10" />
      </div>

      {item.sections?.map((section, index) => {
        const isEven = index % 2 === 0;
        const isExpanded = expandedSections[index];
        const isOverflowing = overflowStates[index];

        return (
          <div key={index} className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row -mx-4 mb-10">
              {isEven ? (
                <>
                  {/* Text Left */}
                  <div className="w-full flex-col lg:w-1/2 px-4 mb-auto align-middle m-auto flex">
                    <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-gray-800">
                      {section.subheading}
                    </h2>
                    <p
                      ref={(el) => (paraRefs.current[index] = el)}
                      className={`text-base sm:text-lg text-gray-700 leading-relaxed ${
                        isExpanded ? '' : 'truncate-10-lines'
                      }`}
                    >
                      {section.para}
                    </p>
                    {isOverflowing && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="mt-2 text-secondary font-medium wei hover:underline"
                      >
                        {isExpanded ? 'Read less' : 'Read more'}
                      </button>
                    )}
                  </div>

                  {/* Image Right */}
                  <div className="w-full lg:w-1/2 px-4 align-middle m-auto">
                    <img
                      src={section.image}
                      alt={section.altText}
                      className="w-full h-auto rounded shadow-md"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Image Left */}
                  <div className="w-full lg:w-1/2 px-4 align-middle m-auto">
                    <img
                      src={section.image}
                      alt={section.altText}
                      className="w-full h-auto rounded shadow-md"
                    />
                  </div>

                  {/* Text Right */}
                  <div className="w-full flex-col lg:w-1/2 px-4 mb-auto align-middle m-auto flex">
                    <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-gray-800">
                      {section.subheading}
                    </h2>
                    <p
                      ref={(el) => (paraRefs.current[index] = el)}
                      className={`text-base sm:text-lg text-red-700 leading-relaxed ${
                        isExpanded ? '' : 'truncate-10-lines'
                      }`}
                    >
                      {section.para}
                    </p>
                    {isOverflowing && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="mt-2 text-secondary font-medium hover:underline"
                      >
                        {isExpanded ? 'Read less' : 'Read more'}
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DetailPage2;

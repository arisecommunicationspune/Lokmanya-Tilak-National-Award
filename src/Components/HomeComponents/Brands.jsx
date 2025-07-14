/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Brands.css";
import { b1, b2, b3, b4, b5 } from "../../constant/images";

const Brands = () => {
  const brandImages = [b1, b2, b3, b4, b5];

  return (
    <div className="brands-area overflow-hidden py-4 ">
      <div className="brand-marquee">
        <div className="brand-track">
          {brandImages.map((item, index) => (
            <div className="brand-logo" key={index}>
              <img src={item} alt={`brand-${index}`} />
            </div>
          ))}
          {brandImages.map((item, index) => (
            <div className="brand-logo" key={`clone-${index}`}>
              <img src={item} alt={`brand-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;

import React from "react";
import "./Banner.css";
import nom42 from "../../assets/images/nominee/Sudha-murthy.jpg";
import nom41 from "../../assets/images/nominee/PM.webp";
import nom40 from "../../assets/images/nominee/Tessy_Thomas.jpg";
import nom39 from "../../assets/images//nominee/Dr. Cyrus S. Poonawalla.jpg";
import nom38 from "../../assets/images/nominee/sonam-wanghchuk-1.png";
import nom37 from "../../assets/images/nominee/Baba_Kalyani.jpg";
import nom36 from "../../assets/images/nominee/K-Shivan.jpg";

import nom34 from "../../assets/images/nominee/sharad-pawar.jpg";

import nom32 from "../../assets/images/nominee/Avinash-Chandekar.jpg";
import nom31 from "../../assets/images/nominee/sreedharan.jpeg";

import nom28 from "../../assets/images/nominee/sheila1.jpg";
import nom27 from "../../assets/images/nominee/Pranab-Mukherji.jpg";
import nom26 from "../../assets/images/nominee/Montekahuwalia.jpg";
import nom25 from "../../assets/images/nominee/Sivathanu-Pillai1.jpg";

import nom23 from "../../assets/images/nominee/Satyarayan.jpg";
import nom22 from "../../assets/images/nominee/nrn.jpg";
import nom21 from "../../assets/images/nominee/ramoji-rao.jpg";
import nom20 from "../../assets/images/nominee/Dr. Verghese Kurian.jpg";
import nom19 from "../../assets/images/nominee/Prof. M.S. Swaminathan1.jpg";
import nom18 from "../../assets/images/nominee/Rahul-Bajaj.jpg";

const Banner = () => {
  const images = [
    nom42,
    nom41,
    nom40,
    nom39,
    nom38,
    nom37,
    nom36,
    nom34,
    nom32,
    nom31,
    nom28,
    nom27,
    nom26,
    nom25,
    nom23,
    nom22,
    nom21,
    nom20,
    nom19,
    nom18,
  
  ];

  // Split images into 3 columns of 5 images each
  const columns = [[], [], []];
  images.forEach((img, i) => {
    columns[i % 3].push(img);
  });

  return (
    <section className="banner-section">
      <div className="banner-container">
        <div className="banner-left">
          <h1 className="banner-title">
            <span style={{ fontSize: "5rem", lineHeight: "2rem" }}>
              MEET
            </span>{" "}
            <br /> Your <br /> Legends
          </h1>
        </div>

        <div className="banner-right">
          {columns.map((colImages, colIndex) => {
            const animationClass =
              colIndex % 2 === 0 ? "scroll-up" : "scroll-down";
            return (
              <div className="image-column" key={colIndex}>
                <div className={`scroll-wrapper ${animationClass}`}>
                  {colImages
                    .concat(colImages)
                    .map((img, index) =>
                      <img
                        key={index}
                        src={img}
                        alt={`Nominee ${index}`}
                        className="scroll-image"
                      />
                    )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Banner;

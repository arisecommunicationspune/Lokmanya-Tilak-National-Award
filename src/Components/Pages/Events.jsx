import React from "react";
import About from "../HomeComponents/About";
import Footer from "../Footer";
import Header from "../Header";
import Platform from "../Platform";
import PageBanner from "../PageBanner";
import Video from "./Video";
import NewsLetter from "../NewsLetter";
import BreadCrumbs from "./BreadCrumbs";

const Events = () => {
  return (
    <>
      <Header />
      <BreadCrumbs  id="Event"/>
   
   <div className=" section-padding-top pb-16 ">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center min-h-[300px]">
      
          <p className="text-sm uppercase tracking-widest  mb-2">
            1st Aug 2025
          </p>
          <h4 className="text-3xl md:text-xl mb-4 max-w-3xl m-heading">
           Stay tuned for this year’s inspiring celebration of legacy and leadership
          </h4>
          <p className="text-base max-w-2xl ">
          The Lokmanya Tilak National Awards celebrate individuals who exemplify the spirit of Bal Gangadhar Tilak — fearless leadership, social reform, and dedication to the nation.

            Join us as we honor changemakers and thought leaders from across India who continue to inspire, impact, and uplift society.
          </p>
        </div>
      </div>
    </div>
      
      <Video />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Events;

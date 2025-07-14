import React, { useEffect } from "react";
import { breadCrumbItems } from "../../constant/dummyData";
import { useParams } from "react-router-dom";
import bgImage from "../../assets/images/banner/bgImage.png"; // Ensure this path is correct

const BreadCrumbs = ({ id: propId }) => {
  const routeParams = useParams();
  const id = propId || routeParams.id;

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  const selectedItem = breadCrumbItems.find(item => item.id === id);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image (Fixed/Parallax effect) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 m-section h-full flex flex-col justify-center items-center text-center">
        <h1 className="top-heading text-3xl font-bold text-[#964B38] drop-shadow-lg">
          {selectedItem?.label || "Not Found"}
        </h1>

       {/* <div className="pt-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 grid-card">
            <div className="banner-card"></div>
            <div className="banner-card"></div>
            <div className="banner-card hidden md:block"></div>
            <div className="banner-card hidden lg:block"></div>
            <div className="banner-card hidden xl:block"></div>
            <div className="banner-card hidden xl:block"></div>
        </div> */}

      </div>
    </div>
  );
};

export default BreadCrumbs;

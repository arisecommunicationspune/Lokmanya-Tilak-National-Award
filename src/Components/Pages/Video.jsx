/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import upcoming from "../../assets/images/upcoming.jpg";


const Video = () => {
  return (
    <div className=" relative video-area  z-[1]">
      <div
        className="bg-cover bg-no-repeat bg-center absolute left-0 bottom-0 h-[60%]
        w-full z-[-1]"
      ></div>
      <div className="container ">
        <div className="video-wrapper xl:mb-[205px] lg:mb-[150px] mb-20">
          <div className="xl:h-[652px] lg:h-[500px] h-[400px] max-w-[1112px]  mx-auto p-6 bg-white shadow-box8 rounded-lg relative ">
            <img
              src={upcoming}
              alt=""
              className=" object-cover w-full h-full  block"
            />
            <div
              className="h-[80px] w-[80px] mx-auto absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center
                        items-center"
            >
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full ring-white ring-2"></div>
              <a
                href="#"
                className="bg-white w-20 h-20 flex flex-col justify-center items-center rounded-full text-3xl text-primary  "
              >
                <iconify-icon icon="bi:play-fill"></iconify-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Video;

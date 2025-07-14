/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { topicsData } from "../constant/dummyData";

const Topics = () => {
  return (
    <div className=" section-padding">
      <div className="container-xxl">
        <div className="text-center">
          <div className="mini-title">Start Learning From Today</div>
          <div className="column-title ">
            Popular <span className="shape-bg">Topics</span> To Learn
          </div>
        </div>
        <div className="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4  grid-cols-2 gap-[30px] pt-10">
          {topicsData.map((item, index) => (
            <a
              className="rounded-[8px] transition duration-100 group text-center px-6
            py-[65px] "
              href="#"
              key={index}
            >
              <div className="w-[72px] h-[72px] rounded-full bg-white relative mx-auto flex flex-col justify-center items-center mb-8 group bg-[#FFE8E8]">
                <img
                  src={item.logo}
                  alt=""
                  className=" object-cover rounded-full w-[150px] h-[150px]"
                />
              </div>
              <div className="course-content">
                <p className=" text-md  mb-2">{item.title}</p>
               
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;

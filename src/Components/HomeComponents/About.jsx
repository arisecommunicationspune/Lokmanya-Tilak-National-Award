import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-area section-padding-top pb-16 bg-gradient-to-r from-[#fca311] to-[#9e2a2b] ">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center min-h-[300px]">
      
          <p className="text-sm uppercase tracking-widest  mb-2">
            </p>
          <h4 className="text-3xl md:text-4xl mb-4 max-w-3xl marathi-heading">
           "स्वराज्य हा माझा जन्मसिद्ध हक्क आहे आणि तो मी मिळवणारच !"
          </h4>
          <p className="text-base max-w-75">
           Lokmanya Tilak’s unwavering spirit ignited India’s freedom movement. This award is a tribute to those who continue his legacy of fearless leadership, national pride, and social reform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

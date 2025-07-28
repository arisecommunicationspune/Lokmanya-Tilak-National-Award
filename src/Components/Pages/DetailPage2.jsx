import React from 'react';
import { TextData } from '../../constant/TextData';
import { useParams } from 'react-router-dom';




 function DetailPage2() {
   const { id } = useParams();
   const item = TextData.find((item) => item.id === parseInt(id));
 
   if (!item) {
     return (
       <div className="text-center mt-24 text-red-500 text-xl">
         Item not found. Please go back and try again.
       </div>
     );
   }


  return (
    <>
      <div className="container-fluid bg-white mx-auto px-4 py-10">
      <div className="container mx-auto  px-4 ">
      <div className="text-center mt-24 mb-5">
        <h2 className="mb-8 m-heading text-3xl sm:text-4xl font-bold text-gray-800">
          {item.subheading1}
        </h2>
      </div>
      <hr className="border-t-2 border-gray-300 line  mb-10" />
      <div className="flex flex-col lg:flex-row -mx-4 mb-10">
        
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          {/* <h3 className="text-xl  sm:text-2xl font-bold text-gray-600 mb-4">
            TAILORED EXPERTS MENTORING
          </h3> */}
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {item.para1}
          </p>
        </div>

        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <img
            src={item.image}
            alt={item.altText}
            className="w-full  h-auto rounded shadow-md"
          />
        </div>
      </div>
    </div>
    </div>

       <div className="container-fluid mx-auto px-4 py-10">
      <div className="container mx-auto  px-4 ">
      <div className="text-center mt-24 mb-5">
        <h2 className="mb-8 m-heading text-3xl sm:text-4xl font-bold text-gray-800">
          {item.subheading2}
        </h2>
      </div>
      <hr className="border-t-2 border-gray-300 line  mb-10" />
      <div className="flex flex-col lg:flex-row -mx-4 mb-10">
        
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          {/* <h3 className="text-xl  sm:text-2xl font-bold text-gray-600 mb-4">
            TAILORED EXPERTS MENTORING
          </h3> */}
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {item.para2}
          </p>
        </div>

        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <img
            src={item.image}
            alt={item.altText}
            className="w-full  h-auto rounded shadow-md"
          />
        </div>
      </div>
    </div>
    </div>
    
    
    </>
  );
}

export default DetailPage2;

import React from 'react';
import { useParams } from 'react-router-dom';
import { TextData } from '../../constant/TextData';
import Header from '../Header';
import Footer from '../Footer';
import NewsLetter from '../NewsLetter';
import GallerySection from './GallerySection';
import DetailPage2 from './DetailPage2';


function DetailPage() {
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
    <Header />
     
     {/* <PageBanner title={"Awardees"} pageTitle="Awardees Details"  /> */}
     {/* <BreadCrumbs /> */}
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mt-24 mb-5">
        <h1 className="mb-8 m-heading text-3xl sm:text-4xl font-bold text-gray-800">
          {item.head}
        </h1>
      </div>
      <hr className="border-t-2 border-gray-300 line  mb-10" />
      <div className="flex flex-col lg:flex-row -mx-4 mb-10">
        
        <div className="w-full lg:w-6/12 px-4 mb-8 lg:mb-0">
          <h3 className="text-xl  sm:text-2xl font-bold text-gray-600 mb-4">
            TAILORED EXPERTS MENTORING
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* <div className="flex flex-col lg:flex-row -mx-4">
        <div className="w-full lg:w-6/12 px-4 mb-8 lg:mb-0">
          <img
            src={item.image}
            alt={item.altText}
            className="w-full -mt-100 h-auto rounded shadow-md"
          />
        </div>
        <div className="w-full lg:w-6/12 px-4" />
      </div> */}

      <div className="flex flex-col lg:flex-row -mx-4 mt-10">
       
        <div className="w-full  lg:w-6/12 px-4 mb-8 lg:mb-0">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-600 mb-4">
            TAILORED EXPERTS MENTORING
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {item.description2}
          </p>
        </div>
      </div>
    </div>
    <section id="gallery-section">
    <GallerySection />
  </section> 
    <DetailPage2 />
     
    <NewsLetter />
    <Footer />
    </>
  );
}

export default DetailPage;
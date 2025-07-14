import React from 'react';
import nom42 from '../../assets/images/nominee/Dr. Tessy Thomas.jpeg';
import LTsign from '../../assets/images/LTsign.png';
import About from '../../assets/images/banner/Lokmanya.png';

const AboutDetail = () => {
  return (
    <>
   
    <div className="container mx-auto px-4 py-10">
      

      <div className="flex flex-col lg:flex-row -mx-4 mb-10">
        <div className="w-full lg:w-50 px-4">
          <img
            src={About}
            alt="Mentor"
            className="w-full  h-auto "
          />
        </div>
        <div className="hidden lg:block lg:w-5 ">
        </div>
        <div className="w-full m-auto lg:w-40 px-4 mb-8 lg:mb-0">
          <h1 className=" md-heading font-bold justify-center text-gray-600 mb-4">
            "Voice of Freedom. Father of National Awakening."
          </h1>
          <p className="text-base pt-5 sm:text-lg text-gray-700 leading-relaxed">
           The Lokmanya Tilak National Award is a prestigious civilian honor established in 1983 by the Tilak Smarak Mandir Trust in Pune, Maharashtra. It commemorates the enduring legacy of Lokmanya Bal Gangadhar Tilak — a fearless freedom fighter, visionary scholar, and nationalist icon, best known for his powerful call to action: “Swaraj is my birthright, and I shall have it.”
          </p>
          <p className="text-base sm:text-lg pt-5 text-gray-700 leading-relaxed">
          Conferred every year on August 1st, the death anniversary of Lokmanya Tilak, the award ceremony not only honors contemporary changemakers but also serves as a reminder of Tilak’s monumental role in India’s freedom movement and intellectual awakening.
          </p>
          <img
            src={LTsign}
            alt="Mentor"
            className="mt-10 pb-10 h-auto "
            style={{ width: '250px' }}
          />
        </div>
      </div>

     

     
    </div>
    
    </>
  );
}

export default AboutDetail;

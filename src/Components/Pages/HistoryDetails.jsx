import React from "react";
import History from "../../assets/images/banner/Lokmany_Tilak_.jpg"

const HistoryDetails = () => {
  return (
    <div className="container-xxl mx-auto px-4 py-10">
      <div className="w-full text-left ">
        <h1 className=" mb-8 m-heading">
          {" "}<span></span>  
          <span>  </span>
          <br />
         Establishment and Purpose of the Lokmanya Tilak National Award
        </h1>
      </div>

      <hr className="border-t-2 border-gray-300 line  mb-10" />

      <div className="flex flex-col lg:flex-row item-stretch -mx-4">
        <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
          <h3 className="text-xl uppercase font-bold xl-pl-120 text-gray-600 mb-2">
            Lokmanya Tilak – Purpose & Legacy
          </h3>
          <p className="para-text  xl-pl-120">
           After the establishment of the grand Tilak Smarak Mandir in honour of the great patriot Lokmanya Bal Gangadhar Tilak, his grandson, the distinguished Chairman of the Maharashtra Legislative Council, Shri Jayantrao Tilak, envisioned an annual national award to further immortalise the ideals and legacy of his grandfather. His vision was to recognise individuals who have served the nation selflessly, particularly in the social and political spheres, placing national service above personal comfort or gain. It was decided that the “Lokmanya Tilak National Award” would be conferred every year on 1st August, marking the death anniversary of Lokmanya Tilak. The award was formally instituted on 1st August 1983.
           In the inaugural award ceremony, Shri Jayantrao Tilak explained the foundation and purpose of the award. The Trust had published seven comprehensive volumes of Lokmanya Tilak’s writings. After covering the cost of printing and other expenses, approximately one and a half lakh rupees remained. The interest generated from this fund would be used to present an annual award of ten thousand rupees. 
          </p>
        </div>

        <div className="w-full lg:w-4/12 lg:items-stretch lg:justify-center justify-center  px-4 mb-8 lg:mb-0">
         <img
            src={History}
            alt="History"
            className="pb-10 h-full object-cover max-w-full mx-auto rounded "
          />
        </div>

        <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
          <h3 className="text-xl uppercase xl-pr-120 font-bold text-gray-600 mb-2">
            Honouring the Spirit of National Service
          </h3>
          <p className="para-text  xl-pr-120">
          The intention was to honour individuals demonstrating a persistent commitment to the social and political upliftment of the country, reflecting Lokmanya Tilak’s dedication to the cause of national service. This vision was formally articulated in the award ceremony held on 1st August 1983 and reported in the Daily Kesari dated 2nd August 1983.
          As the award gained prominence over the years, there was a need to widen its scope to align with the evolving values and aspirations of modern India. With its diverse traditions and vibrant democratic fabric, India stands on the pillars of many ideals once championed by Lokmanya Tilak. The foundation of India’s independence movement was shaped not only by the principles of Swadeshi, Boycott, National Education, and Swaraj but also by a constellation of values embodied in Lokmanya Tilak’s life—principles such as Swadharma, Modernity, Morality, Self-Reliance, Sacrifice, Philanthropy, Compassion, Nationalism, Agricultural Reform, Scientific Temperament, and Commitment to the Public Good.
          </p>
        </div>
      </div>

            <hr className="border-t-2 border-gray-300 line  mb-10" />
      <div className="flex  -mx-4">
        <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
          <h3 className="text-xl uppercase font-bold text-gray-600 mb-2">
            Expansion and Legacy of the Lokmanya Tilak National Award
          </h3>
          <p className="para-text">
          Recognising this, Dr. Deepak J. Tilak, great-grandson of Lokmanya Bal Gangadhar Tilak and son of Shri Jayantrao Tilak, expanded the criteria for the award. Under his stewardship, the award began to honour individuals who have contributed significantly to the nation through their work, reflecting the ideals and vision of Lokmanya Tilak. The trust honours individuals who have helped to create a space for India on the global map through their contribution in the fields of social service, education, literature, science, ethics, technology, research and development/ scientific development, and national development. In honouring such individuals, the award celebrates not just past achievements but also the ongoing journey of nation-building inspired by Lokmanya Tilak’s legacy. <br />

          The Lokmanya Tilak National Award today stands as a prestigious recognition of exemplary service to the nation, deeply rooted in the noble ideals of one of India’s foremost freedom fighters and visionaries. It continues to inspire generations by acknowledging those who, like Lokmanya Tilak, dedicate their lives to the greater cause of humanity, patriotism, and social transformation.
          </p>
        </div>


       
      </div>

    </div>
  );
};

export default HistoryDetails;

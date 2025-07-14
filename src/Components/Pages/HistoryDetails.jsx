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
          Timeline of Lokmanya Tilak’s Life and Work
        </h1>
      </div>

      <hr className="border-t-2 border-gray-300 line  mb-10" />

      <div className="flex flex-col lg:flex-row item-stretch -mx-4">
        <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
          <h3 className="text-xl uppercase font-bold xl-pl-120 text-gray-600 mb-2">
            Lokmanya Tilak – A Pioneer of Indian Nationalism
          </h3>
          <p className="para-text  xl-pl-120">
            Lokmanya Bal Gangadhar Tilak (1856–1920) was a towering figure in
            India’s freedom struggle — a scholar, journalist, philosopher, and
            one of the first leaders to demand full independence from British
            rule. Born in Ratnagiri, Maharashtra, Tilak was a brilliant student
            and a passionate advocate for education and self-reliance. He
            co-founded the Deccan Education Society and used newspapers like
            Kesari (Marathi) and The Mahratta (English) to awaken political
            consciousness among Indians. Tilak was among the earliest architects
            of Swadeshi and Swaraj, long before they became mass movements. His
            powerful slogan, “Swaraj is my birthright, and I shall have it,”
            became the battle cry for a generation. He believed that freedom was
            not given, but seized through unity, courage, and knowledge. He also
            revived Indian cultural identity by promoting festivals like Ganesh
            Chaturthi and Shiv Jayanti, using them as platforms to unite people
            and spread nationalist thought. Though often labeled as a “radical”
            by the British, Tilak's vision laid the groundwork for future
            leaders like Gandhi and Nehru. He passed away in 1920, but his
            legacy continues to inspire the nation.
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
            Early Life, Education & Social Reform
          </h3>
          <p className="para-text  xl-pr-120">
            Bal Gangadhar Tilak was born on July 23, 1856, in Ratnagiri,
            Maharashtra, into a middle-class Chitpavan Brahmin family. His
            father, Gangadhar Tilak, was a respected Sanskrit scholar and
            schoolteacher who deeply influenced young Tilak’s early learning.
            After his father’s untimely death, Tilak moved to Pune, where he
            pursued his higher education. He graduated with a Bachelor’s degree
            in Mathematics from Deccan College in 1877 and later obtained a Law
            degree from Government Law College, Bombay in 1879. Even as a
            student, Tilak displayed a fierce spirit of nationalism, integrity,
            and resistance to injustice — qualities that would shape his future
            role as a national leader. Deeply dissatisfied with the colonial
            education system, which he believed distanced Indians from their own
            heritage, Tilak became a pioneer of nationalist education. In 1884,
            he co-founded the Deccan Education Society along with Gopal Ganesh
            Agarkar and Vishnu Shastri Chiplunkar, with the vision of empowering
            Indian youth through a blend of modern education and cultural pride.
          </p>
        </div>
      </div>

            <hr className="border-t-2 border-gray-300 line  mb-10" />
      <div className="flex  -mx-4">
        <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
          <h3 className="text-xl uppercase font-bold text-gray-600 mb-2">
            Lokmanya Tilak – A Pioneer of Indian Nationalism
          </h3>
          <p className="para-text">
            Lokmanya Bal Gangadhar Tilak (1856–1920) was a towering figure in
            India’s freedom struggle — a scholar, journalist, philosopher, and
            one of the first leaders to demand full independence from British
            rule. Born in Ratnagiri, Maharashtra, Tilak was a brilliant student
            and a passionate advocate for education and self-reliance. He
            co-founded the Deccan Education Society and used newspapers like
            Kesari (Marathi) and The Mahratta (English) to awaken political
            consciousness among Indians. Tilak was among the earliest architects
            of Swadeshi and Swaraj, long before they became mass movements. His
            powerful slogan, “Swaraj is my birthright, and I shall have it,”
            became the battle cry for a generation. He believed that freedom was
            not given, but seized through unity, courage, and knowledge. He also
            revived Indian cultural identity by promoting festivals like Ganesh
            Chaturthi and Shiv Jayanti, using them as platforms to unite people
            and spread nationalist thought. Though often labeled as a “radical”
            by the British, Tilak's vision laid the groundwork for future
            leaders like Gandhi and Nehru. He passed away in 1920, but his
            legacy continues to inspire the nation.
          </p>
        </div>


       
      </div>

    </div>
  );
};

export default HistoryDetails;

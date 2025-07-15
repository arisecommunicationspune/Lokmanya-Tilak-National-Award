import React from 'react';
import icon1 from "../../assets/images/nominee/Dr. Cyrus S. Poonawalla.jpg";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Footer from '../Footer';
import NewsLetter from '../NewsLetter';

gsap.registerPlugin(ScrollTrigger);

function DetailPage2() {
  const data = [
    {
      id: 1,
      icon: icon1,
      subheading1: "Social Reformist: Sridhar Mahadev Joshi - A Life of Integrity, Struggle, and Social Commitment",
      para1: "Sridhar Mahadev Joshi, widely revered as S.M. Joshi, was a towering figure in Maharashtra’s socio-political background — a dedicated socialist, labour union leader, freedom fighter, and champion of justice. Born on 12th November 1904 in Junnar, Pune, into a humble middle-class family, Joshi faced adversity early in life, having lost his father before completing his primary education. Undeterred, he pursued higher studies and earned his B.A. from Fergusson College, Pune, in 1929, followed by an LL.B. in 1934.",
      subheading2: "Participated in Salt March:",
      para2: "Profoundly influenced by Mahatma Gandhi and inspired by the ideals of the freedom movement, Joshi took a firm stand against the Simon Commission and participated in the Salt March, leading to his arrest and punishment. During this period, he also explored the writings of Karl Marx, which profoundly shaped his ideological orientation towards socialism."
    },
    {
      id: 2,
      subheading1: "Activism and Contributions",
      para1: "S.M. Joshi’s leadership emerged early, organizing the Youth League Conference in 1927 and mobilizing students for social reform. In 1929, he led a satyagraha for Harijan temple entry and later actively participated in the Salt Satyagraha and anti-colonial protests, enduring multiple imprisonments. A co-founder of the Congress Socialist Party, Joshi supported Manabendra Nath Roy and played a vital role in key movements like the 1937 farmers’ march and the Quit India Movement, going underground before his 1943 arrest. He helped establish the National Service Force, presided over the Samajwadi Party of Maharashtra, and remained deeply involved in social service through initiatives like the Sane Guruji Seva Team and the weekly Sadhana. Elected twice to the Bombay Legislative Assembly, Joshi championed land reforms, labour rights, and price control. He was a key figure in the Goa Liberation and Samyukta Maharashtra movements and led significant labour strikes.   Beyond activism, he edited Daily News and Lokmitra, served in the Pune Municipal Corporation, and contributed intellectually through his work Aspects of Socialist Policy (1969). Known for his honesty and dedication, Joshi, alongside his wife Tara Pendse, remained a lifelong advocate for workers’ welfare, founding the Socialist Foundation in 1964 with funds gifted on his sixtieth birthday.",
      subheading2: "Acknowledgement Speech",
      para2: "Upon receiving the Lokmanya Tilak National Award, Joshi reflected with humility and reverence:  “I consider Lokmanya Tilak my greatest guru. Receiving this award in his memory is a moment of profound fulfilment in my life. India is a land of complex challenges. Lokmanya Tilak’s writings reflect his unique insight into each of them. Mobilizing the masses for political freedom, while setting aside immediate social concerns, was the need of his time. Yet, the values he upheld must guide us still. If today’s youth carry forward this legacy, the future of our nation will indeed be bright.   At present, we are faced with a grave situation — a notion is gaining ground that one cannot survive without corruption. But, I have seen and walked alongside many who stand tall with integrity. As I accept this honour today, I recall those fellow warriors of the national movement. This award, in truth, belongs not just to me but to all those who shared in that struggle. It reaffirms that the values we upheld continue to resonate.”"
    },
    {
      id: 3,
      subheading1: "Beyond the Presidency",
      para1: "Following the announcement of my selection for the Lokmanya Tilak Samman Award, I was deeply touched by the outpouring of goodwill — numerous letters of congratulations arrived, and many friends reached out to express their joy over the phone. Yet, one particular message stood out for its simplicity and depth. A close friend wrote to me briefly, saying, At one point, there was talk of your becoming President — but in my view, this recognition is far greater.I could not agree more. His words captured a sentiment that resonated deeply within me.",
      subheading2: "A Bond with Gaikwad Wada",
      para2: "My association with Gaikwad Wada and its affiliated institutions is one of enduring warmth and reverence. As a schoolboy, I first visited Gaikwad Wada to pay homage to the memory of Lokmanya Tilak. It left an indelible mark on my spirit.  All of my formative education — from the New English School to Fergusson College — was steeped in the legacy of that environment. However, during the freedom struggle, following a term of imprisonment, I found myself facing financial difficulties. At that moment, fate led me to Tatyasaheb Kelkar and Shankarrao Agashe, to whom I confided my predicament. I explained to Tatyasaheb that I needed Rs. 18/- per month for meals and Rs. 12/- for other expenses. In response, I was given the opportunity to contribute two columns to The Mharatta, through which I earned the sum I required. That gesture of support and trust continues to inspire me.  "
    }
  ];

  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-section",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1,
        ease: "linear",
      },
    });

    t1.to(".card", {
      paddingTop: 40,
      height: 20,
      stagger: 0.5,
    });
  }, []);

  return (
    <>
      <div className="scroll-container overflow-hidden">
        <div className="card-section min-h-screen px-[100px] py-[50px]" style={{ backgroundColor: "#ffffff", textAlign:"justify"}}>
          {data.map((card) => (
            <div
              key={card.id}
              className="card border-b py-8 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="flex gap-10">
                {/* First card */}
                {card.id === 1 ? (
                  <>
                    <div className="w-full lg:w-1/2">
                      <h4 className="text-xl  sm:text-2xl font-bold text-gray-600 mb-4">{card.subheading1}</h4>
                      <p className="mb-4 para-text  xl-pl-120">{card.para1}</p>
                      <h4 className="text-xl  sm:text-2xl font-bold text-gray-600 mb-4">{card.subheading2}</h4>
                      <p className="para-text  xl-pl-120">{card.para2}</p>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <img
                        src={card.icon}
                        alt="icon"
                        className="w-full h-64 object-cover rounded-md"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* 2nd & 3rd card*/}
                    <div className="w-full lg:w-1/2">
                      <h4 className="text-xl  sm:text-2xl font-bold text-gray-600 mb-4">{card.subheading1}</h4>
                      <p className="mb-4 para-text  xl-pl-120">{card.para1}</p>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <h4 className="text-xl  sm:text-2xl font-bold text-gray-600 mb-4">{card.subheading2}</h4>
                      <p className="para-text  xl-pl-120">{card.para2}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DetailPage2;

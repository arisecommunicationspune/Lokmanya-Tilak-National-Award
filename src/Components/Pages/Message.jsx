import React from 'react';
import rohitTilakImg from '../../assets/images/Jury/rohit_tilak3.webp'; 
import Header from '../Header';
import Footer from '../Footer';
import NewsLetter from '../NewsLetter';
import BreadCrumbs from './BreadCrumbs';

function Message() {
  return (
    <>
    <Header/>
    <BreadCrumbs id="Message"/>
    <div className="message-container">
      <div className="image-section">
        <img src={rohitTilakImg} alt="Dr. Rohit Deepak Tilak" className="profile-img" />
      </div>

      <div className="message-content">
        <p>
        Dr. Rohit Deepak Tilak stands as a proud torchbearer of the fifth generation of the venerable Lokmanya Bal Gangadhar Tilak’s distinguished lineage—a lineage steeped in patriotism, intellect, and constant dedication to the motherland. A dynamic social entrepreneur, an inspiring youth leader, and a committed cultural envoy, Dr. Tilak has devoted himself earnestly to carrying forward the profound legacy of his illustrious forebear. Through the enduring work of the Lokmanya Tilak Smarak Trust and a multitude of public initiatives, he continues to breathe life into the vision of a sovereign, self-reliant, and awakened India—an India Lokmanya Tilak had once so passionately dreamed of.
        </p>

        <p>
          The Lokmanya Tilak National Award, an emblem of national pride, was instituted on 1st August 1983 by my revered grandfather, Shri Jayantrao Tilak, former Chairman of the Maharashtra Legislative Council. Conceived with deep reverence and foresight, the award was established to commemorate and honour those rare individuals whose lives epitomize exceptional service to the nation, resolute moral leadership, and an unyielding spirit of public welfare—qualities that were the very essence of Lokmanya Tilak’s life and legacy. This prestigious recognition is solemnly conferred each year on the death anniversary of Lokmanya Tilak, a sacred date inscribed upon our collective national memory—a moment not of mourning, but of deep reflection upon the ideals that gave birth to our freedom.
        </p>

        <p>
         Lokmanya Tilak’s immortal proclamation— “Swaraj is my birthright, and I shall have it”—was not merely a call to action; it was the clarion voice of a nation rising from the shackles of oppression. Yet, his vision reached far beyond the quest for political sovereignty. He was a stalwart champion of education, ethical righteousness, cultural dignity, self-reliance, and social reform. These were not transient aspirations, but enduring virtues he lived by and ultimately sacrificed for. Whether through fearless journalism, pioneering educational reforms, or the mobilization of society through festivals and movements, his life set an unmatched benchmark for civic duty and national consciousness.
        </p>

        <p>
         Across four transformative decades, the Lokmanya Tilak National Award has been bestowed upon some of the most venerable souls of our time—luminaries in the field of science, governance, literature, education, and social work—each a testimony to the spirit of altruism and patriotism. These individuals have walked the arduous path of nation-building with humility and resolve, forsaking personal comfort in service of a greater cause. Their work represents the very ideals Lokmanya Tilak personified—unyielding commitment, unblemished integrity, and a life devoted to the greater good.
        </p>

        <p>
        Through the conferment of this award, we are reminded that a nation’s true strength does not rest merely in its economic wealth or military prowess, but in the character of its people, the depth of its values, and the clarity of its collective purpose. The Lokmanya Tilak National Award is, thus, not only a symbol of honour—it is a living celebration of the values that continue to bind and uplift our Republic.
        </p>

        <p>
         To the youth of this great nation, I offer a sincere and impassioned message: Let us not confine Lokmanya Tilak’s legacy to textbooks and portraits—let us enshrine it in our actions. Let us live his truth with conviction. In a world increasingly driven by immediacy, let us remember that true progress is carved by patience, discipline, sacrifice, and above all, selfless service. The ideals he upheld are not relics of the past—they are eternal beacons that guide us toward an enlightened future. As heirs to this monumental legacy, it is our solemn responsibility to uphold his vision and contribute to building the India of his dreams.
        </p>

        <p>
        May the Lokmanya Tilak National Award continue to serve as an eternal flame of inspiration for generations tocome. And may the timeless thoughts and values of Lokmanya Tilak forever illuminate the path of unity,justice, and national progress.
        </p>

        <p className="signature">
          With warm regards and patriotic fervour,<br />
          <strong>Dr. Rohit Deepak Tilak</strong><br />
          Trustee, Lokmanya Tilak Smarak Trust<br />
          Secretary, Lokmanya Tilak National Award Committee
        </p>
      </div>
    </div>
    <NewsLetter/>
    <Footer/>
    </>
  );
}

export default Message;

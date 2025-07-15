import React, { useEffect, useState } from 'react';
import disclaimerImg from '../../assets/images/all-img/website-underConstruction.png'; 

const DisclaimerPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleEnter = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="disclaimer-overlay">
      <div className="disclaimer-modal">
        <h4>Disclaimer</h4>
        <img src={disclaimerImg } alt="Disclaimer" className="disclaimer-img" />
       
        <button onClick={handleEnter} className="enter-btn">Enter</button>
      </div>
    </div>
  );
};

export default DisclaimerPopup;

import React from 'react';
import './AboutUsCard.css';

const AboutUsCard = ({ img, title, desc }) => {
  return (
    <div className="aboutUsCardContainer">
      <div className="aboutUsCardImg">
        <img src={img} alt="" />
      </div>
      <div className="aboutUsCardTitle">
        <h2>{title}</h2>
      </div>
      <div className="aboutUsCardDescription">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default AboutUsCard;

import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ image, title, desc }) => {
  return (
    <div className="testimonialCardContainer">
      <div className="testimonialCardImage">
        <img src={image} alt="" />
      </div>
      <div className="testimonialCardTitle">
        <h2>{title}</h2>
      </div>
      <div className="testimonialCardDescription">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

import React from 'react';
import './Card.css';

const Card = ({ img, title, price }) => {
  return (
    <div className="card">
      {/* <img src={img} alt="" />
      <p>{title}</p>
      <p>{price}</p> */}
      <div className="cardImg">
        <img src={img} alt="" />
      </div>
      <div className="cardTitle">
        <h5>{title}</h5>
      </div>
      {/* <div className="cardPrice">
        <span>{price}</span>
      </div> */}
    </div>
  );
};

export default Card;

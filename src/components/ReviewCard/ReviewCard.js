import React from 'react';
import './ReviewCard.css';
import Quote from '../../Assests/images/quote.png';

const ReviewCard = ({ reviewContent, author }) => {
  return (
    <div className="reviewCardContainer">
      <div className="reviewCardQuote">
        <img src={Quote} alt="" />
      </div>
      <div className="reviewCardText">
        <p>{reviewContent}</p>
      </div>
      <div className="reviewCardAuthor">
        <span>{author}</span>
      </div>
    </div>
  );
};

export default ReviewCard;

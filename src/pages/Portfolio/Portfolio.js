import React from 'react';
import Portfolio1 from '../../Assests/images/portfolio1.png';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <div className="portfolioTitle">
        <h2>Products</h2>
      </div>
      <div className="portfolioCardWrapper">
        <div class="portfolioCard">
          <img src={Portfolio1} alt="" />
          <div class="overlay">
            <div className="portfolioCardHover">
              <p>Decorative Table</p>
              <span>Interior</span>
            </div>
          </div>
        </div>

        <div className="portfolioCard">
          <img src={Portfolio1} alt="" />
          <div className="overlay">
            <div className="portfolioCardHover">
              <p>Decorative Table</p>
              <span>Interior</span>
            </div>
          </div>
        </div>
        <div className="portfolioCard">
          <img src={Portfolio1} alt="" />
          <div className="overlay">
            <div className="portfolioCardHover">
              <p>Decorative Table</p>
              <span>Interior</span>
            </div>
          </div>
        </div>
        <div className="portfolioCard">
          <img src={Portfolio1} alt="" />
          <div className="overlay">
            <div className="portfolioCardHover">
              <p>Decorative Table</p>
              <span>Interior</span>
            </div>
          </div>
        </div>
        <div className="portfolioCard">
          <img src={Portfolio1} alt="" />
          <div className="overlay">
            <div className="portfolioCardHover">
              <p>Decorative Table</p>
              <span>Interior</span>
            </div>
          </div>
        </div>
        <div className="portfolioCard">
          <img src={Portfolio1} alt="" />
          <div className="overlay">
            <div className="portfolioCardHover">
              <p>Decorative Table</p>
              <span>Interior</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

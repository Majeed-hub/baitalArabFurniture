import React from 'react';
import Portfolio1 from '../../Assests/images/portfolio1.png';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolioContainer">
      <div className="portfolioTitle">
        <h1>Products</h1>
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
    </section>
  );
};

export default Portfolio;

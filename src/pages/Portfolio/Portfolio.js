import React from 'react';
import Portfolio_1 from '../../Assests/images/portfolio1.png';
import Portfolio_2 from '../../Assests/images/portfolio2.jpg';
import Portfolio_3 from '../../Assests/images/portfolio3.png';
import Portfolio_4 from '../../Assests/images/portfolio4.jpg';
import Portfolio_5 from '../../Assests/images/portfolio5.jpg';
import Portfolio_6 from '../../Assests/images/table1.jpg';
import Portfolio_7 from '../../Assests/images/Modern_Wardrobe1.jpg';
import Portfolio_8 from '../../Assests/images/portfolio6.jpg';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolioContainer">
      <div className="portfolioTitle">
        <h1>Products</h1>
      </div>
      <div className="portfolioCardWrapper">
        <div className="portfolioCard">
          <img src={Portfolio_1} alt="" />
          <div className="overlay">
            <div className="portfolioCardHover">
              <p>Decorative Couch</p>
              <span>Exterior</span>
            </div>
          </div>
        </div>

        <div className="portfolioCard">
          <img src={Portfolio_2} alt="" />
          <div className="overlay">
            <div className="portfolioCardHover">
              <p>Decorative Sofa</p>
              <span>Interior</span>
            </div>
          </div>
        </div>
        <div className="portfolioCard">
          <img src={Portfolio_3} alt="" />
          <div className="overlay">
            <div className="portfolioCardHover">
              <p>Three Seater Sofa</p>
              <span>Interior</span>
            </div>
          </div>
        </div>
        <div className="portfolioCard">
          <img src={Portfolio_4} alt="" />
          <div className="overlay">
            <div className="portfolioCardHover">
              <p>Minimalist Wardrobe</p>
              <span>Interior</span>
            </div>
          </div>
        </div>
        <div className="portfolioCard">
          <img src={Portfolio_5} alt="" />
          <div className="overlay">
            <div className="portfolioCardHover">
              <p>Bed Side Table</p>
              <span>Interior</span>
            </div>
          </div>
        </div>
        <div className="portfolioCard">
          <img src={Portfolio_6} alt="" />
          <div className="overlay">
            <div className="portfolioCardHover">
              <p>Study Table</p>
              <span>Interior</span>
            </div>
          </div>
        </div>
        <div className="portfolioCard">
          <img src={Portfolio_7} alt="" />
          <div className="overlay">
            <div className="portfolioCardHover">
              <p> Wardrobe</p>
              <span>Interior</span>
            </div>
          </div>
        </div>
        <div className="portfolioCard">
          <img src={Portfolio_8} alt="" />
          <div className="overlay">
            <div className="portfolioCardHover">
              <p>Coffee Table</p>
              <span>Interior</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

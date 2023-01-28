import React from 'react';
import './Home.css';
import Banner from '../../Assests/images/DesktopHeroSection.png';
import Banner_2 from "../../Assests/images/LivingRoom.jpg";
import Banner_3 from "../../Assests/images/Modern_Wardrobe.jpg";

// import Banner1 from '../../Assests/images/DesktopHeroSection1.png';
import Sofa1 from '../../Assests/images/sofa1.png';
import Bed1 from '../../Assests/images/bed.png';
import Table1 from '../../Assests/images/table.png';
import Cart from '../../components/Card';

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Banner} className="d-block banner-img" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Premium furniture</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner_2} className="d-block banner-img" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>living room furniture</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner_3} className="d-block banner-img" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>modern wardrobe</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="productContainer">
        <div className="productTitle">
          <h2>Products</h2>
        </div>
        <div className="itemContainer">
          <div className="itemTitle">
            <h3>Sofa</h3>
          </div>

          <div className="itemCardContainer">
            <Cart img={Sofa1} title={'Single Seater'} price={'500 aed'} />
            <Cart img={Sofa1} title={'Single Seater'} price={'500 aed'} />
            <Cart img={Sofa1} title={'Single Seater'} price={'500 aed'} />
          </div>
        </div>
        <div className="itemContainer">
          <div className="itemTitle">
            <h3>Bed</h3>
          </div>

          <div className="itemCardContainer">
            <Cart img={Bed1} title={'Master bed'} price={'500 aed'} />
            <Cart img={Bed1} title={'Master bed'} price={'500 aed'} />
            <Cart img={Bed1} title={'Master bed'} price={'500 aed'} />
          </div>
        </div>
        <div className="itemContainer">
          <div className="itemTitle">
            <h3>Table</h3>
          </div>

          <div className="itemCardContainer">
            <Cart img={Table1} title={'Dinning Table'} price={'500 aed'} />
            <Cart img={Table1} title={'Dinning Table'} price={'500 aed'} />
            <Cart img={Table1} title={'Dinning Table'} price={'500 aed'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

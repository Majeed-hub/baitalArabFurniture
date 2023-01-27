import React from 'react';
import './Home.css';
import Banner from '../../Assests/images/DesktopHeroSection.png';
// import Banner1 from '../../Assests/images/DesktopHeroSection1.png';

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
              <h5>HOUSTON PRIVATE APARTMENT INTERIOR</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner} className="d-block banner-img" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>HOUSTON PRIVATE APARTMENT INTERIOR</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Banner} className="d-block banner-img" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>HOUSTON PRIVATE APARTMENT INTERIOR</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;

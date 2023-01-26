import React from 'react';
import './Home.css';
import Banner from '../../Assests/images/DesktopHeroSection.png';
// import Banner1 from '../../Assests/images/DesktopHeroSection1.png';

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Banner} class="d-block banner-img" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>HOUSTON PRIVATE APARTMENT INTERIOR</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Banner} class="d-block banner-img" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>HOUSTON PRIVATE APARTMENT INTERIOR</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Banner} class="d-block banner-img" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>HOUSTON PRIVATE APARTMENT INTERIOR</h5>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;

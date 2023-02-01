import React from 'react';
import './Home.css';
// import '../AboutUs/AboutUs.css';
import Banner from '../../Assests/images/DesktopHeroSection.png';
import Banner_2 from '../../Assests/images/LivingRoom.jpg';
import Banner_3 from '../../Assests/images/Modern_Wardrobe.jpg';

// import Banner1 from '../../Assests/images/DesktopHeroSection1.png';
import Sofa1 from '../../Assests/images/sofa1.png';
import Bed1 from '../../Assests/images/bed.png';
import Table1 from '../../Assests/images/table.png';
import Cart from '../../components/HomeCard/Card';
import ProductCard from '../../components/ProductCard/ProductCard';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import AboutUsCard from '../../components/AboutUsCard/AboutUsCard';

import Leadership from '../../Assests/images/leadership.png';
import Consultation from '../../Assests/images/consultation.svg';
import Idea from '../../Assests/images/idea.svg';
import MaterialSelection from '../../Assests/images/choice.svg';
import { Link } from 'react-router-dom';
import { Article1, Article2, Article3 } from '../BlogDetail/Data/BlogData';
import BlogCard from '../../components/BlogCard/BlogCard';

const Home = () => {
  return (
    <div>
      <section>
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
      </section>

      <section className="productContainer">
        <div className="itemContainer">
          <div className="productTitle">
            <h1>Products</h1>
          </div>
          <div className="itemCardContainer">
            <ProductCard
              title={'Sofa'}
              content={
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosaanimi explicabo, rem possimus eum vitae minima voluptatibus iusto etea quam quas, cum ut quos officia delectus,Lorem ipsum dolor sit amet,consectetur adipisicing elit. Eaque veniam eos nam.  '
              }
            />
            <Cart img={Sofa1} title={'Single Seater'} />
            <Cart img={Sofa1} title={'Single Seater'} />
          </div>

          {/* <div className="itemTitle">
            <h3>Sofa</h3>
          </div>

          <div className="itemCardContainer">
            <Cart img={Sofa1} title={'Single Seater'} price={'500 aed'} />
            <Cart img={Sofa1} title={'Single Seater'} price={'500 aed'} />
            <Cart img={Sofa1} title={'Single Seater'} price={'500 aed'} />
          </div> */}
        </div>
        <div className="itemCardContainer">
          <ProductCard
            title={'Bed'}
            content={
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosaanimi explicabo, rem possimus eum vitae minima voluptatibus iusto etea quam quas, cum ut quos officia delectus,Lorem ipsum dolor sit amet,consectetur adipisicing elit. Eaque veniam eos nam.'
            }
          />
          <Cart img={Bed1} title={'Master bed'} />
          <Cart img={Bed1} title={'Master bed'} />
        </div>
        {/* <div className="itemContainer">
          <div className="itemTitle">
            <h3>Bed</h3>
          </div>

          <div className="itemCardContainer">
            <Cart img={Bed1} title={'Master bed'} price={'500 aed'} />
            <Cart img={Bed1} title={'Master bed'} price={'500 aed'} />
            <Cart img={Bed1} title={'Master bed'} price={'500 aed'} />
          </div>
        </div> */}
        {/* <div className="itemContainer">
          <div className="itemTitle">
            <h3>Table</h3>
          </div>

          <div className="itemCardContainer">
            <Cart img={Table1} title={'Dinning Table'} price={'500 aed'} />
            <Cart img={Table1} title={'Dinning Table'} price={'500 aed'} />
            <Cart img={Table1} title={'Dinning Table'} price={'500 aed'} />
          </div>
        </div> */}
        <div className="itemCardContainer">
          <ProductCard
            title={'Table'}
            content={
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosaanimi explicabo, rem possimus eum vitae minima voluptatibus iusto etea quam quas, cum ut quos officia delectus,Lorem ipsum dolor sit amet,consectetur adipisicing elit. Eaque veniam eos nam.'
            }
          />
          <Cart img={Table1} title={'Dinning Table'} />
          <Cart img={Table1} title={'Dinning Table'} />
        </div>
        <div className="itemCardContainer">
          <ProductCard
            title={'Wardrobe/Cabinet'}
            content={
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosaanimi explicabo, rem possimus eum vitae minima voluptatibus iusto etea quam quas, cum ut quos officia delectus,Lorem ipsum dolor sit amet,consectetur adipisicing elit. Eaque veniam eos nam.'
            }
          />
          <Cart img={Table1} title={'Dinning Table'} />
          <Cart img={Table1} title={'Dinning Table'} />
        </div>
      </section>
      <section className="aboutUsContainer">
        <div className="aboutUsTestimonial">
          <div className="aboutUsTitle">
            <h1>Get To Know Us</h1>
          </div>
          <div className="aboutUsCardWrapper">
            <TestimonialCard
              image={Leadership}
              title={'LEADERSHIP'}
              desc={
                'Out multicultural leaders have deep start-up and enterprise experience. with rich mobile and data expertise.'
              }
            />
            <TestimonialCard
              image={Leadership}
              title={'CAREERS'}
              desc={
                'We take great pride in out market leadership position. thanks to the hard work of out incredibly talented.'
              }
            />
            <TestimonialCard
              image={Leadership}
              title={'PARTNERSHIPS'}
              desc={
                'From research, to events, to platform partnerships. we work with thought leaders to prodive more actionable data.'
              }
            />
            <TestimonialCard
              image={Leadership}
              title={'PRESS'}
              desc={
                "We are the forefront of the market's conversation and serve as the most trusted global source."
              }
            />
          </div>
        </div>
        <div className="aboutUsOurServices">
          <div className="aboutUsTitle">
            <h1>Our Services</h1>
          </div>
          <div className="aboutUsCardWrapper">
            <AboutUsCard
              img={Consultation}
              title={'Consultation'}
              desc={'Determine the style and material of the interior.'}
            />
            <AboutUsCard
              img={Idea}
              title={'Idea'}
              desc={'We provide innovative ideas.'}
            />
            <AboutUsCard
              img={MaterialSelection}
              title={'Material Selection'}
              desc={'Selection of material to be used.'}
            />
          </div>
        </div>
      </section>
      <section className="blog-section">
        <div className="heading productTitle" style={{ marginLeft: '40px' }}>
          <h1>Blogs</h1>
        </div>
        <div className="BlogCardWrapper">
          <BlogCard id="1" title={Article1.title} content={Article1.tagline} />
          <BlogCard
            id="2"
            title={Article2.title}
            content={
              'With supporting text below as a natural lead-in to additional content.'
            }
          />
          <BlogCard
            id="3"
            title={Article3.title}
            content={
              'With supporting text below as a natural lead-in to additional content.'
            }
          />
        </div>
      </section>
      <section className="aboutUsContainer">
        <div className="aboutUsTitle">
          <h1>About Us</h1>
        </div>
        <div className="aboutUsDescription">
          <p style={{ textAlign: 'center', fontSize: '25px' }}>
            Furniture has been an integral part of human life for a very long
            time, and one cannot simply imagine his/her life without its
            presence. It needs to be a memorable and enjoyable experience and
            can be possible only when it is handcrafted to a great extent by
            skilled and experienced craftsmen.{' '}
            <Link style={{ textDecoration: 'none' }} to={'/aboutus'}>
              Read more
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

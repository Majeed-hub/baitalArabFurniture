import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// photos
import Banner_1 from '../../Assests/images/DesktopHeroSection.png';
import Banner_2 from '../../Assests/images/DesktopHeroSection1.jpg';
import Banner_3 from '../../Assests/images/DesktopHeroSection2.jpg';
// import Banner_2 from '../../Assests/images/LivingRoom.jpg';
// import Banner_3 from '../../Assests/images/Modern_Wardrobe.jpg';
import Sofa_1 from '../../Assests/images/sofa1.png';
import Sofa_2 from '../../Assests/images/sofa2.jpg';
import Bed_1 from '../../Assests/images/bed.png';
import Bed_2 from '../../Assests/images/bed2.jpg';
import Table_1 from '../../Assests/images/table.png';
import Table_2 from '../../Assests/images/table1.jpg';
import Wardrobe_1 from '../../Assests/images/Modern_Wardrobe.jpg';
import Wardrobe_2 from '../../Assests/images/Modern_Wardrobe1.jpg';
import Leadership from '../../Assests/images/leadership.png';
import Career from '../../Assests/images/career.png';
import Partnership from '../../Assests/images/partnership.png';
import Press from '../../Assests/images/press.png';
import Consultation from '../../Assests/images/consultation.svg';
import Idea from '../../Assests/images/idea.svg';
import MaterialSelection from '../../Assests/images/choice.svg';

//components
import Cart from '../../components/HomeCard/Card';
import ProductCard from '../../components/ProductCard/ProductCard';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import AboutUsCard from '../../components/AboutUsCard/AboutUsCard';
import { Article1, Article2, Article3 } from '../BlogDetail/Data/BlogData';
import BlogCard from '../../components/BlogCard/BlogCard';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

const Home = () => {
  return (
    <div>
      <section>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner ">
            <div className="carousel-item active ">
              <img src={Banner_1} className="d-block banner-img" alt="..." />

              <div className="carousel-caption d-none d-md-block">
                <h5 className="bannerHeading">Premium Furniture</h5>

                <div className="contactBtn">
                  <HashLink
                    className="btn btn-lg btnViewMore contactUsBtn"
                    smooth
                    to="/#footer"
                  >
                    ORDER NOW
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Banner_2} className="d-block banner-img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="bannerHeading">Living Room Furniture</h5>

                <div className="contactBtn">
                  <HashLink
                    className="btn btn-lg btnViewMore contactUsBtn"
                    smooth
                    to="/#footer"
                  >
                    ORDER NOW
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <img src={Banner_3} className="d-block banner-img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="bannerHeading">Office Furniture</h5>
                <div className="contactBtn">
                  <HashLink
                    className="btn btn-lg btnViewMore contactUsBtn"
                    smooth
                    to="/#footer"
                  >
                    ORDER NOW
                  </HashLink>
                </div>
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
                'Specialized in crafting the Sofa that elevates the presence of space with the harmonious blend of style and comfort, a symphony of form and function that creates an ambiance of serenity and luxury, and refinement that imbues a sense of calm and well-being in any room it graces.'
              }
            />
            <Cart img={Sofa_1} title={'Single Seater'} />
            <Cart img={Sofa_2} title={'Two Seater'} />
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
              'Expertise in fashioning the style and comfort that elevates a sanctuary of slumberous, A place of respite and renewal that offers a welcome escape from the world and promises a night of restful slumber.'
            }
          />
          <Cart img={Bed_1} title={'Master bed'} />
          <Cart img={Bed_2} title={'Queen bed'} />
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
              'The idealist in manufacturing Table, which is a functional place and symbol of hospitality and the bond of family and friends, a gathering place for the collective nourishment of the body and soul where the interactions create a symphony of sustenance.'
            }
          />
          <Cart img={Table_1} title={'Dinning Table'} />
          <Cart img={Table_2} title={'Study Table'} />
        </div>
        <div className="itemCardContainer">
          <ProductCard
            title={'Wardrobe/Cabinet'}
            content={
              'Formalistic in crafting repositories that guard our attire and accessories of our personal style which adds color, character, and charm to our performance in the grand drama of life.'
            }
          />
          <Cart img={Wardrobe_1} title={'Modern Wardrobe'} />
          <Cart img={Wardrobe_2} title={'Minimalist Wardrobe'} />
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
              // desc={
              //   'Out multicultural leaders have deep start-up and enterprise experience. with rich mobile and data expertise.'
              // }
              desc={
                'We unreservedly recognize design and production standards to promote innovation. '
              }
            />
            <TestimonialCard
              image={Career}
              title={'CAREERS'}
              // desc={
              //   'Collaboration with veracious stakeholders to ensure meeting the needs of society.'
              // }
              desc={
                'We take great pride in out market leadership position. thanks to the hard work of out incredibly talented.'
              }
            />
            <TestimonialCard
              image={Partnership}
              title={'PARTNERSHIPS'}
              desc={
                'Collaboration with veracious stakeholders to ensure meeting the needs of society.'
              }
              // desc={
              //   'From research, to events, to platform partnerships. we work with thought leaders to prodive more actionable data.'
              // }
            />
            <TestimonialCard
              image={Press}
              title={'PRESS'}
              desc={
                'The platform for showcasing our work and reaching out to the new audience.'
              }
              // desc={
              //   "We are the forefront of the market's conversation and serve as the most trusted global source."
              // }
            />
          </div>
        </div>

        <div className="aboutUsTestimonial">
          <div className="aboutUsTitle">
            <h1>Our Clients</h1>
          </div>
          <div className="aboutUsCardWrapper">
            <ReviewCard
              reviewContent={
                'The entire experience from the ordering to delivering the finished product leaves us remarkably convinced that it was the right decision to work with your company.'
              }
              author={'- Al Rukn Al Aseel Home Furniture L.L.C (Ajman U.A.E)'}
            />
            <ReviewCard
              reviewContent={
                'Professionalism and friendly coordination. If you are looking for a furniture company with experienced craftsmen, then I highly recommend Al Bait Furniture Factory. '
              }
              author={'- Gateway Interiors (Dubai U.A.E)'}
            />
            <ReviewCard
              reviewContent={
                'After working with Al Bayt Furniture I can say that they are well-equipped and use high-quality materials in their production and the craftsmen are so experienced that they can manufacture any design that one offers.'
              }
              author={'- Al Zayan Furniture (Ajman)'}
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
              desc={'Determine the style and material of the furniture.'}
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
          <BlogCard id="1" content={Article1.tagline} />
          <BlogCard id="2" content={Article2.tagline} />
          <BlogCard id="3" content={Article3.tagline} />
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

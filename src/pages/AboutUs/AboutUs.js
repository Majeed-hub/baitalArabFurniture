import React from 'react';
import './AboutUs.css';
import AboutUsBanner from '../../Assests/images/LivingRoom.jpg';
import AboutUsCard from '../../components/AboutUsCard/AboutUsCard';
import ProfilePhoto from '../../Assests/images/sofa1.png';
// import Leadership from '../../Assests/images/leadership.png';
// import Consultation from '../../Assests/images/consultation.svg';
// import Idea from '../../Assests/images/idea.svg';
// import MaterialSelection from '../../Assests/images/choice.svg';
// import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';

const AboutUs = () => {
  return (
    <section className="aboutUsContainer">
      <div className="aboutUsTitle">
        <h1>About Us</h1>
      </div>
      <div className="aboutUsImage">
        <img src={AboutUsBanner} alt="" />
      </div>
      <div className="aboutUsDescription">
        <p>
          Furniture has been an integral part of human life for a very long
          time, and one cannot simply imagine his/her life without its presence.
          It needs to be a memorable and enjoyable experience and can be
          possible only when it is handcrafted to a great extent by skilled and
          experienced craftsmen.
          <br />
          <br />
          Bait al arab furniture manufacturing LLC deals with the crafting from
          the beginning to end of design, fabrication, processing, and
          preparation of furniture and related articles. <br />
          Expertise in both cunning and creating customizations of all kinds of
          cabinets, couches, cushions, and tables suited to both culturally
          rooted and modern formulated bedrooms, living rooms, home offices,
          study rooms, etc.
          <br />
          <br />
          We believe that crafting is an art of thinking and visualizing our
          surroundings that make our culture and a better future for our living.{' '}
          <br />
          <br />
          We are motivated by the mission of providing high-quality, durable,
          and stylish furniture at affordable prices, To design and creating
          furniture that is both functional and beautiful, To offer a wide range
          of furniture options to meet the needs of a diverse customer base, To
          use sustainable materials and practices in all aspects of their
          business, To create furniture that stands the test of time and can be
          passed down for generations to come.
          <br />
          <br />
          Each product is carefully planned and assembled, and every finished
          product is checked by a quality examiner who checks for any defects in
          the product before they are finally delivered.
          <br />
        </p>
      </div>
      <div className="aboutUsOurTeam">
        <div className="aboutUsTitle">
          <h1>Our Team</h1>
        </div>
        <div className="aboutUsCardWrapper">
          <AboutUsCard
            img={ProfilePhoto}
            title={'Abdul Majeed'}
            desc={'Designer'}
          />
          <AboutUsCard
            img={ProfilePhoto}
            title={'Abdul Majeed'}
            desc={'Designer'}
          />
          <AboutUsCard
            img={ProfilePhoto}
            title={'Abdul Majeed'}
            desc={'Designer'}
          />
        </div>
      </div>
      {/* <div className="aboutUsTestimonial">
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
      </div> */}
    </section>
  );
};

export default AboutUs;

import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="box">
      <h1 style={{ color: "black", textAlign: "center", marginTop: "-50px" }}>
        baitalArabFurniture
      </h1>
      <div className="container">
        <div className="row">
          <div className="column">
            <p className="heading">About Us</p>
            <a className="Footerlink" href="#">Aim</a>
            <a className="Footerlink" href="#">Vision</a>
            <a className="Footerlink" href="#">Testimonials</a>
          </div>
          <div className="column">
            <p className="heading">Services</p>
            <a className="Footerlink" href="#">Writing</a>
            <a className="Footerlink" href="#">Internships</a>
            <a className="Footerlink" href="#">Coding</a>
            <a className="Footerlink" href="#">Teaching</a>
          </div>
          <div className="column">
            <p className="heading">Contact Us</p>
            <a className="Footerlink" href="#">Uttar Pradesh</a>
            <a className="Footerlink" href="#">Ahemdabad</a>
            <a className="Footerlink" href="#">Indore</a>
            <a className="Footerlink" href="#">Mumbai</a>
          </div>
          <div className="column">
            <p className="heading" >Social Media</p>
            <a className="Footerlink" href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </a>
            <a className="Footerlink" href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </a>
            <a className="Footerlink" href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </a>
            <a className="Footerlink" href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

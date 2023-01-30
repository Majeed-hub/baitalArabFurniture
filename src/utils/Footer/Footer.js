import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="box">
      <div className="container">
        <div className="row">
          <div className="column">
            <h4
              className="brand-name"
              style={{
                color: "black",
                textAlign: "center",
                margin: "0",
                padding: "7px",
              }}
            >
              BaitalArab
            </h4>
            <p
              className="description"
              style={{ fontSize: "15px", padding: "4px", fontFamily:"Roboto,sans-serif",fontWeight:"300" }}
            >
              Adipisicing laborum aliqua ad aliquip ad. Dolore deserunt elit
              velit nulla officia nisi anim velit laboris. Eu ex laborum
              consequat ut cillum esse quis laborum cupidatat consequa
              exercitation in.
            </p>
            <div
              className="social-links"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <a
                href="https://www.instagram.com/"
                className="footerlink"
                style={{ textDecoration: "none", fontFamily: "Pacifico" }}
              >
                instagram
              </a>
              <a
                href="https://www.facebook.com/"
                style={{ textDecoration: "none", fontFamily: "Pacifico" }}
              >
                facebook
              </a>
              <a
                href="https://www.linkedin.com/"
                style={{ textDecoration: "none", fontFamily: "Pacifico" }}
              >
                linkedIn
              </a>
              {/* <p className="heading">Social Media</p>
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
            </a> */}
            </div>
            <div>
              <h3
                className="heading"
                style={{
                  textAlign: "center",
                  fontFamily: "Belleza",
                  margin: "10px",
                }}
              >
                Address
              </h3>
              <p className="address" style={{ textAlign: "center" }}>
                xyz street, opp abc hotel,
                <br /> dubai uae
              </p>
            </div>
          </div>

          <div className="column">
            <h4
              className="heading"
              style={{
                color: "black",
                textAlign: "center",
              }}
            >
              Location
            </h4>
            <div
              className="mapouter"
              style={{
                position: "relative",
                textAlign: "right",
                height: "292px",
                width: "289px",
              }}
            >
              <div
                className="gmap_canvas"
                style={{
                  overflow: "hidden",
                  background: "none",
                  height: "292px",
                  width: "289px",
                  borderRadius: "10px",
                }}
              >
                <iframe
                  width="289"
                  height="240"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  title="map"
                ></iframe>
                <a href="https://www.whatismyip-address.com"></a>
                <br />

                <a href="https://www.embedgooglemap.net"></a>
              </div>
            </div>
          </div>
          <div className="column">
            <form>
              <h4
                className="heading"
                style={{
                  color: "black",
                  textAlign: "center",
                }}
              >
                Contact us
              </h4>
              <input
                type="text"
                placeholder="Enter your name"
                style={{ height: "35px", padding: "10px" }}
              />
              <br />
              <br />
              <input
                type="text"
                className="textField"
                style={{ height: "90px", padding: "10px" }}
                placeholder="Enter your query"
              />
              <br /> <br />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

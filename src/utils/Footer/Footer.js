import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="box">
      <div className="container">
        <div className="row">
          <div className="column">
            <h4
              style={{
                color: "black",
                textAlign: "center",
              }}
            >
              baitalArabFurniture
            </h4>
            <p className="description" style={{ fontSize: "10px" }}>
              Adipisicing laborum aliqua ad aliquip ad. Dolore deserunt elit
              velit nulla officia nisi anim velit laboris. Eu ex laborum
              consequat ut cillum esse quis laborum cupidatat consequat
              exercitation in.
            </p>
            <div
              className="social-links"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <a href="">instagram</a>
              <a href="">facebook</a>
              <a href="">linkedIn</a>
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
              <h3 className="heading" style={{ textAlign: "center" }}>
                address
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
              class="mapouter"
              style={{
                position: "relative",
                textAlign: "right",
                height: "232px",
                width: "289px",
              }}
            >
              <div
                class="gmap_canvas"
                style={{
                  overflow: "hidden",
                  background: "none",
                  height: "232px",
                  width: "289px",
                }}
              >
                <iframe
                  width="289"
                  height="240"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
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
              <input type="text" /> <br />
              <br />
              <input type="text" /> <br/> <br/>
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

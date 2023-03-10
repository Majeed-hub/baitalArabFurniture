import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  // const form = useRef();
  const form = useRef();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const sendEmail = (e) => {
    e.preventDefault();
    // const name = document.getElementById('fullname').value;
    // const email = document.getElementById('email_id').value;
    // const message = document.getElementById('message').value;
    // var params = {
    //   from_name: name,
    //   email_id: email,
    //   message: message,
    // };
    if (name === "" || email === "" || message === "") {
      alert("Please fill all the fields");
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_YOUR_SERVICE_ID,
          process.env.REACT_APP_YOUR_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_YOUR_PUBLIC_KEY
        )
        .then(
          (result) => {
            // console.log(result);
            // alert('Success!' + result.status);
            toast.success("Email Send Successfully", {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          },
          (error) => {
            toast.error("Failed, Try again", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            // alert('Failed!' + error.status);
            // console.log('FAILED...', error);
          }
        );
    }
  };

  return (
    <footer className="box" id="footer">
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
              style={{
                fontSize: "12px",
                padding: "4px",
                fontFamily: "Roboto,sans-serif",
                fontWeight: "300",
                textAlign: "center",
              }}
            >
              Bait al arab furniture manufacturing LLC deals with crafting from
              the beginning to the end of design.
            </p>
            <div
              className="social-links"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <a
                href="https://www.instagram.com/baitalarabhomefurniture/"
                target="_blank"
                rel="noreferrer"
                className="footerlink"
                style={{
                  textDecoration: "none",
                  fontFamily: "Pacifico",
                  color: "#f3af3b",
                }}
              >
                instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100086258381847"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  fontFamily: "Pacifico,sans-serif",
                  color: "#f3af3b",
                }}
              >
                facebook
              </a>
              <a
                href="https://www.linkedin.com/in/bait-al-arab-home-furniture-manufacturing-l-l-c-9a7a24251/"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  fontFamily: "Pacifico,sans-serif",
                  color: "#f3af3b",
                }}
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
                  fontFamily: "Belleza,sans-serif",
                  margin: "10px",
                }}
              >
                Address
              </h3>
              <p
                className="address"
                style={{
                  fontSize: "15px",
                  padding: "4px",
                  fontFamily: "Roboto,sans-serif",
                  fontWeight: "300",
                  textAlign: "center",
                }}
              >
                Sanaya Industrial Area-2, Ajman, UAE
                <br />
                Contact numbers : <br /> 056 229 4750 <br /> 050 309 2539
                <br /> 052 199 4925
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57677.34531913008!2d55.39721145820313!3d25.3768766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59fd3d9149eb%3A0x1466520549c2e080!2sBait%20Al-Arab%20Home%20Furniture%20manufacturing%20L.L.C!5e0!3m2!1sen!2sus!4v1675356551971!5m2!1sen!2sus"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  title="map"
                ></iframe>
                <Link to="https://www.whatismyip-address.com"></Link>
                <br />

                <Link to="https://www.embedgooglemap.net"></Link>
              </div>
            </div>
          </div>
          <div className="column">
            <form ref={form} onSubmit={sendEmail}>
              <h2 className="formHeading">Contact Us</h2>
              <div className="row">
                <div className="contact-form padd-15">
                  <div className="row mb-2">
                    <div className="form-item col-12 padd-15">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control inputField"
                          placeholder="Name"
                          id="fullname"
                          name="from_name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="form-item col-12 padd-15">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control inputField"
                          placeholder="Email"
                          id="email_id"
                          value={email}
                          name="email_id"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="form-item col-12 padd-15">
                      <div className="form-group">
                        <textarea
                          id="message"
                          name="message"
                          className="form-control textField"
                          placeholder="Message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="form-item col-12 padd-15">
                      <button type="submit" className="btn formSubmitBtn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </footer>
  );
};
export default Footer;

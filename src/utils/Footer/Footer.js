import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import './Footer.css';

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
    if (name === '' || email === '' || message === '') {
      alert('Please fill all the fields');
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
            console.log(result);
            alert('Success!' + result.status);
          },
          (error) => {
            alert('Failed!' + error.status);
            console.log('FAILED...', error);
          }
        );
    }
  };

  return (
    <div className="box" id="footer">
      <div className="container">
        <div className="row">
          <div className="column">
            <h4
              className="brand-name"
              style={{
                color: 'black',
                textAlign: 'center',
                margin: '0',
                padding: '7px',
              }}
            >
              BaitalArab
            </h4>
            <p
              className="description"
              style={{
                fontSize: '15px',
                padding: '4px',
                fontFamily: 'Roboto,sans-serif',
                fontWeight: '300',
                textAlign:"center"
              }}
            >
              Adipisicing laborum aliqua ad aliquip ad. Dolore deserunt elit
              velit nulla officia nisi anim velit laboris. Eu ex laborum
              consequat ut cillum esse quis laborum cupidatat consequa
              exercitation in.
            </p>
            <div
              className="social-links"
              style={{ display: 'flex', justifyContent: 'space-around' }}
            >
              <a
                href="https://www.instagram.com/"
                className="footerlink"
                style={{ textDecoration: 'none', fontFamily: 'Pacifico' }}
              >
                instagram
              </a>
              <a
                href="https://www.facebook.com/"
                style={{ textDecoration: 'none', fontFamily: 'Pacifico' }}
              >
                facebook
              </a>
              <a
                href="https://www.linkedin.com/"
                style={{ textDecoration: 'none', fontFamily: 'Pacifico' }}
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
                  textAlign: 'center',
                  fontFamily: 'Belleza',
                  margin: '10px',
                }}
              >
                Address
              </h3>
              <p className="address" style={{ textAlign: 'center' }}>
                xyz street, opp abc hotel,
                <br /> dubai uae
              </p>
            </div>
          </div>

          <div className="column">
            <h4
              className="heading"
              style={{
                color: 'black',
                textAlign: 'center',
              }}
            >
              Location
            </h4>
            <div
              className="mapouter"
              style={{
                position: 'relative',
                textAlign: 'right',
                height: '292px',
                width: '289px',
              }}
            >
              <div
                className="gmap_canvas"
                style={{
                  overflow: 'hidden',
                  background: 'none',
                  height: '292px',
                  width: '289px',
                  borderRadius: '10px',
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
                <Link to="https://www.whatismyip-address.com"></Link>
                <br />

                <Link to="https://www.embedgooglemap.net"></Link>
              </div>
            </div>
          </div>
          <div className="column">
            <form ref={form} onSubmit={sendEmail}>
              <h2 className="formHeading">Contact Us</h2>
              <div class="row">
                <div class="contact-form padd-15">
                  <div class="row mb-2">
                    <div class="form-item col-12 padd-15">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control inputField"
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
                  <div class="row mb-2">
                    <div class="form-item col-12 padd-15">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control inputField"
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
                  <div class="row mb-3">
                    <div class="form-item col-12 padd-15">
                      <div class="form-group">
                        <textarea
                          id="message"
                          name="message"
                          class="form-control textField"
                          placeholder="Message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="form-item col-12 padd-15">
                      <button type="submit" class="btn formSubmitBtn">
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
    </div>
  );
};
export default Footer;

import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assests/images/logo.png';
import Menu from '../../Assests/images/menu.png';
import Close from '../../Assests/images/close.png';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <nav className="navigation">
        <span className="logo">
          <img src={logo} alt="logo" />
        </span>

        <Link to="/" className="brand-name">
          baitalArab
        </Link>

        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {isNavExpanded ? (
            <img className="menuImg" src={Close} alt="Close" />
          ) : (
            <img className="menuImg" src={Menu} alt="Menu" />
          )}
        </button>
        <div
          className={
            isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
          }
        >
          <ul>
            <li>
              <NavLink
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
                to="/"
                className={({ isActive }) => (isActive ? 'active' : 'navLinks')}
              >
                Home
              </NavLink>
            </li>
            <li>
              {/* <a href="/about">Porfolio</a> */}

              <NavLink
                to="/product"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
                className={({ isActive }) => (isActive ? 'active' : 'navLinks')}
              >
                Product
              </NavLink>
            </li>
            <li>
              {/* <a href="/about">About</a> */}
              <NavLink
                to="/aboutus"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
                className={({ isActive }) => (isActive ? 'active' : 'navLinks')}
              >
                About
              </NavLink>
            </li>
            <li>
              {/* <a href="/contact">Contact</a> */}
              <NavLink
                to="/blog"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
                className={({ isActive }) => (isActive ? 'active' : 'navLinks')}
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

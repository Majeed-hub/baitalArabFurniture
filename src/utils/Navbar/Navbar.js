import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assests/images/logo.png';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <nav className="navigation">
        <span className="logo">
          <img src={logo} alt="logo" />
        </span>

        <Link to="/" className="brand-name">
          baitalArabFurniture
        </Link>

        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {isNavExpanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" height="38" width="38">
              <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="38" width="38">
              <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
            </svg>
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
                to="/portfolio"
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

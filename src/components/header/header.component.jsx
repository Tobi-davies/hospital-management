import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  const [nav, showNav] = useState(false);
  const [subLink, showSubLink] = useState(false);
  const [navbar, setNav] = useState(false);

  const handleNav = () => {
    showNav((prev) => !prev);
    console.log(nav);
  };

  const handleLinkClick = () => {
    showNav(false);
  };

  const handleSubLinks = () => {
    showSubLink((prev) => !prev);
  };

  const changeBg = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 60) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <div className={navbar ? "header white" : "header"}>
      <div className="header-container">
        <div className="logo">
          <div className="logo-text">
            <span className="logo-small">we</span>
            <span className="logo-big">CARE</span>
          </div>
          <div
            className={!nav ? "harmburger" : "harmburger rotate"}
            onClick={handleNav}
          >
            <div className="menu-bar1"></div>
            <div className="menu-bar2"></div>
            <div className="menu-bar3"></div>
          </div>
        </div>
        <div className={!nav ? "nav-links" : "nav-links show-navs"}>
          <ul>
            <Link to="/">
              <li className="link" onClick={handleLinkClick}>
                Home
              </li>
            </Link>
            <Link to="/about" onClick={handleLinkClick}>
              <li className="link">About</li>
            </Link>
            <Link to="/services">
              <div className="services">
                <li className="link" onClick={handleSubLinks}>
                  Health Blog
                </li>

                <div className={subLink ? "subs" : "subs show-subs"}>
                  <div className="sub-nav">Pharmacy</div>
                  <div className="sub-nav">Diagnostic center</div>
                </div>
              </div>
            </Link>
            <Link to="/contact-us" onClick={handleLinkClick}>
              <li className="link">Contact us</li>
            </Link>
            <Link to="/signin" onClick={handleLinkClick}>
              <li className="link appointment"> BOOK APPOINTMENT</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

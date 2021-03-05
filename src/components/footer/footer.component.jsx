import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="logo-text">
            <span className="logo-small">we</span>
            <span className="logo-big">CARE</span>
          </div>
          <p>Bridging the gap between you and your doctor</p>
        </div>

        <ul>
          <li className="bold">Company</li>
          <li>About</li>
          <li>Our team</li>
          <li>Pricing</li>
        </ul>

        <ul>
          <li className="bold">Services</li>
          <li>Pharmacy</li>
          <li>Consultations</li>
          <li>Ambulance</li>
          <li>Medical Outreach</li>
        </ul>

        <ul>
          <li className="bold">Resources</li>
          <li>Blog</li>
          <li>Tutorials</li>
          <li>FAQs</li>
        </ul>

        <ul>
          <li className="bold">Contact</li>
          <li>194. Obafemi Awolowo way, Ikeja</li>
          <li>+234 80 894 654</li>
          <li>info@wecareng.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

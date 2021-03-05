import React from "react";
import "./intro.styles.scss";

import doctorSvg from "../../assets/images/doctors-svg.svg";
import googleBadge from "../../assets/images/Google-badge.png";
import appleBadge from "../../assets/images/AppStoreBadge.png";

const Intro = () => {
  const length = window.pageYOffset;
  console.log(length);

  return (
    <div className="intro">
      <div className="intro-top">
        <div className="intro-top-first">
          <div>
            <h1>
              Good health is priceless and its our top priority for you and your
              family
            </h1>
            <p>
              Sign up now to enjoy the benefits and avoid long queues at
              hospitals
            </p>
            <button>Book Appointment</button>
          </div>
        </div>
        <div className="intro-top-second">
          <img src={doctorSvg} alt="svg" />
        </div>
      </div>
      <div className="services">
        <h2 className="service-title">Our Services</h2>
        <p>Reasons why you should join this platform</p>
        <div className="reasons">
          <div>Easy access to medical consultation</div>
          <div>24/7 Ambulance services</div>
          <div>Online pharmacy</div>
        </div>
      </div>
      <div className="download-app">
        <p>Download the weCARE app</p>
        <span>Be more intentional about your health today</span>
        <div className="badge">
          <div className="google">
            <img src={googleBadge} alt="googleBadge" />
          </div>

          <div className="apple">
            <img src={appleBadge} alt="appleBadge" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

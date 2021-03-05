import React from "react";
// import FormInput from "../form-input/form-input.component";
import "./contact.styles.scss";

const Contact = () => {
  const length = window.pageYOffset;

  if (length > 60) {
    console.log("contttttttttttttttt");
  }
  console.log(length);
  return (
    <div className="contact">
      <div className="contact-top">
        <div className="contact-top-image" />
        <h1 className="contact-top-text">CONTACT US</h1>
      </div>
      <div className="contact-form">
        <h2>SEND A MESSAGE!</h2>
        <form>
          <div className="level1">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <input type="number" placeholder="Phone" />
          </div>
          <textarea placeholder="Leave a Message" />
        </form>
      </div>
      <div className="contact-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.406062799698!2d3.3391020142667798!3d6.596350224143425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9227a5b023f9%3A0xb03fffb636218a87!2sIkeja%20Bridge%2C%20Allen%2C%20Ikeja!5e0!3m2!1sen!2sng!4v1614976545831!5m2!1sen!2sng"
          style={{ border: "0px" }}
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        s
      </div>
    </div>
  );
};

export default Contact;

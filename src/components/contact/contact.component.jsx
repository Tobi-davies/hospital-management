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
    </div>
  );
};

export default Contact;

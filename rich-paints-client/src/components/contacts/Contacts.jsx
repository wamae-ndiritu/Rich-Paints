import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contacts.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TitleBar from "../TitleBar";

const Contacts = () => {
  const form = useRef();

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4gxtde7",
        "template_htmmfp8",
        form.current,
        "KehPQQgwKRR6ja30g"
      )
      .then(
        (result) => {
          setIsSuccess(true);
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
  };
  return (
    <div className="cont mt-">
      <TitleBar>Our Contacts</TitleBar>
      <div className="contact mt-3">
        <div className="contact-wrapper">
          <div className="contact-left">
            <h6 className="h6 contact-subtitle">Connect With Us</h6>
            <div className="contact-social">
              <div className="contact-title">
                <div className="contact-icon">
                  <LocationOnIcon />
                </div>
                <h6>Address</h6>
              </div>
              <p>P.O. Box 103988-00101, Nairobi Kenya</p>
            </div>
            <div className="contact-social">
              <div className="contact-title">
                <div className="contact-icon">
                  <PhoneEnabledIcon />
                </div>
                <h6>Telephone</h6>
              </div>
              <p>+254 20 8097069</p>
            </div>
            <div className="contact-social">
              <div className="contact-title">
                <div className="contact-icon">
                  <TwitterIcon />
                </div>
                <h6>Twitter</h6>
              </div>
              <p>@richpaintskenya</p>
            </div>
            <div className="contact-social">
              <div className="contact-title">
                <div className="contact-icon">
                  <FacebookIcon />
                </div>
                <h6>Facebook</h6>
              </div>
              <p>richpaintskenya</p>
            </div>
          </div>
          <div className="contact-right">
            <TitleBar className="right-title">LEAVE US A MESSAGE</TitleBar>
            <form className="message-form" ref={form} onSubmit={sendEmail}>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="John Doe"
                  name="user_name"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  name="user_email"
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div class="mb-3">
                <label for="subject" class="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                  placeholder="Your Subject"
                  name="subject"
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  class="form-control"
                  id="message"
                  placeholder="Type your message here..."
                />
              </div>
              <button type="submit" className="btn-contact">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contacts.css";
import { toast } from "react-toastify";
import Toast from "../../utilityComponents/Toast";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TitleBar from "../TitleBar";
import Message from "../../utilityComponents/Message";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const Contacts = () => {
  const form = useRef();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Messagenot sent!");
  const [details, setDetails] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    setIsError(false);

    if (
      details.user_name === "" ||
      details.user_email === "" ||
      details.subject === "" ||
      details.message === ""
    ) {
      setErrorMessage("All fields required!");
      setIsError(true);
    } else {
      emailjs
        .sendForm(
          "service_4gxtde7",
          "template_htmmfp8",
          form.current,
          "KehPQQgwKRR6ja30g"
        )
        .then(
          (result) => {
            toast.success("Message sent successfully!", ToastObjects);
          },
          (error) => {
            setIsError(true);
          }
        );
    }
    e.target.reset();
  };

  return (
    <div className="cont mt-3">
      <Toast />
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
            {isError && (
              <Message variant="alert-danger">{errorMessage}</Message>
            )}
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
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  name="user_email"
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  onChange={handleChange}
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

import React from "react";

import facebook from "../components/images/Facebook.png";
import Instagram from "../components/images/Instagram.png";
import X from "../components/images/X.png";
import Linkedin from "../components/images/Linkedin.png";

const ContactUs = () => {
  return (
    <div>
      <style>
        {`
        .backtohome {
          background-color: #093336;
          color: #ffffff;
          border-radius: 20%;
          float: right;
          margin-right: 40px;
          padding: 10px;
          width: 60px;
        }
        /* Global Styles */
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          
background: linear-gradient(135deg, #0e1520 10%, #131b2b 50%, #182335 100%);
          color: #ffffff;
        }
        
        /* Contact Page Styles */
        .contact-page {
          padding: 20px;
          animation: fadeIn 1.5s ease-in-out;
        }
        
        .header {
          padding: 40px 0;
          margin-bottom: 20px;
        }
        
        .header-title {
          font-size: 2.5em;
          margin: 0;
        }
        
        .header-subtitle {
          font-size: 1.2em;
          margin-top: 10px;
        }
        
        .contact-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .contact-info,
        .contact-form-container {
          width: 80%;
          max-width: 600px;
          margin-bottom: 40px;
        }
        
        .info-title,
        .form-title {
          font-size: 2em;
          margin: 20px 0 10px;
        }
        
        .info-paragraph {
          font-size: 1.2em;
          margin: 10px 0;
        }
        
        .contact-methods {
          list-style: none;
          padding: 0;
          font-size: 1.2em;
        }
        
        .contact-methods li {
          margin: 10px 0;
        }
        
        .contact-form {
          background-color: #0e1520;
          padding: 20px;
          border-radius: 10px;
          animation: slideInUp 1s ease-out;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-size: 1em;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 5px;
        }
        
        .submit-button {
          background-color: #4e4376;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1em;
        }
        
        .submit-button:hover {
          background-color: #2b5876;
        }
        
        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideInUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .footerhome {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
        }
        
        .footerhome nav a {
          margin: 0 15px;
          text-decoration: none;
          color: #fff;
          text-align: center;
        }
        
        .footerhome .socialshome a {
          margin: 0 10px;
          text-decoration: none;
        }
        
        .footerhome .logohome {
          align-self: flex-start;
        }
        
        .copyrighthome {
          display: flex;
          justify-content: space-around;
          text-align: center;
        }
        .social-iconshome {
          width: 30px;
          margin-right: 20px;
        }
        
        .Xhome {
          width: 58px;
          margin-top: 100px;
        }
        .social-iconshome {
          width: 30px;
          margin-right: 20px;
        }
        
        .Xhome {
          width: 58px;
          margin-right:10px;
          margin-top: 100px;
        `}
      </style>
      <div className="contact-page">
        <button className="backtohome">Home</button>
        <header className="header">
          <h1 className="header-title">Contact Us</h1>
          <p className="header-subtitle">
            We're here to help and answer any questions you might have. We look
            forward to hearing from you.
          </p>
        </header>
        <section className="contact-content">
          <div className="contact-info">
            <h2 className="info-title">Get in Touch</h2>
            <p className="info-paragraph">
              Feel free to reach out to us through any of the following methods:
            </p>
            <ul className="contact-methods">
              <li>Email: support@blockpay.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 1234 Blockchain Blvd, Cryptoville, CY 56789</li>
            </ul>
          </div>
          <div className="contact-form-container">
            <h2 className="form-title">Send Us a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
          <br />
          <br />
          <br />
          <br />
        </section>
      </div>
      <footer>
        <div className="footerhome">
          <div className="logohome">BlockPay</div>

          <nav>
            <a href="#about">About</a>
            <br />
            <br />
            <a href="#features">Features</a>
            <br />
            <br />
          </nav>
          <div className="socialshome">
            Let's get social:
            <br />
            <br />
            <br />
            <img className="social-iconshome" src={Linkedin} alt="Linkedin" />
            <img className="social-iconshome" src={facebook} alt="Facebook" />
            <img className="Xhome" src={X} alt="X" />
            <img className="social-iconshome" src={Instagram} alt="Instagram" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="copyrighthome">
          <h6>© 2024 BlockPay Limited. All Rights Reserved.</h6>
          <h5 className="policyhome"> Privacy Policy . Terms & Conditions</h5>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
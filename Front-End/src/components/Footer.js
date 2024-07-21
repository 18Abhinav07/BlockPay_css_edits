import React from "react";
import "../styles.css";
import facebook from "./images/Facebook.png";
import Instagram from "./images/Instagram.png";
import X from "./images/X.png";
import Linkedin from "./images/Linkedin.png";

const Footer = () => {
  return (
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
          <a href="#updates">Contact us</a>
        </nav>
        <div className="socialshome">
          Let's get social:
          <br />
          <br />
          <br />
          <img className="social-iconshome" src={Linkedin} alt="Linkedin" />
          <img className="social-iconshome" src={facebook} alt="Facebook" />
          <img className="social-iconshome" src={X} alt="X" />
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
  );
};

export default Footer;

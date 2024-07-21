import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <headerhome>
      <div className="logohome">BlockPay</div>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#updates">Contact us</a>
          </li>
        </ul>
      </nav>
      <div className="auth-linkshome">
        <Link to="/login">Sign In</Link>
        <Link to="/register" className="register-btnhome">
          Register
        </Link>
      </div>
    </headerhome>
  );
};

export default Header;

import React from "react";
import facebook from "../components/images/Facebook.png";
import Instagram from "../components/images/Instagram.png";
import X from "../components/images/X.png";
import Linkedin from "../components/images/Linkedin.png";

const Features = () => {
  return (
    <div>
      <style>
        {`
        /* Global Styles */
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #0e1520 10%, #131b2b 50%, #182335 100%);
          color: #ffffff;
        }
        
        /* Features Page Styles */
        .features-page {
          text-align: left;
          padding: 20px;
          animation: fadeIn 1.5s ease-in-out;
        }
        .backtohome {
          background-color: #093336;
          color: #ffffff;
          border-radius: 20%;
          float: right;
          margin-right: 40px;
          padding: 10px;
          width: 60px;
        }
        .header {
          padding: 40px;
          margin-bottom: 20px;
        }
        
        .header-title {
          font-size: 2.5em;
          margin: 0;
          padding: 30px;
        }
        
        .content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .feature-item {
          margin-bottom: 30px;
          animation: slideInUp 1s ease-out;
        }
        
        .feature-title {
          font-size: 2em;
          margin: 20px 0 10px;
        }
        
        .feature-paragraph {
          font-size: 1.2em;
          margin: 10px 0 30px;
          line-height: 1.6;
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
          margin-right:10px;
          margin-top: 100px;
        }

        `}
      </style>
      <div className="features-page">
        <button className="backtohome">Home</button>

        <header className="header">
          <h1 className="header-title">Features of Blockpay</h1>
        </header>
        <section className="content">
          <div className="feature-item">
            <h2 className="feature-title">Real-Time Transactions</h2>
            <p className="feature-paragraph">
              Experience the speed and efficiency of real-time transactions.
              With Blockpay, payments are processed instantly, ensuring that
              your workforce receives their wages without any delays.
            </p>
          </div>
          <div className="feature-item">
            <h2 className="feature-title">Immutable Records</h2>
            <p className="feature-paragraph">
              Our blockchain technology ensures that all records are immutable
              and transparent. Once recorded, transactions cannot be altered or
              tampered with, providing a secure and reliable payroll system.
            </p>
          </div>
          <div className="feature-item">
            <h2 className="feature-title">Effortless Compliance</h2>
            <p className="feature-paragraph">
              Blockpay simplifies compliance with regulatory standards. Our
              platform is designed to ensure that all transactions meet legal
              requirements, reducing the burden on your payroll department.
            </p>
          </div>
          <div className="feature-item">
            <h2 className="feature-title">Global Accessibility</h2>
            <p className="feature-paragraph">
              No matter where your employees are located, Blockpay provides
              global accessibility. Cross-border payments are made easy,
              ensuring that distance is no barrier to timely payroll processing.
            </p>
          </div>
          <div className="feature-item">
            <h2 className="feature-title">User-Friendly Interface</h2>
            <p className="feature-paragraph">
              Our platform is designed with the user in mind. The intuitive
              interface makes it easy to manage payroll, track transactions, and
              generate reports, all from one convenient location.
            </p>
            <br />
            <br />
            <br />
            <br />
          </div>
        </section>
      </div>
      <footer>
        <div className="footerhome">
          <div className="logohome">BlockPay</div>

          <nav>
            <a href="#about">About</a>
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

export default Features;

import React from "react";
import facebook from "../components/images/Facebook.png";
import Instagram from "../components/images/Instagram.png";
import X from "../components/images/X.png";
import Linkedin from "../components/images/Linkedin.png";

const Aboutus = () => {
  return (
    <div>
      <style>
        {`
        /* General Styles */
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          
background: linear-gradient(135deg, #0e1520 10%, #131b2b 50%, #182335 100%);
          color: #ffffff;
        }
        
        /* About Page Styles */
        .about-page {
          
          
          padding: 20px;
          animation: fadeIn 1.5s ease-in-out;
        }
        
        
        
        .header {
          background: #0D99FF66
          
          padding: 40px;
          animation: fadeIn 1.5s ease-in-out;
        }
        
        .about-page button{
          background-color: #093336;
          color: #FFFF;
          text-align: left;
          
        }
        
        .header-title {
          font-size: 2.5em;
          margin: 0;
          padding: 40px;
        }
        
        .content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .section-title {
          font-size: 2em;
          margin: 20px 0 10px;
          animation: slideInLeft 1s ease-out;
        }
        .backtohome{
          border-radius: 20%;
          float: right;
          margin-right: 40px;
          padding: 10px;
          width: 60px;
        }
        .section-paragraph {
          font-size: 1.2em;
          margin: 10px 0 30px;
          line-height: 1.6;
          animation: slideInRight 1s ease-out;
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
        
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
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
        `}
      </style>
      <div className="about-page">
        <header className="header">
          <button className="backtohome">Home</button>
          <h1 className="header-title">About Blockpay</h1>
        </header>
        <section className="content">
          <h2 className="section-title">Our Vision</h2>
          <p className="section-paragraph">
            At BlockPay, we envision a world where payroll processing is as
            seamless and efficient as possible. Leveraging the power of
            blockchain technology, we aim to eliminate the barriers and
            inefficiencies that plague traditional payroll systems. Our goal is
            to empower businesses and their employees with real-time,
            transparent, and secure payment solutions.
          </p>
          <h2 className="section-title">Our Mission</h2>
          <p className="section-paragraph">
            Our mission is to revolutionize the payroll industry by providing a
            decentralized platform that ensures speed, security, and compliance.
            We are committed to delivering innovative solutions that simplify
            payroll processes, reduce costs, and enhance employee satisfaction.
            By integrating blockchain technology, we create a trusted
            environment where every transaction is immutable and verifiable.
          </p>
          <h2 className="section-title">Why Choose BlockPay?</h2>
          <p className="section-paragraph">
            Choosing BlockPay means choosing a future-proof payroll solution.
            Our platform offers several key advantages:
            <ul>
              <li>
                Experience the convenience of real-time payroll transactions,
                ensuring your employees receive their wages without delay.
              </li>
              <li>
                Benefit from the security of blockchain technology, which
                provides unalterable and transparent payroll records.
              </li>
              <li>
                Stay effortlessly compliant with local and international payroll
                regulations, reducing the burden on your HR department.
              </li>
              <li>
                Lower your operational costs and transaction fees, enabling your
                business to allocate resources more effectively.
              </li>
              <li>
                Seamlessly integrate BlockPay with your existing systems,
                ensuring a smooth transition and minimal disruption.
              </li>
            </ul>
          </p>
          <h2 className="section-title">Our Team</h2>
          <p className="section-paragraph">
            BlockPay is driven by a diverse team of experts in blockchain
            technology, finance, and payroll management. Our collective
            experience and dedication enable us to deliver cutting-edge
            solutions that meet the evolving needs of businesses worldwide. We
            are passionate about transforming the payroll landscape and are
            committed to providing exceptional service to our clients.
          </p>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-paragraph">
            We would love to hear from you! Whether you have questions about our
            platform, need support, or want to learn more about how BlockPay can
            benefit your business, feel free to reach out. Contact us through
            our support email, live chat, or follow us on our social media
            channels for the latest updates.
          </p>
          <br />
          <br />
          <br />
        </section>
      </div>
      <footer>
        <div className="footerhome">
          <div className="logohome">BlockPay</div>

          <nav>
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

export default Aboutus;

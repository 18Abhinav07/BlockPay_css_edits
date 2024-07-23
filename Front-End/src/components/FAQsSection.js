import React, { useState } from "react";
import "../styles.css";

const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs-sectionhome">
      <h2>FAQs</h2>
      <ul>
        <li>
          <div className="faq-questionhome" onClick={() => toggleAnswer(0)}>
            <h3>How secure is my data with BlockPay?</h3>
            <span className="toggle-iconhome">
              {openIndex === 0 ? "-" : "+"}
            </span>
          </div>
          {openIndex === 0 && (
            <p>
              BlockPay protects data by advanced blockchain encryption, ensuring
              maximum security and privacy.
            </p>
          )}
        </li>
        <li>
          <div className="faq-questionhome" onClick={() => toggleAnswer(1)}>
            <h3>Can BlockPay handle multi-currency transactions?</h3>
            <span className="toggle-iconhome">
              {openIndex === 1 ? "-" : "+"}
            </span>
          </div>
          {openIndex === 1 && (
            <p>
              Absolutely! BlockPay supports multi-currency transactions, making
              it perfect for global businesses.
            </p>
          )}
        </li>
        <li>
          <div className="faq-questionhome" onClick={() => toggleAnswer(2)}>
            <h3>How does BlockPay ensure compliance with local regulations?</h3>
            <span className="toggle-iconhome">
              {openIndex === 2 ? "-" : "+"}
            </span>
          </div>
          {openIndex === 2 && (
            <p>
              BlockPay automatically updates and integrates local and
              international payroll regulations into the system, ensuring your
              business stays compliant without any extra effort.
            </p>
          )}
        </li>
        <li>
          <div className="faq-questionhome" onClick={() => toggleAnswer(3)}>
            <h3>How do I get started with BlockPay?</h3>
            <span className="toggle-iconhome">
              {openIndex === 3 ? "-" : "+"}
            </span>
          </div>
          {openIndex === 3 && (
            <p>
              Getting started is simple. Sign up, integrate with your existing
              systems, and start processing payroll immediately.
            </p>
          )}
        </li>
      </ul>
    </section>
  );
};

export default FAQsSection;

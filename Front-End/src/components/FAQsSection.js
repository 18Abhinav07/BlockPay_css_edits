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
            <h3>Is it free to join?</h3>
            <span className="toggle-iconhome">{openIndex === 0 ? "-" : "+"}</span>
          </div>
          {openIndex === 0 && (
            <p>
              Yes, joining our platform is completely free of charge. We're
              committed to making it accessible for everyone to connect with
              travel companions and embark on unforgettable journeys together.
              Sign up today and start exploring the world with like-minded
              companions.
            </p>
          )}
        </li>
        <li>
          <div className="faq-questionhome" onClick={() => toggleAnswer(1)}>
            <h3>How does identity verification work?</h3>
            <span className="toggle-iconhome">{openIndex === 1 ? "-" : "+"}</span>
          </div>
          {openIndex === 1 && <p>Identity verification works by...</p>}
        </li>
        <li>
          <div className="faq-questionhome" onClick={() => toggleAnswer(2)}>
            <h3>How do I find a compatible travel companion?</h3>
            <span className="toggle-iconhome">{openIndex === 2 ? "-" : "+"}</span>
          </div>
          {openIndex === 2 && (
            <p>You can find a compatible travel companion by...</p>
          )}
        </li>
        <li>
          <div className="faq-questionhome" onClick={() => toggleAnswer(3)}>
            <h3>
              Can I connect with more than one travel companion for my trip?
            </h3>
            <span className="toggle-iconhome">{openIndex === 3 ? "-" : "+"}</span>
          </div>
          {openIndex === 3 && (
            <p>
              Yes, you can connect with more than one travel companion by...
            </p>
          )}
        </li>
      </ul>
    </section>
  );
};

export default FAQsSection;

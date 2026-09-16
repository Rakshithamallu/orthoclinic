import React, { useState } from 'react';
import { FAQS } from '../data/faqData';

const FAQ = () => {
  const [openId, setOpenId] = useState('faq-why-visit');

  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="section" id="faqs">
      <div className="container">
        <div className="section-header">
          <span className="section-badge teal">CLEAR CLINICAL ANSWERS</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Transparent guidance about consultations, specialized treatments, diagnostic preparations, and clinic operations.
          </p>
        </div>

        <div className="faq-accordion-wrap">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-trigger"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon-indicator" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className="faq-body"
                >
                  <p className="faq-content">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

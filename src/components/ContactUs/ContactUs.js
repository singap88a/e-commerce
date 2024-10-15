import React from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div>
      <div className="main-content-container">
        <div className="header-divider" />
        <div className="contact-section1">
          <div className="central-content-container">
            <div className="header-section">
              <Link to="/" className="home-link-text-style">
                Home
              </Link>
              <div className="svg-container">
                <svg
                  fill="none"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    stroke="black"
                    strokeOpacity="0.5"
                    x1="9.44"
                    x2="3.44"
                    y1="0.35"
                    y2="12.1"
                  />
                </svg>
              </div>
              <p className="contact-info-text-style">Contact</p>
            </div>
            <div className="contact-section-container">
              <div className="contact-info-container1">
                <div className="contact-info-section1">
                  <div className="contact-info-container">
                    <div className="call-to-us-container">
                      <div className="svg-container1">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.55,6.24l-3.38-3.905c-0.39-0.45-1.105-0.448-1.558,0.006l-2.782,2.787c-0.828,0.829-1.065,2.06-0.586,3.047c2.862,5.925,7.64,10.71,13.561,13.58c0.986,0.479,2.216,0.242,3.044-0.587l2.808-2.813c0.455-0.455,0.456-1.174,0.002-1.564l-3.92-3.365c-0.41-0.352-1.047-0.306-1.458,0.106l-1.364,1.366c-0.07,0.073-0.162,0.121-0.261,0.137c-0.1,0.016-0.203,-0.001-0.292,-0.049c-2.229,-1.284-4.079,-3.136-5.36,-5.367c-0.048,-0.089-0.065,-0.192-0.049,-0.292c0.016,-0.1,0.064,-0.192,0.137,-0.262l1.36-1.361c0.412-0.414,0.457-1.054,0.101-1.465z"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="call-to-us-style">Call To Us</p>
                  </div>
                  <div className="contact-info-section">
                    <p className="contact-info-text1">
                      We are available 24/7, 7 days a week.
                    </p>
                    <p className="contact-info-text">Phone: +8801611112222</p>
                  </div>
                </div>
                <div className="contact-section">
                  <div className="contact-info-container">
                    <div className="contact-card">
                      <div className="svg-container1">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2,5l10,7l10,-7M2,19h20v-14h-20z"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="call-to-us-style">Write To Us</p>
                  </div>
                  <div className="contact-info-section">
                    <p className="contact-prompt-text-style contact-prompt-text-style1">
                      Fill out our form and we will contact you within 24 hours.
                    </p>
                    <p className="contact-prompt-text-style contact-prompt-text-style1">
                      Emails: customer@exclusive.com
                    </p>
                    <p className="contact-prompt-text-style contact-prompt-text-style1">
                      Emails: support@exclusive.com
                    </p>
                  </div>
                </div>
              </div>
              <form>
                <div className="message-container2">
                  <div className="message-container1">
                    <div className="hierarchical-text-container">
                      <input
                        className="input-field-with-label form-control "
                        placeholder="Your Name *"
                        type="text"
                        required
                      />
                    </div>
                    <div className="hierarchical-text-container">
                      <input
                        className="input-field-with-label form-control "
                        placeholder="Your Email *"
                        type="email"
                        required
                      />
                    </div>
                    <div className="hierarchical-text-container">
                      <input
                        className="input-field-with-label form-control "
                        placeholder="Your Phone *"
                        type="tel"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control   "
                      rows="6"
                      placeholder="Your Message *"
                    ></textarea>
                  </div>
                  <button className="send-message-button">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

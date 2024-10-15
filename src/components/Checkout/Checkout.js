import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Checkout.css";

export default function Checkout() {
  const location = useLocation();
  const { cartItems, totalAmount } = location.state || {
    cartItems: [],
    totalAmount: 0,
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="container">
      <div className="main-content-container">
        <div className="border-divider-horizontal" />

        {isSubmitted ? (
          <div className="success-message">
            <h2>Checkout Successful!</h2>
            <p>Your order has been placed successfully.</p>
          </div>
        ) : (
          <div className="account-details-section">
            <div className="main-content-container1">
              <div className="billing-details-container1">
                <p className="heading-primary">Billing Details</p>
                <div className="billing-details-container">
                  <div className="customer-details-section">
                    <form onSubmit={handleSubmit}>
                      <div className="fullwidth-container">
                        <label className="faded-text-heading">
                          Name <span className="required-field-marker">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-field-container"
                          required
                        />
                      </div>

                      <div className="company-header">
                        <label className="faded-text-heading">
                          Street Address{" "}
                          <span className="required-field-marker">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-field-container"
                          required
                        />
                      </div>

                      <div className="company-header">
                        <label className="faded-text-heading">
                          Apartment, floor, etc. (optional)
                        </label>
                        <input type="text" className="form-field-container" />
                      </div>

                      <div className="company-header">
                        <label className="faded-text-heading">
                          Town/City{" "}
                          <span className="required-field-marker">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-field-container"
                          required
                        />
                      </div>

                      <div className="company-header">
                        <label className="faded-text-heading">
                          Phone Number{" "}
                          <span className="required-field-marker">*</span>
                        </label>
                        <input
                          type="tel"
                          className="form-field-container"
                          required
                        />
                      </div>

                      <div className="company-header">
                        <div className="fullwidth-container">
                          <label className="faded-text-heading">
                            Email Address{" "}
                            <span className="required-field-marker">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-field-container"
                            required
                          />
                        </div>
                      </div>

                      <button type="submit" className="primary-action">
                        Submit
                      </button>
                    </form>
                  </div>

                  <div className="Checkout">
                    <h2 className="text-center mb-4">Checkout</h2>

                    <div className="row">
                      <div className="col-md-10 offset-md-1">
                        <div className="order-summary">
                          <h4>Your Order</h4>
                          {cartItems.length === 0 ? (
                            <p>Your cart is empty</p>
                          ) : (
                            <div>
                              {cartItems.map((item, index) => (
                                <div
                                  key={index}
                                  className="d-flex justify-content-between mb-3 border-bottom mb-4"
                                >
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      objectFit: "cover",
                                    }}
                                    className="image"
                                  />
                                  <div>
                                    <h6>{item.title}</h6>
                                    <p>Quantity: {item.quantity}</p>
                                  </div>
                                  <h6 className="price">
                                    $
                                    {(
                                      item.discounted_price * item.quantity
                                    ).toFixed(2)}
                                  </h6>
                                </div>
                              ))}
                              <div className="fullwidth-container section-title-subtotal-display-style">
                                <div className="section-subtotal-display-style">
                                  <p className="section-title-display-style">
                                    Shipping:
                                  </p>
                                  <p className="section-title-display-style">
                                    Free
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between mt-4">
                                <h5>Total</h5>
                                <h5>${totalAmount.toFixed(2)}</h5>
                              </div>
                              <div className="payment-method-section">
                                <div className="svg-container1">
                                  <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    x="0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    y="0"
                                  >
                                    <g
                                      data-node-id="197:4505"
                                      id="Radio Button_2"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <circle
                                        cx="12"
                                        cy="12"
                                        data-node-id="I197:4505;197:4503"
                                        id="Ellipse 28_2"
                                        r="11.25"
                                        stroke="black"
                                        strokeWidth="1.5"
                                      />
                                      <circle
                                        cx="12"
                                        cy="12"
                                        data-node-id="I197:4505;197:4504"
                                        fill="black"
                                        id="Ellipse 29"
                                        r="7"
                                      />
                                    </g>
                                  </svg>
                                </div>
                                <p className="info-message-text-style">
                                  Cash on delivery
                                </p>
                              </div>
                              <button className="primary-action-btn">
                                Place Order
                              </button>{" "}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

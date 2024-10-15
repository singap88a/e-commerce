import React from "react";

export default function Banner_icon() {
  return (
    <div className="container my-5">
      <div className="row justify-content-around">
        <div className="col-12 col-md-4 text-center">
          <img
            className="rounded-circle mb-3"
            style={{ width: "5rem", height: "5rem" }}
            src="img/Banner_icon_1.png"
            alt="Free and Fast Delivery"
          />
          <div>
            <p className="fw-bold">FREE AND FAST DELIVERY</p>
            <p>Free delivery for all orders over $140</p>
          </div>
        </div>
        <div className="col-12 col-md-4 text-center">
          <img
            className="rounded-circle mb-3"
            style={{ width: "5rem", height: "5rem" }}
            src="img/Banner_icon_2.png"
            alt="24/7 Customer Service"
          />
          <div>
            <p className="fw-bold">24/7 CUSTOMER SERVICE</p>
            <p>Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="col-12 col-md-4 text-center">
          <img
            className="rounded-circle mb-3"
            style={{ width: "5rem", height: "5rem" }}
            src="img/Banner_icon_3.png"
            alt="Money Back Guarantee"
          />
          <div>
            <p className="fw-bold">MONEY BACK GUARANTEE</p>
            <p>We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

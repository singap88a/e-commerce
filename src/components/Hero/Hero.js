import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero ">
      <div
        className="carousel slide"
        id="carouselExampleInterval"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            aria-current="true"
            aria-label="Slide 1"
            className="active"
            data-bs-slide-to="0"
            data-bs-target="#carouselExampleInterval"
            type="button"
          />
          <button
            aria-label="Slide 2"
            data-bs-slide-to="1"
            data-bs-target="#carouselExampleInterval"
            type="button"
          />
          <button
            aria-label="Slide 3"
            data-bs-slide-to="2"
            data-bs-target="#carouselExampleInterval"
            type="button"
          />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              alt="Digital Marketing Flash Sale"
              className="d-block w-100 carousel-img"
              src="https://cdn.vectorstock.com/i/500p/46/51/digital-marketing-concept-flash-sale-shopping-vector-31204651.avif"
            />
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <img
              alt="Shopping Online Discount"
              className="d-block w-100 carousel-img"
              src="https://cdn.vectorstock.com/i/500p/91/98/shopping-online-with-discount-conceptual-banner-vector-47519198.avif"
            />
          </div>
          <div className="carousel-item">
            <img
              alt="Online Shopping Banner"
              className="d-block w-100 carousel-img"
              src="https://cdn.vectorstock.com/i/500p/09/80/online-shopping-banner-vector-17230980.avif"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          data-bs-slide="prev"
          data-bs-target="#carouselExampleInterval"
          type="button"
        >
          <span aria-hidden="true" className="carousel-control-prev-icon" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          data-bs-slide="next"
          data-bs-target="#carouselExampleInterval"
          type="button"
        >
          <span aria-hidden="true" className="carousel-control-next-icon" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar({ cartItems }) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery) {
      window.location.href = `/search?query=${searchQuery}`;
    }
  };

  const handleLinkClick = () => {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            className="logo img-fluid"
            src="https://cdn-icons-png.freepik.com/512/8907/8907034.png"
            alt="Logo"
          />
        </Link>

        <div className="d-flex order-lg-1">
          <Link
            to="/cart"
            className="btn btn-outline-primary position-relative m-2 cart"
          >
            <FaShoppingCart />
            {totalItems > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Products_pro"
                className="nav-link"
                onClick={handleLinkClick}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ContactUs"
                className="nav-link"
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <form className="d-flex search" role="search" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search products..."
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearch}
              />
              <button className="btn btn-outline-success" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

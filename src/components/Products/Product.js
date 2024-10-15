import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Product(props) {
  const { product } = props;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const discountPercentage =
    ((product.price - product.discounted_price) / product.price) * 100;

  return (
    <div onClick={handleCardClick} style={{ cursor: "pointer" }}>
      <div className="card Product">
        <img src={product.image} alt={product.title} className="card-img-top" />
        <div className="card-body">
          <p
            className="card-title text-truncate"
            style={{ maxHeight: "3rem", overflow: "hidden" }}
          >
            {product.title}
          </p>
          <div className="price_details">
            <div className="discount-percentage">
              <p>{Math.round(discountPercentage)}% </p>
            </div>
            <p>${product.discounted_price.toFixed(2)}</p>
            <p className="old_price">${product.price}</p>
            <div className="stars">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                  key={index}
                  color={index < product.stars ? "gold" : "gray"}
                />
              ))}
            </div>
            <div className="cart-icon">
              <h6>Add To Cart</h6>
              <FaShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

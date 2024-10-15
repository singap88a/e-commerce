import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Cart({ cartItems, removeFromCart }) {
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (total, item) => total + (item.discounted_price || 0) * item.quantity,
    0
  );

  const handleBuyNow = () => {
    if (cartItems.length > 0) {
      navigate("/checkout", { state: { cartItems, totalAmount } });
    } else {
      alert("Your cart is empty!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center fs-5">Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="row align-items-center mb-4 border-bottom pb-3"
            >
              <div className="col-md-3">
                <img
                  src={item.image}
                  className="img-fluid rounded"
                  alt={item.title}
                  style={{ height: "150px", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-6">
                <h5>{item.title}</h5>
                <p className="text-muted">{item.description}</p>
              </div>
              <div className="col-md-3 text-end">
                <h6>
                  Price: $
                  {item.discounted_price
                    ? item.discounted_price.toFixed(2)
                    : "0.00"}
                </h6>
                <p>Quantity: {item.quantity}</p>
                <h6 className="text-success">
                  Total: $
                  {item.discounted_price
                    ? (item.discounted_price * item.quantity).toFixed(2)
                    : "0.00"}
                </h6>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove from cart"
                  style={{ backgroundColor: "var(--orange)", color: "white" }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}

          <div className="row mt-4">
            <div className="col-md-12">
              <div className="p-4 bg-light rounded-3 shadow-sm">
                <h5 className="text-center">
                  Total Amount: ${totalAmount ? totalAmount.toFixed(2) : "0.00"}
                </h5>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              className="btn m-4"
              onClick={handleBuyNow}
              style={{ backgroundColor: "var(--orange)", color: "white" }}
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

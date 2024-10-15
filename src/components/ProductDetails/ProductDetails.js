import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import ProductsList from "../Products/ProductsList";
import { FaStar, FaShoppingCart } from "react-icons/fa"; // تأكد من إضافة الاستيراد للأيقونة
import productsData from "../../products.json"; // تأكد من أن المسار صحيح

export default function ProductDetails({ addToCart }) {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // بدلاً من fetch، سنقوم بالبحث عن المنتج من ملف JSON
    const foundProduct = productsData.find(
      (item) => item.id === parseInt(params.productId)
    );
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [params.productId]);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="container mt-5 mb-5 ">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded mb-3 w-50"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3 ProductDetails-title">{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <h5 className="text-primary-Price">
            Price: ${product.discounted_price}
          </h5>
          <p className="old_price">Price: ${product.price}</p>
          <div className="stars">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                color={index < product.stars ? "gold" : "gray"}
              />
            ))}
          </div>

          <div className="d-flex align-items-center my-3">
            <button
              className="btn btn-outline-secondary"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="mx-3">{quantity}</span>
            <button
              className="btn btn-outline-secondary"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>

          <button
            className="btn btn-primary Add_to_Cart"
            onClick={handleAddToCart}
          >
            <FaShoppingCart className="me-2" /> {/* أيقونة السلة مع مسافة */}
            Add to Cart
          </button>
        </div>
      </div>

      <ProductsList />
    </div>
  );
}

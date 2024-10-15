import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navber/Navbar";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductsList from "./components/Products/ProductsList";
import Cart from "./components/Cart";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products_pro/Products";
import Checkout from "./components/Checkout/Checkout";
import Banner from "./components/Banner/Banner";
import Banner_icon from "./components/Banner_icon/Banner_icon";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    const updatedCart = [...cartItems];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      updatedCart[existingProductIndex].quantity += quantity;
    } else {
      updatedCart.push({ ...product, quantity });
    }

    setCartItems(updatedCart);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Banner />
              <ProductsList addToCart={addToCart} />
              <Banner_icon />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/product/:productId"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
        <Route path="/products_pro" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

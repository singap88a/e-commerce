import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import productsData from "../../products.json"; // تأكد من أن المسار صحيح

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all"); // حالة لتخزين الفئة النشطة

  useEffect(() => {
    // بدلاً من fetch، سنقوم بتعيين البيانات مباشرة من ملف JSON
    try {
      const data = productsData;
      setProducts(data);
      setFilteredProducts(data);

      const uniqueCategories = [
        "all",
        ...new Set(data.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);

      setLoading(false);
    } catch (error) {
      setError("Failed to load products");
      setLoading(false);
    }
  }, []);

  const filterProducts = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
    setActiveCategory(category); // تعيين الفئة النشطة
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h2 className="text-center p-5">Our Products</h2>

      <div className="d-flex justify-content-center mb-5">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`btn m-2 btn-filter ${activeCategory === category ? "active" : ""}`} // إضافة class نشط
            onClick={() => filterProducts(category)}
            style={{ 
              backgroundColor: activeCategory === category ? "#003e7e" : "#f26a27", // لون الزر حسب الحالة النشطة
              border: "none", 
              color: activeCategory === category ? "#fff" : "#000" // تغيير لون النص حسب الحالة النشطة
            }} 
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="row pb-5 fade-in">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 g-4"
              key={product.id}
            >
              <Product product={product} showButton={true} />
            </div>
          ))
        ) : (
          <p className="text-center">No products found</p>
        )}
      </div>
    </div>
  );
}

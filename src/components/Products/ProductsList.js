import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

// استيراد ملف الـ JSON مباشرة
import productsData from "../../products.json"; // تأكد من أن المسار صحيح

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  // استيراد البيانات عند تحميل الصفحة
  useEffect(() => {
    // استثناء المنتج الذي يحتوي على id = 6
    const filteredData = productsData.filter(product => product.id !== 6);
    setProducts(filteredData);
  }, []);

  return (
    <div className="container mb-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="text-center p-5">Our Products</h2>
        <div className="navigation-buttons">
          <button className="btn custom-prev">&#8249;</button>
          <button className="btn custom-next">&#8250;</button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        breakpoints={{
          320: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Product product={product} showButton={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

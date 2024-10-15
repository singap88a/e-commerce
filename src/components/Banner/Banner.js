import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Banner.css";

const Banner = () => {
  const bannerImages = [
    {
      id: 1,
      src: "https://images-eu.ssl-images-amazon.com/images/G/42/outbound/ghoneimh/EG_trust_campaign_bubblers_payment_options_400x400_AR._CB559066670_.jpg",
      alt: "Banner 1",
    },
    {
      id: 2,
      src: "https://images-eu.ssl-images-amazon.com/images/G/42/outbound/ghoneimh/EG_trust_campaign_bubblers_Todays_deals_400x400_AR._CB559066665_.jpg",
      alt: "Banner 2",
    },
    {
      id: 3,
      src: "https://images-eu.ssl-images-amazon.com/images/G/42/outbound/ghoneimh/EG_trust_campaign_bubblers_coupons_400x400_AR._CB559066670_.jpg",
      alt: "Banner 3",
    },
    {
      id: 4,
      src: "https://images-eu.ssl-images-amazon.com/images/G/42/outbound/ghoneimh/EG_trust_campaign_bubblers_track_order_400x400_AR._CB559066665_.jpg",
      alt: "Banner 4",
    },
    {
      id: 5,
      src: "https://images-eu.ssl-images-amazon.com/images/G/42/outbound/ghoneimh/EG_trust_campaign_bubblers_returns_refunds_400x400_AR._CB559066670_.jpg",
      alt: "Banner 5",
    },
    {
      id: 6,
      src: "https://images-eu.ssl-images-amazon.com/images/G/42/outbound/ghoneimh/EG_trust_campaign_bubblers_Mobile_accounts_400x400_AR._CB559066670_.jpg",
      alt: "Banner 6",
    },
    {
      id: 7,
      src: "https://images-eu.ssl-images-amazon.com/images/G/42/outbound/ghoneimh/EG_trust_campaign_bubblers_Free_Shipping_400x400_AR._CB559066670_.jpg",
      alt: "Banner 6",
    },
    {
      id: 7,
      src: "https://images-eu.ssl-images-amazon.com/images/G/42/outbound/ghoneimh/EG_trust_campaign_bubblers_Discover_Prime_400x400_AR._CB559066670_.jpg",
      alt: "Banner 6",
    },
  ];

  return (
    <Swiper
      className="container Banner"
      spaceBetween={10}
      slidesPerView={5}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      breakpoints={{
        320: { slidesPerView: 2 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1200: { slidesPerView: 5 },
      }}
      modules={[Autoplay]}
    >
      {bannerImages.map((image) => (
        <SwiperSlide key={image.id}>
          <img src={image.src} alt={image.alt} className="banner-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;

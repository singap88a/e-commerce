import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./About.css";
import Banner_icon from "../Banner_icon/Banner_icon";

export default function About() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      img: "https://png.pngtree.com/png-vector/20231103/ourmid/pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_10329231.png",
      social: {
        twitter: "tel:+123456789",
        linkedin: "http://www.linkedin.com",
        instagram: "http://www.instagram.com",
      },
    },
    {
      name: "Jane Smith",
      role: "CTO",
      img: "https://png.pngtree.com/png-vector/20230915/ourmid/pngtree-man-in-suit-sitting-with-laptop-businessman-sitting-working-in-front-png-image_10075262.png",
      social: {
        twitter: "tel:+123456789",
        linkedin: "http://www.linkedin.com",
        instagram: "http://www.instagram.com",
      },
    },
    {
      name: "Sarah Wilson",
      role: "Marketing Manager",
      img: "https://www.seekpng.com/png/detail/891-8914393_professional-women.png",
      social: {
        twitter: "tel:+123456789",
        linkedin: "http://www.linkedin.com",
        instagram: "http://www.instagram.com",
      },
    },
    {
      name: "Robert Johnson",
      role: "CFO",
      img: "https://static.vecteezy.com/system/resources/thumbnails/044/245/414/small_2x/confident-young-businessman-writing-on-a-clipboard-png.png",
      social: {
        twitter: "tel:+123456789",
        linkedin: "http://www.linkedin.com",
        instagram: "http://www.instagram.com",
      },
    },
    {
      name: "Emily Davis",
      role: "COO",
      img: "https://static.vecteezy.com/system/resources/thumbnails/024/558/280/small_2x/businessman-isolated-illustration-ai-generative-free-png.png",
      social: {
        twitter: "tel:+123456789",
        linkedin: "http://www.linkedin.com",
        instagram: "http://www.instagram.com",
      },
    },
    {
      name: "Michael Brown",
      role: "Head of Sales",
      img: "https://www.pngitem.com/pimgs/m/444-4443026_professional-business-photo-woman-png-download-professional-business.png",
      social: {
        twitter: "tel:+123456789",
        linkedin: "http://www.linkedin.com",
        instagram: "http://www.instagram.com",
      },
    },
  ];

  return (
    <div className="container about">
      <div className="main-content-container">
        <div className="main-content-section mt-5">
          <hr className="section-divider my-4" />
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mx-auto">
            <div className="story-container">
              <h1 className="hero-title">Marketplace Overview</h1>
              <div className="marketplace-description mt-4">
                <p className="exclusive-description">
                  Welcome to the exclusive overview of our marketplace.
                </p>
                <p className="exclusive-details-text-style mt-3">
                  Find the best sellers and products from all over the world.
                </p>
              </div>
            </div>
            <img
              src="https://www.terawork.com/blog/wp-content/uploads/2022/11/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a-1-1.png"
              alt="Exclusive"
              className="exclusive-image-cover img-fluid rounded main-content-img"
            />
          </div>
        </div>
        <div className="flex-card-group d-flex flex-wrap justify-content-between align-items-start mt-5 mx-auto w-100 gap-4">
          {[
            {
              img: "img/about-1.png",
              count: "10.5k",
              text: "Sallers active our site",
            },
            {
              img: "img/Banner_icon_3.png",
              count: "33k",
              text: "Monthly Product Sale",
            },
            {
              img: "img/about-2.png",
              count: "45.5k",
              text: "Customer active in our site",
            },
            {
              img: "img/about-3.png",
              count: "25k",
              text: "Annual gross sale in our  ",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="sales-info-container border rounded p-4 text-center flex-grow-1"
            >
              <img
                src={item.img}
                alt="Activity"
                className="site-activity-image mb-3"
              />
              <div className="site-activity-stats">
                <p className="active-sallers-count">{item.count}</p>
                <p className="active-sallers-text-style">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="team-bios-section mt-5">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="team-member-card">
                  <div className="card-container border rounded p-3 bg-light">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="image-container img-fluid mb-4"
                    />
                    <div className="personnel-card">
                      <p className="executive-name-style">{member.name}</p>
                      <p className="executive-info">{member.role}</p>
                      <div className="phone-links d-flex gap-2">
                        <a href={member.social.twitter} className="mx-2">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href={member.social.linkedin} className="mx-2">
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href={member.social.instagram} className="mx-2">
                          <i className="fa-brands fa-square-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Banner_icon />
    </div>
  );
}

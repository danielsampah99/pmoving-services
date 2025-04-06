"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const services = [
  { title: "Residential Movers", icon: "🏠", image: "/residential.jpg" },
  { title: "Specialty Movers", icon: "📦", image: "/specialty.jpg" },
  { title: "Commercial Moving", icon: "🏢", image: "/commercial.jpg" },
  { title: "Packing & Unpacking Service", icon: "📦", image: "/packing.jpg" },
  { title: "Storage", icon: "📦", image: "/storage.jpg" },
];

export default function ServicesCarousel() {
  return (
    <div className="w-full px-6 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">OUR SERVICES:</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        className="w-full relative"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover brightness-75"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white font-semibold">
                <span className="text-xl">{service.icon}</span>
                {service.title}
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        {/* Custom Pagination */}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}
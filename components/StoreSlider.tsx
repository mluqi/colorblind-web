"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const storeLogos = [
  { src: "/assets/logo.png", alt: "Store Logo 1", href: "#" },
  { src: "/assets/logo_header.png", alt: "Store Logo 2", href: "#" },
  { src: "/assets/logo.png", alt: "Store Logo 3", href: "#" },
  { src: "/assets/logo_header.png", alt: "Store Logo 4", href: "#" },
  { src: "/assets/logo.png", alt: "Store Logo 5", href: "#" },
  { src: "/assets/logo_header.png", alt: "Store Logo 6", href: "#" },
  { src: "/assets/logo.png", alt: "Store Logo 7", href: "#" },
];

const StoreSlider = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-900 mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Find us on your favorite store
          </h2>
          <p className="text-gray-400 text-md md:text-lg max-w-xl mx-auto">
            Colorblind Coil is Available at
          </p>
        </div>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={2}
          spaceBetween={30}
          grabCursor={true}
          className="store-logo-slider"
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: 5, spaceBetween: 50 },
            1280: { slidesPerView: 6, spaceBetween: 50 },
          }}
        >
          {storeLogos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <a href={logo.href} target="_blank" rel="noopener noreferrer" className="block opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="relative h-16 w-32 md:h-20 md:w-40">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StoreSlider;
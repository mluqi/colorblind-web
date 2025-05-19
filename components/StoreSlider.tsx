"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const storeLogos = [
  { src: "/assets/store/arkana.png", alt: "Store Logo 1", href: "#" },
  { src: "/assets/store/bangkokvapestore.png", alt: "Store Logo 2", href: "#" },
  { src: "/assets/store/gajahmada.png", alt: "Store Logo 3", href: "#" },
  { src: "/assets/store/gajahmada1.png", alt: "Store Logo 4", href: "#" },
  { src: "/assets/store/kangvape.png", alt: "Store Logo 5", href: "#" },
  { src: "/assets/store/kentos.png", alt: "Store Logo 6", href: "#" },
  { src: "/assets/store/kentoz.png", alt: "Store Logo 7", href: "#" },
  { src: "/assets/store/king.png", alt: "Store Logo 7", href: "#" },
  { src: "/assets/store/leader.png", alt: "Store Logo 7", href: "#" },
  { src: "/assets/store/mrvapestore.png", alt: "Store Logo 7", href: "#" },
  { src: "/assets/store/rams_vape_store.png", alt: "Store Logo 7", href: "#" },
  { src: "/assets/store/rivervape.png", alt: "Store Logo 7", href: "#" },
  { src: "/assets/store/sky.png", alt: "Store Logo 7", href: "#" },
  { src: "/assets/store/tvs.png", alt: "Store Logo 7", href: "#" },
  { src: "/assets/store/vapestore.png", alt: "Store Logo 7", href: "#" },
  { src: "/assets/store/zdan.png", alt: "Store Logo 7", href: "#" },
  { src: "/assets/store/leaderslawi.png", alt: "Store Logo 7", href: "#" },
];

const StoreSlider = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-900 mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Find us on your Favorite Vapestore
          </h2>
          <p className="text-gray-400 text-md md:text-lg max-w-xl mx-auto">
            Colorblind Coil is Available at
          </p>
        </div>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={5}
          spaceBetween={30}
          grabCursor={true}
          className="store-logo-slider"
          breakpoints={{
            640: { slidesPerView: 4, spaceBetween: 20 },
            768: { slidesPerView: 5, spaceBetween: 30 },
            1024: { slidesPerView: 6, spaceBetween: 40 },
            1280: { slidesPerView: 7, spaceBetween: 40 },
          }}
        >
          {storeLogos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <a className="block opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="relative h-16 w-32 md:h-40 md:w-40">
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
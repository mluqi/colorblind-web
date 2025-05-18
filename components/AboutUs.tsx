"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const AboutUs = () => {
  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const mainImages = [
    { src: "/assets/about_us.jpg", label: "Since 2021" },
    { src: "/assets/details/detail1.jpg", label: "Coil Premium" },
    { src: "/assets/details/detail4.jpg", label: "High Performance" },
    { src: "/assets/details/detail5.jpg", label: "Good Durability" },
    { src: "/assets/details/detail7.jpg", label: "Bold Flavour" },
    { src: "/assets/details/detail10.jpg", label: "Colorblind Detail" },
    { src: "/assets/details/detail11.jpg", label: "Colorblind Detail" },
    { src: "/assets/details/detail12.jpg", label: "Colorblind Detail" },
    { src: "/assets/details/detail13.jpg", label: "Colorblind Detail" },
    { src: "/assets/details/detail15.jpg", label: "Colorblind Detail" },
    { src: "/assets/details/detail2.jpg", label: "Colorblind Detail" },
  ];

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <div className="blockn">
              <Swiper
                spaceBetween={16}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                modules={[Pagination, Autoplay]}
                className="w-full h-96"
              >
                {mainImages.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative h-96 w-full rounded-xl overflow-hidden border border-gray-800">
                      <Image
                        src={img.src}
                        alt={img.label}
                        fill
                        className="object-cover"
                        priority={idx === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <span className="inline-block px-4 py-2 bg-red-600 rounded-full text-sm font-medium">
                          {img.label}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Grid Image Bawah */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <motion.div
                className="relative h-40 rounded-xl overflow-hidden border border-gray-800"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="/assets/details/detail14.jpg"
                  alt="Coil Closeup 1"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="relative h-40 rounded-xl overflow-hidden border border-gray-800"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Image
                  src="/assets/details/detail9.jpg"
                  alt="Coil Closeup 2"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                Colorblind Prebuild Coil
              </span>
            </h2>

            <p className="text-gray-400 mb-6 text-lg">
              Kami adalah pionir dalam pembuatan prebuilt coil premium untuk para vaper yang mengutamakan kualitas dan performa.
            </p>

            <div className="space-y-6 mb-8">
              {/* Handcrafted */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Handcrafted Precision</h3>
                  <p className="text-gray-400">Setiap coil dibuat dengan ketelitian tangan ahli</p>
                </div>
              </div>

              {/* Performance */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Optimal Performance</h3>
                  <p className="text-gray-400">Desain coil kami memberikan flavor maksimal dan ketahanan yang baik</p>
                </div>
              </div>

              {/* Materials */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
                  <p className="text-gray-400">Hanya menggunakan material berkualitas tinggi: Ni80 dan Ni90</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">What Coils Can We Make ?</h3>
                  <p className="text-gray-400">Alien 2core/3core, clapton, fused clapton, staggered fused clapton </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-8">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-400">
                &quot;Memberikan pengalaman vaping terbaik melalui inovasi coil yang konsisten, tahan lama, dan penuh flavor. Kami percaya setiap hisapan harus sempurna.&quot;
              </p>
            </div>

            {/* <Button className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full text-lg">
              Meet Our Team
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

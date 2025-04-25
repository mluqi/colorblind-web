// components/AboutUs.jsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="relative h-96 w-full rounded-xl overflow-hidden border border-gray-800">
              <Image
                src="/assets/about/workshop.jpg"
                alt="Our Coil Workshop"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="inline-block px-4 py-2 bg-red-600 rounded-full text-sm font-medium">
                  Since 2015
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative h-40 rounded-xl overflow-hidden border border-gray-800">
                <Image
                  src="/assets/about/coil-closeup.jpg"
                  alt="Coil Closeup"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden border border-gray-800">
                <Image
                  src="/assets/about/team.jpg"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                Masters of Vape Coil Engineering
              </span>
            </h2>
            
            <p className="text-gray-400 mb-6 text-lg">
              Kami adalah pionir dalam pembuatan prebuilt coil premium untuk para vaper yang mengutamakan kualitas dan performa.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Handcrafted Precision</h3>
                  <p className="text-gray-400">Setiap coil dibuat dengan ketelitian tangan ahli dan mesin presisi tinggi</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Optimal Performance</h3>
                  <p className="text-gray-400">Desain coil kami memberikan flavor maksimal dan produksi cloud yang memuaskan</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
                  <p className="text-gray-400">Hanya menggunakan material berkualitas tinggi: Ni80, SS316L, dan Kanthal premium</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-8">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-400">
                "Memberikan pengalaman vaping terbaik melalui inovasi coil yang konsisten, tahan lama, dan penuh flavor. Kami percaya setiap hisapan harus sempurna."
              </p>
            </div>
            
            <Button className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full text-lg">
              Meet Our Team
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
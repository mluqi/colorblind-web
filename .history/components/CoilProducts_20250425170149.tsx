// components/CoilProducts.jsx
"use client";

import { Button } from "@/components/ui/button";
import CoilCard from "@/components/CoilCard";

const CoilProducts = () => {
  const coils = [
    {
      id: 1,
      name: "Clapton Pro Coil",
      type: "0.3Ω | Ni80",
      description: "Enhanced flavor with dense vapor production",
      price: 9.99,
      image: "/assets/coils/clapton-pro.png"
    },
    {
      id: 2,
      name: "Mesh Supreme",
      type: "0.15Ω | SS316L",
      description: "Instant ramp-up for intense flavor",
      price: 12.99,
      image: "/assets/coils/mesh-supreme.png"
    },
    // Tambahkan coil lainnya...
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            PREMIUM COIL COLLECTIONS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Optimized for flavor chasing and cloud production
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coils.map((coil) => (
            <CoilCard 
              key={coil.id}
              name={coil.name}
              type={coil.type}
              description={coil.description}
              price={coil.price}
              image={coil.image}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="px-8 py-4 bg-red-600 hover:bg-red-700">
            Browse All Coils
          </Button>
        </div>
      </div>
    </section>
  );
};
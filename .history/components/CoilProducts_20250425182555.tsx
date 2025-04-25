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
      image: "/assets/coils/clapton-pro.png",
      resistance: "0.3Ω",
      material: "Ni80",
      wattage: "40-60W",
      bestFor: "Flavor Chasing",
      lifespan: "7-10 days",
      compatible: ["Voopoo", "GeekVape", "SMOK"]
    },
    {
      id: 2,
      name: "Mesh Supreme",
      type: "0.15Ω | SS316L",
      description: "Instant ramp-up for intense flavor",
      price: 12.99,
      image: "/assets/coils/mesh-supreme.png",
      resistance: "0.15Ω",
      material: "SS316L",
      wattage: "50-70W",
      bestFor: "Cloud Production",
      lifespan: "10-14 days",
      compatible: ["Vaporesso", "Freemax", "HorizonTech"]
    },
    {
      id: 3,
      name: "Alien Fused",
      type: "0.2Ω | Ni90",
      description: "Complex build for maximum surface area",
      price: 14.99,
      image: "/assets/coils/alien-fused.png",
      resistance: "0.2Ω",
      material: "Ni90",
      wattage: "60-80W",
      bestFor: "Balance",
      lifespan: "5-8 days",
      compatible: ["Dovpo", "Vandy Vape", "Wotofo"]
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white relative overflow-hidden rounded-xl">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-red-600 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-purple-600 blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 ">
            PREMIUM COIL COLLECTIONS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
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
              resistance={coil.resistance}
              material={coil.material}
              wattage={coil.wattage}
              bestFor={coil.bestFor}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-lg font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg">
            Browse All Coils
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoilProducts;
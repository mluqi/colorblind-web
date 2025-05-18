"use client";

import { Button } from "@/components/ui/button";
import CoilCard from "@/components/CoilCard";

const CoilProducts = () => {
  const coils = [
    {
      id: 1,
      name: "Baby alien",
      type: "For dual coil",
      description: "Enhanced flavor with dense vapor production",
      price: 35000,
      image: "/assets/coils/aliendualcore.jpeg",
      resistance: "0.18 - 0.20Ω",
      diameter: "3.0mm | 5warp",
      material: "Ni80 US",
      wattage: "55-70W",
      bestFor: "balance",
      lifespan: "2-3 weeks",
      compatible: ["All double RDA,RTA,RDTA"]
    },
    {
      id: 2,
      name: "Alien single",
      type: "Special for single",
      description: "Instant ramp-up for intense flavor",
      price: 30000,
      image: "/assets/coils/aliensingle.jpeg",
      resistance: "0.27-0.29Ω",
      diameter: "3.0mm | 6warp",
      material: "Ni80 US mixed",
      wattage: "40-45W",
      bestFor: "flavour,Troathit, sweet reduce",
      lifespan: "2-3 weeks",
      compatible: ["All single RDA,RTA,RDTA"]
    },
    {
      id: 3,
      name: "Alien AIO v1",
      type: "for AIO",
      description: "Complex build for maximum surface area",
      price: 40000,
      image: "/assets/coils/aiov1.jpeg",
      resistance: "0.31-0.34Ω",
      diameter: "2.5mm | 5warp",
      material: "Ni80 US",
      wattage: "30-40W",
      bestFor: "Bold flavour & cloud",
      lifespan: "2 weeks",
      compatible: ["All RBA base"]
    },
    {
      id: 4,
      name: "Alien AIO v2",
      type: "for AIO",
      description: "Complex build for maximum surface area",
      price: 40000,
      image: "/assets/coils/aiov2.jpeg",
      resistance: "0.31-0.34Ω",
      diameter: "2.5mm | 5warp",
      material: "Ni80 US mixed",
      wattage: "30-40W",
      bestFor: "Bold flavour & sweet",
      lifespan: "2 weeks",
      compatible: ["All RBA base"]
    }
  ];

  return (
    <section id="product" className="py-16 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-red-600 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-purple-600 blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 ">
            PREMIUM COIL COLLECTIONS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Optimized for flavor chasing and good durability
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
              diameter={coil.diameter}
              material={coil.material}
              wattage={coil.wattage}
              bestFor={coil.bestFor}
            />
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-lg font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg">
            Browse All Coils
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default CoilProducts;